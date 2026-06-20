import { Route, Switch } from "wouter";
import Home from "./pages/home";
import Plants from "./pages/plants";
import Tips from "./pages/tips";
import Resources from "./pages/resources";
import Community from "./pages/community";
import Contact from "./pages/contact";
import { Layout } from "./layout";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

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
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
