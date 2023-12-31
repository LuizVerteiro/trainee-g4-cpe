import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Home_logada from "./Pages/Home_logada/Home_logada";
import Login from "./Pages/Login/Login";
import AppLayout from "./AppLayout/AppLayout";
import Editar_perfil from "./Pages/Editar_perfil/Editar_perfil";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token);
  if (token) return <Outlet />;
  return <Navigate to="/login" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<RotasPrivadas />}>
          <Route path="logada" element={<Home_logada />} />
          <Route path="editar" element={<Editar_perfil />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="logada" element={<Home_logada />} />
        <Route path="login" element={<Login />} />
        <Route path="editar" element={<Editar_perfil />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
