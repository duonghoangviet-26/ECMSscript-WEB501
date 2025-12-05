import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ListPage from "./pages/List";
import AddPage from "./pages/Add";
import LayoutPage from "./pages/Layout";
import EditPage from "./pages/Edit";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import AdminLayout from "./layout/AdminLayout";
import Logout from "./pages/logout";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </a>


          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          {/* Right menu desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="login" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="register" className="hover:text-gray-200">
              Đăng ký
            </Link>
            <Link to="logout" className="hover:text-gray-200">
              Đăng xuất
            </Link>
          </div>
        </div>

      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        {/* <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB501</h1>
        <p className="text-lg text-gray-600">Ứng dụng quản lý dữ liệu</p> */}

        <Routes>
          <Route element={<AdminLayout />} >
            <Route path="/list" element={<ListPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
          </Route>

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </div >
      <Toaster />
    </>
  );
}

export default App;
