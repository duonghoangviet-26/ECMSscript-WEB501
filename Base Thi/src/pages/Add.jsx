import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddPage() {

  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState("");
  const [active, setActive] = useState("");


  const HandleValidate = () => {
    let message = '';
    if (!name || !description || !price || !image || !destination || !duration || available === "" || active === "") {
      message = "Bạn cần nhập đầy đủ thông tin";
      return message;
    }

    if (name.length < 5 || name.length > 100) {
      message = "Name phải từ 5 đến 100 ký tự";
      return message;
    }

    const urlRegex = /^(https?:\/\/.+)/;
    if (!urlRegex.test(image)) {
      message = "URL ảnh không hợp lệ";
      return message;
    }

    if (Number(price) <= 0) {
      message = "Giá phải lớn hơn 0";
      return message;
    }

    if (Number(available) < 0) {
      message = "Available Không được bé hơn 0 ";
      return message;
    }

    return message;
  };


  // chuyển hướng giữa các trang 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = HandleValidate();
    if (message) {
      toast.error(message);
      return;
    }

    try {
      await axios.post(`http://localhost:3000/tours`, {
        name,
        destination,
        duration,
        price: Number(price),
        image,
        description,
        available: Number(available),
        active: active === "true",
      });
      toast.success('Thêm thành công');
      navigate("/list");
    } catch (error) {
      toast.error(error.message);
      console.log(error);

    }
  }


  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới Tour</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Điểm đến</label>
          <input
            name="destination"
            value={destination}
            onChange={e => setDestination(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Thời gian</label>
          <input
            name="duration"
            value={duration}
            onChange={e => setDuration(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Giá</label>
          <input
            name="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Ảnh (URL)</label>
          <input
            name="image"
            value={image}
            onChange={e => setImage(e.target.value)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Ghi chú</label>
          <textarea
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Available</label>
          <input
            name="available"
            value={available}
            onChange={e => setAvailable(e.target.value)}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Trạng thái</label>
          <select name="active"
            value={active}
            onChange={e => setActive(e.target.value)}
            className="w-full border rounded-lg px-3 py-2">
            <option value="">-Chọn</option>
            <option value="true">True</option>
            <option value="false">False</option>

          </select>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Thêm mới
        </button>

      </form >
    </div >
  );
}

export default AddPage;
