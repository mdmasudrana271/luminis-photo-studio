import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvide";
import useTitle from "../../hooks/useTitle";

const Login = () => {

  useTitle('Login')

  const {
    signInWithEmailPassword,
    githubLogin,
    googleLogin,
    resetPassword,
    error,
    setError,
  } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  const handlePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    } else {
      setPasswordType("password");
    }
  };

  // providers

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // use location to redirect

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // collect data from form

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // login with email and password

    signInWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        fetch("https://travel-photographer-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("photography", data.token);
            form.reset();
            navigate(from, { replace: true });
            setError("");
          });
          toast.success('Login successfull')
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // signin with github provider

  const signInWithGithub = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(user);
        fetch("https://travel-photographer-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("photography", data.token);
            navigate(from, { replace: true });
            setError("");
          });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // signin with google provider

  const signInWithGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(user);
        fetch("https://travel-photographer-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("photography", data.token);
            navigate(from, { replace: true });
            setError("");
          });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // password reset using email

  const handleResetPassword = (email) => {
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email was send please check your email");
        console.log("passowrd reset email was send ");
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className=" my-10 ">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 md:w-4/12 mx-auto">
        <form onSubmit={handleLogIn} className="card-body">
          <h2 className="text-3xl text-center font-bold">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              placeholder="password"
              type={passwordType}
              name="password"
              className="input input-bordered"
            />
            {passwordType === "password" ? (
              <FaEye
                onClick={handlePasswordType}
                className="relative bottom-7 left-72 cursor-pointer"
              ></FaEye>
            ) : (
              <FaEyeSlash
                onClick={handlePasswordType}
                className="relative bottom-7 left-72 cursor-pointer"
              ></FaEyeSlash>
            )}
            <>
              <p className="text-error">{error}</p>
            </>
            <label className="label">
              <Link
              onClick={()=>handleResetPassword(email)}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-xl">
            <small>Dont't have an account ?</small>
            <Link
              to="/register"
              className="label-text-alt link link-hover text-sm"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
      <div className="divider w-2/12 mx-auto">OR</div>
      <div className="w-4/12 mx-auto">
        <div
          onClick={signInWithGithub}
          className="flex justify-evenly sm:w-full items-center border py-2 mb-3 rounded-full hover:cursor-pointer"
        >
          <FaGithub className="text-xl text-black"></FaGithub>
          <p className="hidden md:block">Continue with Github</p>
        </div>
        <div
          onClick={signInWithGoogle}
          className="flex justify-evenly w-full items-center border py-2 rounded-full hover:cursor-pointer"
        >
          <FaGoogle className="text-xl text-red-400"></FaGoogle>
          <p className="hidden md:block">Continue with Google</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
