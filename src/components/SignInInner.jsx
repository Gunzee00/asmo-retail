"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService"; // pastikan path sesuai struktur kamu

const SignInInner = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.login(email, password);
      navigate("/"); // redirect ke dashboard
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-100 h-100 position-fixed top-0 start-0 overflow-hidden d-flex">
      {/* LEFT SIDE (2/3) */}
      <div
        className="d-none d-md-block w-100"
        style={{ flex: "2", position: "relative" }}
      >
        <img
          src="/assets/images/thumbs/sign-in.png"
          alt="bg"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25 d-flex align-items-center justify-content-center">
          <div className="text-center text-white px-4"></div>
        </div>
      </div>

      {/* RIGHT SIDE (1/3) */}
      <div
        className="w-100 d-flex align-items-center justify-content-center"
        style={{ flex: "1" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {/* Logo */}
          <div className="text-center mb-32">
            <img
              src="./assets/images/logo/nav-logo.png"
              alt="Logo"
              className="mb-20 mx-auto d-block"
              style={{ maxWidth: "150px" }}
            />
          </div>

          {/* FORM BOX */}
          <div className="bg-main-25 border border-neutral-30 rounded-8 p-24">
            <form onSubmit={handleLogin}>
              {/* EMAIL */}
              <div className="mb-20">
                <label
                  htmlFor="email"
                  className="fw-medium text-neutral-500 mb-8 d-block"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukkan email.."
                  className="form-control w-100 py-9 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-16">
                <label
                  htmlFor="password"
                  className="fw-medium text-neutral-500 mb-8 d-block"
                >
                  Kata sandi
                </label>
                <div className="position-relative">
                  <input
                    placeholder="Masukkan kata sandi.."
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    className="form-control w-100 py-9 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className={`toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph-bold ${
                      passwordVisible ? "ph-eye" : "ph-eye-closed"
                    }`}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-danger text-center mb-12">{error}</p>
              )}

              {/* LUPA PASSWORD */}
              <div className="mt-8 mb-16 text-end">
                <a
                  href="#"
                  className="text-warning-600 hover-text-decoration-underline"
                >
                  Lupa Password
                </a>
              </div>

              {/* SIGN UP LINK */}
              <div className="mb-24">
                <p className="text-neutral-500">
                  Tidak punya akun?
                  <a
                    href="/sign-up"
                    className="fw-semibold text-main-600 hover-text-decoration-underline ms-1"
                  >
                    Daftar
                  </a>
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-main rounded-pill w-100 d-flex justify-content-center gap-8 mt-24"
                disabled={loading}
              >
                {loading ? "Memproses..." : "Masuk"}
                <i className="ph-bold d-flex text-lg" />
              </button>
            </form>
          </div>

          {/* FOOTER */}
          <div className="text-center mt-16">
            <p className="text-neutral-500 text-sm">Powered by</p>
            <div className="d-flex justify-content-center align-items-center gap-4 mt-2">
              <img
                src="/assets/images/logo/anagata.png"
                className="img-fluid"
                style={{ maxWidth: "120px", objectFit: "contain" }}
                alt="Anagata"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInInner;
