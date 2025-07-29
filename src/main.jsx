import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
//import { StoreProvider } from './hooks/useGlobalReducer';  // Import the StoreProvider for global state management
import { ContactsProvider } from "./Context/ContactContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactsProvider>
      <RouterProvider router={router}/>
    </ContactsProvider>
  </React.StrictMode>
);