"use client";
import { useState } from "react";

const SignInInner = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <div className="w-100 h-100 position-fixed top-0 start-0 overflow-hidden d-flex">
      {/* LEFT SIDE (2/3) - Tidak berubah */}
      <div
        className="d-none d-md-block w-100"
        style={{ flex: "2", position: "relative" }}
      >
        <img
          src="/assets/images/thumbs/sign-in.png" // placeholder
          alt="bg"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25 d-flex align-items-center justify-content-center">
          <div className="text-center text-white px-4">
            {/* kosongkan dulu — nanti bisa isi quote/tagline dsini */}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (1/3) - PENYESUAIAN DI SINI */}
      <div
        className="w-100 d-flex align-items-center justify-content-center"
        style={{ flex: "1" }}
      >
        {/* Kontainer form dibuat lebih ramping */}
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {/* 1. Mengurangi margin-bottom dari logo container */}
          <div className="text-center mb-32">
            {" "}
            {/* Diubah dari mb-40 */}
            <img
              src="./assets/images/logo/nav-logo.png"
              alt="Logo"
              /* 2. Mengurangi margin-bottom logo */
              className="mb-20 mx-auto d-block" /* Diubah dari mb-24 */
              style={{ maxWidth: "150px" }} /* Diubah dari 160px */
            />
          </div>

          {/* 3. Mengurangi padding di dalam box form */}
          <div className="bg-main-25 border border-neutral-30 rounded-8 p-24">
            {" "}
            {/* Diubah dari p-32 */}
            <form>
              {/* EMAIL */}
              {/* 4. Mengurangi margin-bottom antar field */}
              <div className="mb-20">
                {" "}
                {/* Diubah dari mb-24 */}
                <label
                  htmlFor="email"
                  /* 5. Mengurangi margin-bottom label & ukuran font */
                  className="fw-medium text-neutral-500 mb-8 d-block" /* Diubah dari mb-16 & text-lg */
                >
                  Email
                </label>
                <input
                  id="email" /* Diperbaiki: id harus unik */
                  name="email" /* Diperbaiki */
                  type="email" /* Diperbaiki: type="text" menjadi "email" */
                  placeholder="Masukkan email.."
                  className={`form-control w-100 py-9 rounded`}
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-16">
                <label
                  htmlFor="password"
                  /* 6. Mengurangi margin-bottom label & ukuran font */
                  className="fw-medium text-neutral-500 mb-8 d-block" /* Diubah dari mb-16 & text-lg */
                >
                  Kata sandi
                </label>
                <div className="position-relative">
                  <input
                    placeholder="Masukkan kata sandi.."
                    id="password" /* Diperbaiki: id harus unik */
                    name="password" /* Diperbaiki */
                    /* 7. Menambahkan logic type untuk toggle password */
                    type={passwordVisible ? "text" : "password"}
                    className={`form-control w-100 py-9 rounded`}
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

              {/* FORGOT PASSWORD */}
              {/* 8. Menambah sedikit jarak di atas "Lupa Password" */}
              <div className="mt-8 mb-16 text-end">
                {" "}
                {/* Diubah dari mb-16 saja */}
                <a
                  href="#"
                  className="text-warning-600 hover-text-decoration-underline"
                >
                  Lupa Password
                </a>
              </div>

              {/* SIGN UP LINK */}
              {/* 9. Mengatur ulang margin sebelum tombol submit */}
              <div className="mb-24">
                {" "}
                {/* Diubah dari mb-16 */}
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
                /* 10. Mengurangi margin-top tombol */
                className="btn btn-main rounded-pill w-100 d-flex justify-content-center gap-8 mt-24" /* Diubah dari mt-30 */
              >
                Masuk
                <i className="ph-bold d-flex text-lg" />
              </button>
            </form>
          </div>

          {/* FOOTER */}
          <div className="text-center mt-16">
            {" "}
            {/* Diubah dari mt-20 */}
            <p className="text-neutral-500 text-sm">Powered by</p>
            <div className="d-flex justify-content-center align-items-center gap-4 mt-2">
              <img
                src="/assets/images/logo/anagata.png"
                className="img-fluid"
                style={{ maxWidth: "120px", objectFit: "contain" }}
                alt="Anagata"
              />
              {/* <img src="/assets/images/logo/lptui.png"  /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInInner;
