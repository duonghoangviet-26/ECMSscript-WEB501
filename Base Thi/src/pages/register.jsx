import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRigester = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Email không hợp lệ");
            return;
        }

        if (password.length < 6) {
            toast.error("Mật khẩu phải từ 6 ký tự trở lên");
            return;
        }

        try {
            const { data } = await axios.post(`http://localhost:3000/register`, {
                email,
                password,
            });
            toast.success("Đăng Ký thành công");
            navigate("/login");
        } catch (error) {
            toast.error("Lỗi");
        }

    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Đăng ký</h1>

            <form className="space-y-6" onSubmit={handleRigester}>

                {/* NAME */}
                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Password</label>
                    <input
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="text"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Đăng Ký
                </button>

            </form>
        </div>
    );
}

export default RegisterPage;