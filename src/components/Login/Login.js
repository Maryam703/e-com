import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../Config/FirebaseConfig";
import { collection, onSnapshot, where, query } from "firebase/firestore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const users = await signInWithEmailAndPassword(auth, email, password);
      try {
        const q = query(
          collection(db, "users"),
          where("uid", "==", users?.user?.uid)
        );

        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));

          if (user) {
            localStorage.setItem("user", JSON.stringify(user));

            setEmail("");
            setPassword("");

            if (user) {
              navigate("/");
            }
          } else {
            return "No User Data Found";
          }
        });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-form">
        <div className="Login-account">
          <p className="para">Don't have an account?</p>
          <Link className="link" to="/SignUp">
            {" "}
            SignUp here
          </Link>
        </div>

        <form className="form" onSubmit={HandleSubmit}>
          <input
            label="Email"
            type="email"
            placeholder="Entre your Email"
            className="inputs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            label="Password"
            type="password"
            placeholder="Entre your Password"
            className="inputs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-box">
            <button className="btn"> Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
