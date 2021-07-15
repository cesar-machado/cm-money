import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";

import App from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("http://localhost/3000/api/transactions", () => {
      return [
        {
          id: 1,
          title: "transactions 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
