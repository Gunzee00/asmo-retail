import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer className="footer bg-neutral-900 position-relative z-1">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape five animation-scalation"
      />
      <img
        src="assets/images/shapes/shape6.png"
        alt=""
        className="shape one animation-scalation"
      />
      <div className="py-120 ">
        <div className="container container-two">
          <div className="row gy-5">
            {/* --- KOLOM 1 --- */}
            <div
              className="col-lg-4 col-sm-6 col-xs-6" // <--- DIUBAH DARI col-lg-3
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium text-white mb-32">
                  Quick Link
                </h4>
                <ul className="footer-menu">
                  <li className="mb-16">
                    <Link
                      to="/"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      to="/courses"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Assessment
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      to="/blog"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      to="/about-us"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link
                      to="/contact"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Hubungi Kami
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* --- KOLOM 2 --- */}
            <div
              className="col-lg-4 col-sm-6 col-xs-6" // <--- DIUBAH DARI col-lg-3
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium text-white mb-32">
                  Kategori
                </h4>
                <ul className="footer-menu">
                  <li className="mb-16">
                    <Link
                      to="/courses"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Tes Kepribadian
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      to="/courses"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Tes Emosional & Interpersonal
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      to="/courses"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Tes Kemampuan Kognitif / IQ
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      to="/courses"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Tes Bakat & Aptitude
                    </Link>
                  </li>
                  <li className="mb-16">
                    <Link
                      to="/courses"
                      className="text-white hover-text-main-600 hover-text-decoration-underline"
                    >
                      Tes Minat dan Motivasi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* --- KOLOM 3 --- */}
            <div
              className="col-lg-4 col-sm-6 col-xs-6" // <--- DIUBAH DARI col-lg-3
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="footer-item">
                <h4 className="footer-item__title fw-medium text-white mb-32">
                  Hubungi Kami
                </h4>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-phone" />
                  </span>
                  <div className="">
                    <Link
                      to="/tel:(207)555-0119"
                      className="text-white d-block hover-text-main-600 mb-4"
                    >
                      (+62) 857-7000-9176
                    </Link>
                  </div>
                </div>
                <div className="flex-align gap-20 mb-24">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-envelope-open" />
                  </span>
                  <div className="">
                    <Link
                      to="/mailto:dwallo@gmail.com"
                      className="text-white d-block hover-text-main-600 mb-4"
                    >
                      cs@anagata.co.id
                    </Link>
                  </div>
                </div>
                <div className="flex-align gap-20 mb-0">
                  <span className="icon d-flex text-32 text-main-600">
                    <i className="ph ph-map-trifold" />
                  </span>
                  <div className="">
                    <span className="text-white d-block mb-4">
                      125A Jl. Kemang Selatan No. 125A RT 001 RW 003 Kel.
                      Bangka, Kec. Mampang Prapatan Kota Administrasi Jakarta
                      Selatan DKI Jakarta 12730 Indonesia
                    </span>
                    <span className="text-white d-block mb-0"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- KOLOM 4 (KOSONG) SUDAH DIHAPUS --- */}
          </div>
        </div>
      </div>
      <div className="container">
        {/* bottom Footer */}
        <div className="bottom-footer border-top border-dashed border-neutral-600 border-0 py-32">
          <div className="container container-two">
            <div className="bottom-footer__inner flex-between gap-16 flex-wrap">
              <div className="footer-item__logo mb-0" data-aos="zoom-in-right">
                <Link to="/">
                  {" "}
                  <img src="assets/images/logo/anagata.png" alt="" />
                </Link>
              </div>
              <p
                className="text-white text-line-1 fw-normal"
                data-aos="zoom-in"
              >
                {" "}
                Copyright © 2025 <span className="fw-semibold">
                  Anagata{" "}
                </span>{" "}
                All Rights Reserved.
              </p>
              <ul
                className="social-list flex-align gap-24"
                data-aos="zoom-in-left"
              >
                <li className="social-list__item">
                  <Link
                    to="https://www.facebook.com"
                    className="text-white text-2xl hover-text-main-two-600"
                  >
                    <i className="ph-bold ph-facebook-logo" />
                  </Link>
                </li>
                <li className="social-list__item">
                  <Link
                    to="https://www.twitter.com"
                    className="text-white text-2xl hover-text-main-two-600"
                  >
                    <i className="ph-bold ph-twitter-logo" />
                  </Link>
                </li>
                <li className="social-list__item">
                  <Link
                    to="https://www.linkedin.com"
                    className="text-white text-2xl hover-text-main-two-600"
                  >
                    <i className="ph-bold ph-instagram-logo" />
                  </Link>
                </li>
                <li className="social-list__item">
                  <Link
                    to="https://www.pinterest.com"
                    className="text-white text-2xl hover-text-main-two-600"
                  >
                    <i className="ph-bold ph-pinterest-logo" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
