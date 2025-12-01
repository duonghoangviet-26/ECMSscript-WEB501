import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState("");

  useEffect(() => {
    const getTour = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/tours/${id}`);
        setName(data.name);
        setDestination(data.destination);
        setDuration(data.duration);
        setPrice(data.price);
        setImage(data.image);
        setDescription(data.description);
        setAvailable(data.available);
      } catch (error) {
        toast.error("Không tải được dữ liệu!");
        console.error(error);
      }
    };

    getTour();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/tours/${id}`, {
        name,
        destination,
        duration,
        price: Number(price),
        image,
        description,
        available: Number(available),
      });
      toast.success("Cập nhật thành công!");
      navigate("/list");
    } catch (error) {
      toast.error("Lỗi khi cập nhật!");
    }
  };

  return (
    <div>
      <h1>Sửa Tour</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* NAME */}
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

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Thêm mới
        </button>

      </form>
    </div>
  )
}

export default EditPage;