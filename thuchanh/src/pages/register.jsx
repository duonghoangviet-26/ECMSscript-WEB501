import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const hanhleSubmit = () => {
        try {
            const { data } = axios.post(`http://localhost:3000/register`, {
                email, password
            });
            toast.success("Đăng kí thành công");
            navigate("/login");
        } catch (error) {
            toast.error('Lỗi');
        }
    }


    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Đăng kí</h1>

            <form className="space-y-6" onSubmit={hanhleSubmit}>

                <div>
                    <label htmlFor="text" className="block font-medium mb-1">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="text"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="text" className="block font-medium mb-1">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                        type="text"
                        id="text"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Register;
