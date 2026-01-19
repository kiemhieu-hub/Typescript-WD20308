import { useEffect, useState } from "react";
import axios from "axios";

type Course = {
  id: number;
  name: string;
  credit: number;
  category: string;
  teacher: string;
};

const PAGE_SIZE = 3; // số item mỗi trang

function ListPage() {
  // state
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [teacherFilter, setTeacherFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // call api
  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/courses");
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);

  // lấy danh sách teacher (unique)
  const teachers = Array.from(
    new Set(courses.map((c) => c.teacher))
  );

  // filter + search
  const filteredCourses = courses.filter((course) => {
    const matchName = course.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchTeacher =
      teacherFilter === "" || course.teacher === teacherFilter;

    return matchName && matchTeacher;
  });

  // pagination
  const totalPages = Math.ceil(filteredCourses.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách khóa học</h1>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Tìm theo tên..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-3 py-2 rounded w-64"
        />

        <select
          value={teacherFilter}
          onChange={(e) => {
            setTeacherFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-3 py-2 rounded"
        >
          <option value="">-- Tất cả giảng viên --</option>
          {teachers.map((teacher) => (
            <option key={teacher} value={teacher}>
              {teacher}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Teacher</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{course.id}</td>
                <td className="px-4 py-2 border">{course.name}</td>
                <td className="px-4 py-2 border">{course.teacher}</td>
                <td className="px-4 py-2 border">
                  Edit | Delete
                </td>
              </tr>
            ))}

            {paginatedCourses.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListPage;
