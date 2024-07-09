import { useState } from "react";
import React from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Config/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        name: name,
        email: email,
        uid: users.user.uid,
        role: "user",
      };

      const docref = collection(db, "users");
      await addDoc(docref, user);
    } catch (error) {
      console.error(error);
    }

    setName("");
    setEmail("");
    setPassword("");

    navigate("/Login");
  };

  return (
    <div className="container-form">
      <div className="Login-account">
        <p className="para">Already have an account?</p>
        <Link className="link" to="/Login">
          {" "}
          Login here{" "}
        </Link>
      </div>

      <form className="form" onSubmit={HandleSubmit}>
        <input
          label="Name"
          type="name"
          placeholder="Entre your FullName"
          className="inputs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          <button className="btn"> Sign Up</button>
        </div>
      </form>
    </div>
  );
}
