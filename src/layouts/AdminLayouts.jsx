import { Outlet } from "react-router-dom";

//lo q ve el admin
export const AdminLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
