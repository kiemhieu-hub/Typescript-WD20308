import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      {/* TOPBAR */}
      <header className="bg-blue-600 text-white px-6 py-4 flex gap-6">
        <h1 className="font-bold text-xl">Admin</h1>
        <Link to="/" className="hover:underline">
          List
        </Link>
        <Link to="/add" className="hover:underline">
          Add
        </Link>
      </header>

      {/* NỘI DUNG TRANG */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
