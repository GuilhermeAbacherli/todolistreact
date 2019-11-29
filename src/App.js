import React from 'react';
import "./styles/global";
import Routes from "./routes";
import GlobalStyle from './styles/global';

const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <Routes />
    </React.Fragment>
);

export default App;
