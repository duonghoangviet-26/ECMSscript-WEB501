import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3000/login`, {
                email,
                password,
            });
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }
            toast.success("Đăng Nhập thành công");
            navigate("/list");
        } catch (error) {
            toast.error("Lỗi");
        }

    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Đăng Nhập</h1>

            <form className="space-y-6" onSubmit={handleLogin}>

                {/* NAME */}
                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="text"
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
                    Đăng Nhập
                </button>

            </form>
        </div>
    );

}

export default LoginPage;