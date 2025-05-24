import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./styles/main.css";
import Menu from "./components/Menu/Menu";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Suspense>
            {props.children}
          </Suspense>
	  <Title>EcoTote | App</Title>
          <Menu />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
