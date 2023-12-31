import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Root from "./routes/root";
import Settings from "./routes/settings";
import Header from "./components/Header";
import Workspace from "./routes/workspace";
import Edit from "./routes/edit";
import Workspace2 from "./routes/workspace";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>
            },
            {
                path: "workspace",
                element: <Workspace/>
            },
            {
                path: "settings",
                element: <Settings/>
            },
            {
                path: "/workspace/edit",
                element: <Edit />
            }
        ]
    },

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <main>
        <RouterProvider router={router}/>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
