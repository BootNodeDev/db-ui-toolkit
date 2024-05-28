import React from 'react';
import { createRoot } from 'react-dom/client';
import { Wrapper, InnerContainer } from './index';
const App = () => (React.createElement(Wrapper, null,
    React.createElement(InnerContainer, { style: { border: '2px solid red' }, className: "custom-inner" },
        React.createElement("p", null, "Hola mundo"))));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App, null));
