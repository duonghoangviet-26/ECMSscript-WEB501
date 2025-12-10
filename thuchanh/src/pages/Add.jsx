
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const [major, setMajor] = useState("");
  const navigate = useNavigate();


  const hanhleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !age || !subject || !major) {
      toast.error('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if (Number(age) <= 0) {
      toast.error('Tuổi phải lớn hơn 0');
      return;
    }

    try {
      await axios.post(`http://localhost:3000/students`, {
        name, age, subject, major
      })
      toast.success("Thêm thành công");
      navigate("/list");
    } catch (error) {
      toast.error("Thêm thất bại");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>
      <form className="space-y-6" onSubmit={hanhleSubmit}>

        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Tên
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Tuổi
          </label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="text" className="block font-medium mb-1">
            Môn Học
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            id="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <label htmlFor="selectOption" className="block font-medium mb-1">
            Ngành Học
          </label>
          <select
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Chọn</option>
            <option value="BE">BE</option>
            <option value="FE">FE</option>
            <option value="Mobie">Mobie</option>
          </select>
        </div>

        {/* Submit button */}
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

export default Add;
