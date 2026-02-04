import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type FormValues = {
  name: string;
  credit: number;
  category: string;
  teacher: string;
};

function AddPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // có id => edit

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  
  useEffect(() => {
    if (!id) return;

    const getDetail = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/courses/${id}`
        );
        reset(data); // đổ dữ liệu vào form
      } catch (error) {
        console.log(error);
      }
    };

    getDetail();
  }, [id, reset]);


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (id) {
        
        await axios.put(`http://localhost:3000/courses/${id}`, data);
        alert("Cập nhật thành công");
      } else {
        await axios.post("http://localhost:3000/courses", data);
        alert("Thêm khóa học thành công");
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Thao tác thất bại");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        {id ? "Cập nhật khóa học" : "Thêm khóa học"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl">
        <div>
          <label className="block font-medium mb-1">Tên khóa học</label>
          <input
            className="w-full border px-3 py-2 rounded"
            {...register("name", {
              required: "Tên khóa học không được để trống",
              minLength: { value: 3, message: "Tên > 3 ký tự" },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Số tín chỉ</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            {...register("credit", {
              required: "Credit không được để trống",
              min: { value: 1, message: "Credit >= 1" },
            })}
          />
          {errors.credit && (
            <p className="text-red-500 text-sm">
              {errors.credit.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Danh mục</label>
          <select
            className="w-full border px-3 py-2 rounded"
            {...register("category", { required: "Chọn danh mục" })}
          >
            <option value="">-- Chọn --</option>
            <option value="Chuyên ngành">Chuyên ngành</option>
            <option value="Cơ sở">Cơ sở</option>
            <option value="Đại cương">Đại cương</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Giảng viên</label>
          <input
            className="w-full border px-3 py-2 rounded"
            {...register("teacher", {
              required: "Tên giảng viên không được để trống",
              minLength: { value: 3, message: "Tên > 3 ký tự" },
            })}
          />
          {errors.teacher && (
            <p className="text-red-500 text-sm">
              {errors.teacher.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded"
        >
          {id ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
}

export default AddPage;