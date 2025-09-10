import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'flowbite';
import { router } from "./routes/Routes";
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right"
      reverseOrder={false}></Toaster>
  </React.StrictMode>
);