import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { amplifyConfig } from "./config/amplify";

// Configure Amplify
Amplify.configure(amplifyConfig);

createRoot(document.getElementById("root")!).render(
  <Authenticator.Provider>
    <App />
  </Authenticator.Provider>
);
