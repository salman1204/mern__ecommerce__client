import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config)
    .then(() => {
      toast.success(
        `Email is sent to ${email}. Click the link to complete your registration`
      );
      window.localStorage.setItem("emailForRegistration", email);
      setEmail("");
    });
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Valid Email Address"
        autoFocus
      />
      <button className="btn btn-raised mt-2">Register</button>
    </form>
  );

  return (
    <div className="container pt-5 mx-auto">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="w-50">
            <h4>Register</h4>
            {registerForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
