import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

const dynamicSchema = yup.object({
  data: yup
    .array()
    .of(
      yup.object().shape({
        text: yup.string().required(),
      })
    )
    .min(1),
});

const DynamicForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(dynamicSchema),
    defaultValues: {
      data: [{ text: "" }],
    },
  });

  const { fields, append } = useFieldArray({ control, name: "data" });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <section className="mb-10">
      <div className="space-y-3">
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              type="text"
              {...register(`data.${index}.text`)}
              className="rounded py-2 px-5 bg-slate-900 mt-3"
            />
          </div>
        ))}
      </div>
      {/* <p>Password</p> */}
      {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3"> */}
      {/* <div>
          <input
            {...register("password")}
            type="password"
            className="rounded py-1 px-4  dark:bg-slate-600  border border-black w-full"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div> */}
      {/* <div>
          <input
            {...register("passwordConfirm")}
            type="password"
            className="rounded py-1 px-4  dark:bg-slate-600  border border-black w-full"
          />
          <p className="text-red-500 text-sm">
            {errors.passwordConfirm?.message}
          </p>
        </div> */}
      <div className="flex gap-3">
        <button
          type="button"
          className="rounded py-2 px-5 bg-slate-900 mt-3"
          onClick={() => append({ text: "" })}
        >
          Tambah
        </button>
        <button
          type="submit"
          className="rounded py-2 px-5 bg-slate-900 mt-3"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
      {/* </form> */}
    </section>
  );
};

export default DynamicForm;
