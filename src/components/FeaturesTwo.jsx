import { Link } from "react-router-dom";

const FeaturesTwo = () => {
  return (
    <section className="features-two half-bg py-20 position-relative overflow-hidden">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape two animation-scalation"
      />
      <img
        src="assets/images/shapes/shape4.png"
        alt=""
        className="shape six animation-walking"
      />
      <div className="container">
        <div className="section-heading style-flex">
          <div className="section-heading__inner">
            <h3 className="mb-24 wow bounceInLeft">
              Menghadirkan Pengukuran Kompetensi yang Akurat dan Efisien
            </h3>
          </div>
          <div className="section-heading__content wow bounceInRight">
            <p className="text-line-2">
              Platform Assessment Online yang dirancang untuk membantu
              organisasi, institusi pendidikan, dan individu dalam melakukan
              pengukuran kompetensi, kepribadian, dan kemampuan kognitif secara
              cepat, aman, dan berbasis data.
            </p>
            <Link
              to="/course-list-view"
              className="item-hover__text flex-align d-inline-flex gap-8 text-main-600 mt-24 hover-text-decoration-underline transition-1 fw-semibold"
            >
              Read More
              <i className="ph ph-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration={200}
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon1.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Tes Berbasis Psikometri Terstandar
              </h4>
              <p className="transition-1 item-hover__text text-line-2">
                Instrumen disusun dengan prinsip validitas & reliabilitas untuk
                memastikan hasil yang objektif dan dapat dipertanggungjawabkan.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration={400}
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon2.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Hasil Real-Time & Mudah Dipahami
              </h4>
              <p className="transition-1 item-hover__text text-line-2">
                Laporan langsung muncul setelah tes selesai, lengkap dengan
                interpretasi yang ringkas dan actionable.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <div className="text-center features-item item-hover animation-item bg-white border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600">
              <span className="mb-32 w-110 h-110 flex-center d-inline-flex bg-main-25 rounded-circle">
                <img
                  src="assets/images/icons/features-two-icon3.png"
                  className="animate__bounce"
                  alt=""
                />
              </span>
              <h4 className="mb-16 transition-1 item-hover__text">
                Integrasi Fleksibel untuk Berbagai Kebutuhan
              </h4>
              <p className="transition-1 item-hover__text text-line-2">
                Cocok untuk proses rekrutmen, promosi jabatan, asesmen karyawan,
                seleksi pendidikan, atau pengembangan diri.
              </p>
              <span className="item-hover__bg w-48 h-1 bg-neutral-500 mt-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTwo;
