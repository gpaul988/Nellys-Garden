const { execFileSync } = require("node:child_process");

const port = Number(process.env.PORT ?? 4200);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("PORT must be an integer between 1 and 65535.");
  process.exit(1);
}

function getWindowsPids() {
  const output = execFileSync("netstat", ["-ano", "-p", "tcp"], {
    encoding: "utf8",
  });
  const pids = new Set();

  for (const line of output.split(/\r?\n/)) {
    const match = line.match(
      /^\s*TCP\s+\S+:(\d+)\s+\S+\s+LISTENING\s+(\d+)\s*$/i,
    );
    if (match && Number(match[1]) === port && Number(match[2]) > 0) {
      pids.add(match[2]);
    }
  }

  return [...pids];
}

function getUnixPids() {
  try {
    const output = execFileSync(
      "lsof",
      ["-t", `-iTCP:${port}`, "-sTCP:LISTEN"],
      { encoding: "utf8" },
    );
    return [...new Set(output.split(/\r?\n/).filter(Boolean))];
  } catch (error) {
    if (error.status === 1) return [];
    throw error;
  }
}

const pids =
  process.platform === "win32" ? getWindowsPids() : getUnixPids();

if (pids.length === 0) {
  console.log(`No process is listening on port ${port}.`);
  process.exit(0);
}

for (const pid of pids) {
  if (process.platform === "win32") {
    execFileSync("taskkill", ["/PID", pid, "/T", "/F"], { stdio: "inherit" });
  } else {
    process.kill(Number(pid), "SIGTERM");
  }
  console.log(`Stopped process ${pid} listening on port ${port}.`);
}
