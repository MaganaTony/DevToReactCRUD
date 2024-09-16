import clsx from "clsx";
import { useForm } from "react-hook-form";
import { loginUser } from "@/utils/api"; // we can replace ../ with @/
import { useState } from "react";
import { useRouter } from "next/router"; //Using router instead of useNavigate
import { toast } from "sonner";
import socialNetworks from "@/collections/socialNetworks.json";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookSquare, FaGithub } from "react-icons/fa";
import LoginButton from "@/components/LoginButtin";


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const socialIcons = {
    FaApple: FaApple,
    FaFacebookSquare: FaFacebookSquare,
    FaGithub: FaGithub,
    FcGoogle: FcGoogle,
    FaXTwitter: FaXTwitter,
  }


  const router = useRouter(); //declaring router
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      const token = await loginUser(data.username, data.password);

      if (token) {
        localStorage.setItem("token", token);
        router.push("/"); //pushing the route to router to redirect to home page
        setIsSubmitting(false);
        return;
      }
      toast.error("Invalid credentials");
      setError("root.data", { type: "manual", message: "Invalid credentials" });
      setIsSubmitting(false);
    } catch (error) {
      toast.error("Login error");
      console.error("Login error:", error);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="p-4 flex flex-col gap-5">
      <a href="../index.html">
        <img
          class="w-16 mx-auto"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt="DEV Community"
        />
      </a>
      <h1 className="text-3xl w-full font-bold text-center">
        Join the DEV Community
      </h1>

      <p className="text-center text-lg text-grey/90">DEV Community is a community of 2,059,092 amazing developers</p>
      <section className="gap-2 flex flex-col items-center">
        {socialNetworks.map((socialNetwork) => {
          const Icon = socialIcons[socialNetwork.icon];
          return (
            <LoginButton
              socialNetwork={socialNetwork.name}
              Icon={Icon}
              key={socialNetwork.name}
            />
          );
        })}
      </section>
      <div className="flex items-center justify-center my-4">
        <hr className="w-1/4 border-t border-gray-600/30" />
        <span className="mx-2  text-sm">OR</span>
        <hr className="w-1/4 border-t border-gray-600/30" />
      </div>
      <section className="gap-2 flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-w-md w-full"
        >
          <div className="flex flex-col w-full gap-3">
            <span className="font-semibold text-sm">Email</span>
            <input
              type="text"
              className={clsx(
                "border border-gray-300 p-2 rounded-md",
                { "bg-red-500/10 border-red-500": errors.username }
              )}
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            {errors.username && (
              <span className="text-xs text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-3">
            <span className="font-semibold text-sm">Password</span>
            <input
              type="password"
              className={clsx(
                "border border-gray-300 p-2 rounded-md",
                { "bg-red-500/10 border-red-500": errors.username }
              )}
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            className="rounded-md bg-blue-700 text-white font-bold p-2 disabled:bg-neutral-600 disabled:cursor-progress"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Log in"}
          </button>
          {errors.root?.data && (
            <span className="text-xs text-red-500 w-full text-center uppercase">
              {errors.root.data.message}
            </span>
          )}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              By signing in, you are agreeing to our{' '}
              <a href="#" className="text-blue-600 hover:underline">
                privacy policy
              </a>
              ,{' '}
              <a href="#" className="text-blue-600 hover:underline">
                terms of use
              </a>
              , and{' '}
              <a href="#" className="text-blue-600 hover:underline">
                code of conduct
              </a>
              .
            </p>

            <hr className="my-6 border-gray-300" />

            <p className="text-sm text-gray-500">
              New to DEV Community?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Create account
              </a>
              .
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
