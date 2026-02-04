import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import ListPage from "./pages/List";
import AddPage from "./pages/Add";
import AuthPage from "./pages/AuthPage";
import ProtectRoute from "./components/ProtectRoute";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function App() {
  const navigate = useNavigate();

  const isLoggedIn = Boolean(localStorage.getItem("accessToken"));
  const user = JSON.parse(localStorage.getItem("user") || "null");
  console.log("USER:", user);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    toast.success("Đăng xuất thành công 👋");
    navigate("/login");
  };
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB502 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="hover:text-gray-200">
                  Đăng nhập
                </Link>
                <Link to="/register" className="hover:text-gray-200">
                  Đăng ký
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm">👋 {user?.email}</span>
                <button
                  onClick={logout}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  Đăng xuất
                </button>
              </>
            )}
          </div>



        </div>
      </nav>


      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB502</h1>
        <Routes>
          <Route
            path="/"
            element={<h2 className="text-2xl">Trang chủ nè 👋</h2>}
          />

          <Route path="/list" element={<ListPage />} />

          <Route element={<ProtectRoute></ProtectRoute>}>
            <Route path="/add" element={<AddPage />} />
            <Route path="/edit/:id" element={<AddPage />} />
          </Route>

          <Route path="/register" element={<AuthPage isRegister />}></Route>
          <Route path="/login" element={<AuthPage />}></Route>
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;