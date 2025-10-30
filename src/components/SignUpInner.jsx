import { useState } from "react";

const SignUpInner = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  return (
    <div className="w-100 d-flex flex-column align-items-center" style={{ maxWidth: "400px", margin: "0 auto" }}>
      
      {/* LOGO */}
      <div className="text-center mb-32">
        <img
          src="/assets/images/logo/nav-logo.png"
          alt="Logo"
          className="mb-20 mx-auto d-block"
          style={{ maxWidth: "150px", objectFit: "contain" }}
        />
      </div>

      {/* FORM CARD */}
      <div className="bg-main-25 border border-neutral-30 rounded-8 p-24 w-100">
        <form>
          {/* FIRST NAME */}
          <div className="mb-20">
            <label htmlFor="fname" className="fw-medium text-neutral-500 mb-8 d-block">
              Nama Lengkap

            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Jhon Doe.."
              className="form-control w-100 py-9 rounded"
            />
          </div>

          {/* LAST NAME */}
          <div className="mb-20">
            <label htmlFor="lname" className="fw-medium text-neutral-500 mb-8 d-block">
              Email
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="nama@email"
              className="form-control w-100 py-9 rounded"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-20">
            <label htmlFor="email" className="fw-medium text-neutral-500 mb-8 d-block">
              Kata sandi

            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan Kata Sandi..."
              className="form-control w-100 py-9 rounded"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-16">
            <label htmlFor="password" className="fw-medium text-neutral-500 mb-8 d-block">
              Konfirmasi Kata sandi

            </label>
            <div className="position-relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Konfirmasi Kata Sandi..."
                className="form-control w-100 py-9 rounded"
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

          {/* SUDAH PUNYA AKUN */}
          <div className="mb-24">
            <p className="text-neutral-500">
              Sudah punya akun?
              <a href="/sign-in" className="fw-semibold text-main-600 hover-text-decoration-underline ms-1">
                Masuk
              </a>
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="btn btn-main rounded-pill w-100 d-flex justify-content-center gap-8 mt-24"
          >
            Daftar
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
  );
};

export default SignUpInner;
