import React, { Component } from "react";
import "./App.scss";

import Cactus from "./Cactus";
import Pot from "./Pot";

const App = () => {
    return (
        <div className="watcher">
            <Cactus />
            <Pot />
            <h1 className="watcher__title">Comming Soon</h1>
            <small className="watcher__subtitle">#deBakatas</small>
        </div>
    );
};

export default App;
