"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const API_URL = "http://localhost:3000/api/login";
    try {
      const response = await axios.post(API_URL, {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        router.push("/videoList");
      }
    } catch (error) {
      setError("Credenciais inválidas.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
