import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.init";

const LogIn = () => {
  const { logInUser, googleLogInUSer, twitterLogInUser } =
    useContext(UserContext);
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        sendEmailVerification(auth.currentUser).then((result) => {
          console.log("cheak your email", result);

          if (result.emailVerified) {
            return alert("not verifield");
          }
        });

        console.log(result);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    googleLogInUSer();
    navigate("/");
  };
  const handletwitter = () => {
    twitterLogInUser();
    navigate("/");
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-16">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
            <a
              href="#"
              onClick={() => navigate("/signin")}
              className="label-text-alt link link-hover">
              are you new Create account?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <button
        onClick={handleGoogle}
        className="btn py-2 bg-warning text-black hover:text-white">
        Google
      </button>
      <button
        onClick={handletwitter}
        className="btn py-2 bg-warning text-black hover:text-white">
        X
      </button>
    </div>
  );
};

export default LogIn;
