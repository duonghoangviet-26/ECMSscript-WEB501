import React, { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const getTour = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/tours');
        setTours(data);
      } catch (error) {
        console.log(error);
      }
    }
    getTour();
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

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
            </tr>
          </thead>


          <tbody>
            {tours.map((tour, index) => (
              <tr key={tour.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.name}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.destination}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.duration}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.price}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <img src={tour.image} alt={tour.name} width='100px' />
                </td>
                <td className="px-4 py-2 border border-gray-300">{tour.destination}</td>
                <td className="px-4 py-2 border border-gray-300">{tour.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
