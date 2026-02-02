import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Props = {
  isRegister?: boolean;
};

type FormValues = {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

function AuthPage({ isRegister = false }: Props) {
  const nav = useNavigate();
  const isLogin = !isRegister;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const passwordValue = watch("password");

  const onSubmit = async (values: FormValues) => {
    try {
      if (isLogin) {
        const { data } = await axios.post(
          "http://localhost:3000/login",
          {
            email: values.email,
            password: values.password,
          }
        );

        localStorage.setItem("accessToken", data.accessToken);
localStorage.setItem("user", JSON.stringify(data.user));
console.log("LOGIN RESPONSE:", data);

        toast.success("Đăng nhập thành công");
        nav("/");
      } else {
        await axios.post("http://localhost:3000/register", {
          username: values.username,
          email: values.email,
          password: values.password,
        });

        toast.success("Đăng ký thành công");
        nav("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl mb-4">
        {isLogin ? "Login" : "Register"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {isRegister && (
          <div>
            <label className="block font-medium mb-1">Username</label>
            <input
              {...register("username", {
                required: "Username là bắt buộc",
                minLength: {
                  value: 5,
                  message: "Username phải trên 4 ký tự",
                },
              })}
              className="w-full border rounded-lg px-3 py-2"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">
                {errors.username.message}
              </p>
            )}
          </div>
        )}

       
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            {...register("email", {
              required: "Email là bắt buộc",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Email không đúng định dạng",
              },
            })}
            type="email"
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

     
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            {...register("password", {
              required: "Password là bắt buộc",
              minLength: {
                value: 7,
                message: "Password phải trên 6 ký tự",
              },
            })}
            type="password"
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

     
        {isRegister && (
          <div>
            <label className="block font-medium mb-1">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Vui lòng nhập lại mật khẩu",
                validate: (value) =>
                  value === passwordValue ||
                  "Mật khẩu không khớp",
              })}
              type="password"
              className="w-full border rounded-lg px-3 py-2"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg w-full"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default AuthPage;
