import React from "react";
import { userRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const routes = userRoutes(false);
    return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
