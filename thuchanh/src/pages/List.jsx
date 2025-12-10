import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function List() {
  const [studentes, setStudentes] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/students`);
        setStudentes(data);
      } catch (error) {
        toast.error(error);
      }
    }
    getStudent();
  }, [])


  const hanhleDelete = async (id) => {
    if (!confirm("Bạn có chắc muốn xóa không")) return;
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      setStudentes(studentes.filter((t) => t.id !== id));
      toast.success('Xóa thành công');
    } catch (error) {
      toast.error("Lỗi không xóa được");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách quản lí Học Sinh</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Tuổi</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Ngành Học</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Môn học</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Hành động</th>
            </tr>
          </thead>

          <tbody>
            {
              studentes.map((studente) => (
                <tr key={studente.id}>
                  <td className="px-4 py-2 border border-gray-300 text-left">{studente.id}</td>
                  <td className="px-4 py-2 border border-gray-300 text-left">{studente.name}</td>
                  <td className="px-4 py-2 border border-gray-300 text-left">{studente.age}</td>
                  <td className="px-4 py-2 border border-gray-300 text-left">{studente.subject}</td>
                  <td className="px-4 py-2 border border-gray-300 text-left">{studente.major}</td>
                  <td className="px-4 py-2 border border-gray-300 text-left">
                    <button onClick={() => hanhleDelete(studente.id)}>Xóa</button>
                    <button><a href={`/edit/${studente.id}`}>Sửa</a></button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default List;
