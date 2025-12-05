import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ListPage() {
  const [tours, setTours] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [fullTour, setFullTour] = useState([]);


  useEffect(() => {
    const getTour = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/tours`);
        setTours(data);
        setFullTour(data);
      } catch (error) {
        toast.error(error);
      }
    }
    getTour();
  }, [])

  const handleDelete = async (id) => {
    if (!confirm("Bạn có muốn xóa không?")) return;
    try {
      await axios.delete(`http://localhost:3000/tours/${id}`);
      setTours(tours.filter((t) => t.id !== id));
      toast.success('Xóa thành công');
    } catch (error) {
      toast.error('Xóa thất bại');
    }
  }

  const handleActive = async (id, active) => {
    const newActive = !active;

    try {
      await axios.put(`http://localhost:3000/tours/${id}`, { active: newActive });
      setTours(tours.map(t => t.id === id ? { ...t, active: newActive } : t));
      if (newActive) {
        toast.success("Đã bật");
      } else {
        toast.success("Đã Tắt");
      }
    } catch (error) {
      toast.error(error);
    }
  }


  //  Tìm kiếm 
  const handlSearch = () => {
    if (keyWord.trim() === "") {
      setTours(fullTour);
      return;
    }

    const data = tours.filter((tour) => {
      return tour.name.toLowerCase().includes(keyWord.toLocaleLowerCase());
    })
    setTours(data);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách Tour</h1>
      <div className="flex items-center gap-3 mb-4">
        <input
          value={keyWord}
          onChange={e => setKeyWord(e.target.value)}
          type="text"
          placeholder="Nhập từ khóa..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handlSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Tìm kiếm
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Điểm đến</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Thời gian</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Giá</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Ảnh</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Ghi Chú</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Available</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Trạng thái</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Hành Động</th>
            </tr>
          </thead>


          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{tour.id}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.name}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.destination}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.duration}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.price}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <img src={tour.image} alt={tour.name} width='100px' />
                </td>
                <td className="px-4 py-2 border border-gray-300">{tour.destination}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.available}</td>
                <td>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={tour.active}
                      onChange={() => handleActive(tour.id, tour.active)}
                    />

                    <div
                      className="w-11 h-6 bg-red-600 rounded-full
                                    peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400
                                    dark:bg-gray-700
                                    after:content-[''] after:absolute after:top-0.5 after:left-0.5
                                    after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all
                                    peer-checked:bg-blue-600
                                    peer-checked:after:translate-x-full
                                    peer-checked:after:border-white"
                    ></div>
                  </label>
                </td>

                <td className="px-4 py-2 border border-gray-300">
                  <button className="text-red-500 cursor-pointer" onClick={() => handleDelete(tour.id)} >Xóa</button>

                  <button className="text-blue-600 cursor-pointer pl-2" ><a href={`/edit/${tour.id}`}>Sửa</a></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
