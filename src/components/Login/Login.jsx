import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", pass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.pass);
      alert("Login exitoso");
      navigate("/admin", { replace: true }); //elimina pagina del historial para q no quede nada guardado y evita poder "volver"
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Iniciar sesión</h2>
      <div className="">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="">
        <label>Password</label>
        <input
          type="password"
          name="pass"
          placeholder="password"
          value={formData.pass}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
