import { Route, Switch } from "wouter";
import Home from "./pages/home";
import Plants from "./pages/plants";
import Tips from "./pages/tips";
import Resources from "./pages/resources";
import Community from "./pages/community";
import Contact from "./pages/contact";
import { Layout } from "./layout";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";

// Grey Infotech Badge Component
function GreyInfotechBadge() {
  return (
    <a
      href="https://greyinfotech.com.ng"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 px-3 py-2 bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white text-xs font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00d9ff]/50 transition-all duration-300 hover:scale-110"
      title="Made by Grey Infotech"
    >
      Made by <span className="font-black">Grey</span>
    </a>
  );
}

function App() {
  return (
    <Provider>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/plants" component={Plants} />
          <Route path="/tips" component={Tips} />
          <Route path="/resources" component={Resources} />
          <Route path="/community" component={Community} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* Grey Infotech Attribution */}
      {<GreyInfotechBadge />}
    </Provider>
  );
}

export default App;
