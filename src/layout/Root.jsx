import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";

export const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="max-w-7xl mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};
