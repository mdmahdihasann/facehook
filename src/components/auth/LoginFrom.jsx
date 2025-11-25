import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { useAuth } from "../../hooks/useAuth";

const LoginFrom = () => {
  const {setAuth} = useAuth();
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFrom = (fromData) => {
    const user = {...fromData}
    setAuth({user});
    Navigate("/");
  };

  return (
    <div>
      <form
        className="border-b border-[#3F3F3F] "
        onSubmit={handleSubmit(submitFrom)}
      >
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email Id is Required" })}
            type="email"
            name="email"
            id="email"
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
          />
        </Field>
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            type="password"
            name="password"
            id="password"
            className={`auth-input ${
              errors.password ? "border-red-500" : "border-gray-200"
            }`}
          />
        </Field>

        <Field>
          <button className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginFrom;
