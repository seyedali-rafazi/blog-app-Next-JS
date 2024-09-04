"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "@/context/AuthContext";
import { SpinnerMini } from "@/ui/Spinner";
import Link from "next/link";

const schema = yup
  .object({
    name: yup.string().min(3).max(30).required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup
      .string()
      .min(3)
      .max(30)
      .required("نام و نام خانوادگی الزامی است"),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signup } = useAuth();
  const onSubmit = async (value) => {
    await signup(value);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          errors={errors}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          errors={errors}
        />
        <div>
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button
              type="submit"
              className="py-3 px-4 btn btn--primary rounded-xl w-full"
            >
              تایید
            </Button>
          )}
        </div>
      </form>
      <Link href="/signin" className="text-secondary-400 mt-6 text-center">
        ورود
      </Link>
    </div>
  );
}

export default Signup;
