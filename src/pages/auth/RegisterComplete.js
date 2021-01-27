import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({history}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
      setEmail(window.localStorage.getItem('emailForRegistration'))
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        toast.error("Email and Password is Required");
        return;
    }

    if (password.length < 6) {
        toast.error("Password must contain atleast 6 caracters");
        return;
    }


    try {
        const result = await auth.signInWithEmailLink(email, window.location.href)
       

        if(result.user.emailVerified){
            // remove user email from local storage
            window.localStorage.removeItem('emailForRegistration');

            // get user id token
            let user = auth.currentUser;
            await user.updatePassword(password);
            const idTokenResult = await user.getIdTokenResult();

            history.push('/')
        }
    }
 
    catch (error){
        toast.error(error.message)
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled
      />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        placeholder="Enter your Password"
      />
      <button className="btn btn-raised mt-2">Complete Registration </button>
    </form>
  );

  return (
    <div className="container pt-5 mx-auto">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="w-50">
            <h4>Complete Registration</h4>
            {completeRegistrationForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
