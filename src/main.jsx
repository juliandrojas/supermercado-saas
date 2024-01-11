import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Index from "./pages/Index";
import { supabase } from "./supabase/supabase";
const navigate = useNavigate();
React.useEffect(() => {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
  })
}, []);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/login",
    element: <Login />
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
