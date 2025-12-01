import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { supabase } from "./supabase.js";

import {useNavigate} from "react-router-dom";
export default function LoginPage() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { data, error } =await supabase
      .from("reg")
      .select("*")
      .eq("email", formData.email)
      .eq("password", formData.password)
      
      if (error) {
        console.error("Supabase Login Error:", error);
        alert("Login failed! Please check your credentials.");
        return;
      }
      if (!data || data.length === 0) {
        alert(`No user found with the provided credentials.${data}`);
        return;
      } else {
       
        navigate("/home");
      }

    };

  return (
    <div style={styles.container}>
      <div className="reg-overlay"></div>
      <header className="reg-header">
        <Link to="/home" className="brand-link-inline">
          <h1 className="brand-name">Elite Nest</h1>
        </Link>
        <div className="reg-links">
          <Link to="/home" className="reg-link">Home</Link>
          <Link to="" className="reg-link">Contact</Link>
          <Link to="/about" className="reg-link">About Us</Link>
        </div>
      </header>
      <div style={styles.box}>
        <h2 style={styles.title}>Login</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>Login</button>
          <p style={styles.p}> If you don't have an account, please <Link to="/register" style={{ color: "#60a5fa" }}>register here</Link>.</p>
        </form>
      </div>
    </div>
  );
}

const styles = {
 container: {
   minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

    // keep the same background image (no change to image URL)
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    
  },
   brandLink: {
    position: "absolute",
    top: 20,
    left: 24,
    textDecoration: "none",
    zIndex: 3,
  },
  
  box: {
    width: "100%",
    maxWidth: "450px",
    background: "#4742428f",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(247, 240, 240, 0.97)",
    backdropFilter: "blur(4px)",
    zIndex: 2,
  
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#dee6ddff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
 p:{
    color: "#fff",
  },
  button: {
    marginTop: "15px",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
