import React from "react";
import { useForm } from "react-hook-form";
import Field from "../common/Field";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterFrom = () => {
    const Navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitFrom = async (fromData) => {
    console.log(fromData);
    
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        fromData
      );      
      if(response.status === 201){
        Navigate('/login')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="border-b border-[#3F3F3F] "
        onSubmit={handleSubmit(submitFrom)}
      >
        <Field label="First Name" error={errors.firstName}>
          <input
            {...register("firstName", { required: "firstname Id is Required" })}
            type="firstName"
            name="firstName"
            id="firstName"
            className={`auth-input ${
              errors.firstName ? "border-red-500" : "border-gray-200"
            }`}
          />
        </Field>
        <Field label="Last Name" error={errors.lastName}>
          <input
            {...register("lastName", { required: "lastName Id is Required" })}
            type="lastName"
            name="lastName"
            id="lastName"
            className={`auth-input ${
              errors.lastName ? "border-red-500" : "border-gray-200"
            }`}
          />
        </Field>

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
          <button type="submit" className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegisterFrom;
