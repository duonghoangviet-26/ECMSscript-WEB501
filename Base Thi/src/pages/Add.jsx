import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPage() {

  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState("");

  // chuyển hướng giữa các trang 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTour = {
      name,
      destination,
      duration,
      price: Number(price),
      image,
      description,
      available: Number(available)
    };
    try {
      axios.post(`http://localhost:3000/tours`, newTour);
      alert("Thêm mới thành công");
      navigate("/list");
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới Tour</h1>

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
  );
}

export default AddPage;
