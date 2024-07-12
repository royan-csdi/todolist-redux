import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const passwordSchema = yup.object({
  password: yup.string().required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <section className="mb-10">
      <p>Password</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div>
          <input
            {...register("password")}
            type="password"
            className="rounded py-1 px-4  dark:bg-slate-600  border border-black w-full"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <div>
          <input
            {...register("passwordConfirm")}
            type="password"
            className="rounded py-1 px-4  dark:bg-slate-600  border border-black w-full"
          />
          <p className="text-red-500 text-sm">
            {errors.passwordConfirm?.message}
          </p>
        </div>
        <button type="submit" className="rounded py-2 px-5 bg-slate-900">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PasswordForm;
