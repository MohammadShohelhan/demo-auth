import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { createUserAcount } = useContext(UserContext);
  const navigate = useNavigate();
  const handleCreateAccoun = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    createUserAcount(email, password)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-16">
      <form onSubmit={handleCreateAccoun} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
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
              onClick={() => navigate("/login")}
              className="label-text-alt link link-hover">
              already have you account?
            </a>
          </label>

          {Error && <p className="text-red-500">{Error?.message}</p>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <button className="btn py-2 bg-warning text-black hover:text-white">
        Google
      </button>
    </div>
  );
};

export default SignIn;
