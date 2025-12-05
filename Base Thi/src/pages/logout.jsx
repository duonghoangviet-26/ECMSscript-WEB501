import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token");
        toast.success("Đăng xuất thành công");

        navigate("/login");
    }, []);

    return null;
}

export default Logout;
