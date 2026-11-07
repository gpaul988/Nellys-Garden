module.exports = {
  apps: [
    {
      name: "web-app",
      cwd: __dirname,
      script: "packages/web/src/server.ts",
      interpreter: "node",
      interpreter_args: "--env-file-if-exists=.env --import tsx",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      restart_delay: 1000,
      env: {
        PORT: process.env.PORT || 4200,
      },
    },
  ],
};
