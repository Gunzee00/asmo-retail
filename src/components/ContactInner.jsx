const ContactInner = () => {
  return (
    <>
      <section className="contact py-120">
        <div className="container">
          <div className="section-heading text-center">
            <div className="flex-align d-inline-flex gap-8 mb-16"></div>
            <h2 className="mb-24">Hubungi Kami</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="row gy-4 align-items-stretch">
            <div className="col-xl-4 col-md-6">
              <div className="contact-item h-100 bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-map-pin-line" />
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Kantor Utama</h4>
                  <p className="text-neutral-500">
                    125A Jl. Kemang Selatan No. 125A RT 001 RW 003 Kel. Bangka,
                    Kec. Mampang Prapatan Kota Administrasi Jakarta Selatan DKI
                    Jakarta 12730 Indonesia
                  </p>
                  <a
                    to="#"
                    className="text-main-600 fw-semibold text-decoration-underline mt-16"
                  >
                    Temukan Lokasi
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="contact-item h-100 bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-envelope-open" />
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Email </h4>
                  <p className="text-neutral-500">cs@anagata.co.id</p>
                  <a
                    to="mailto:infoexample@gmail.com"
                    className="text-main-600 fw-semibold text-decoration-underline mt-16"
                  >
                    Tetap Terhubung
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="contact-item h-100 bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                <span className="contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                  <i className="ph ph-phone-call" />
                </span>
                <div className="flex-grow-1">
                  <h4 className="mb-12">Nomor Telepon</h4>
                  <p className="text-neutral-500">(+62) 857-7000-9176</p>
                  <a
                    to="tel:(+62) 857-7000-9176"
                    className="text-main-600 fw-semibold text-decoration-underline mt-16"
                  >
                    Hubungi Kami!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="contact-form-section py-240 bg-main-25 position-relative z-1">
        <img
          src="assets/images/bg/wave-bg.png"
          alt=""
          className="position-absolute top-0 start-0 w-100 h-100 z-n1 d-lg-block d-none"
        />
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-xl-7 col-lg-6 pe-lg-5">
              <div className="mb-40 md-xl-5">
                <div className="flex-align d-inline-flex gap-8 mb-16">
                  <span className="text-main-600 text-2xl d-flex">
                    <i className="ph-bold ph-book" />
                  </span>
                  <h5 className="text-main-600 mb-0">Hubungi Kami</h5>
                </div>
                <h2 className="mb-24">Kamu punya pertanyaan? Hubungi Kami</h2>
                <p className="text-neutral-500 text-line-3 max-w-636">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliquaLorem ipsum...
                </p>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="p-24 bg-white rounded-12 box-shadow-md">
                <div className="border border-neutral-30 rounded-8 bg-main-25 p-24">
                  {/* == FORM BARU DI SINI == */}
                  <form action="#" id="commentForm">
                    <h4 className="mb-0">Mari Terhubung</h4>
                    <span className="d-block border border-neutral-30 my-24 border-dashed" />

                    <div className="mb-20">
                      <label
                        htmlFor="nama"
                        className="fw-medium text-neutral-500 mb-8 d-block"
                      >
                        Nama
                      </label>
                      <input
                        id="nama"
                        name="nama"
                        type="text"
                        placeholder="Masukkan nama..."
                        className="form-control w-100 py-9 rounded"
                      />
                    </div>

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
                        placeholder="Masukkan email..."
                        className="form-control w-100 py-9 rounded"
                      />
                    </div>

                    <div className="mb-20">
                      <label
                        htmlFor="telepon"
                        className="fw-medium text-neutral-500 mb-8 d-block"
                      >
                        Nomor Telepon
                      </label>
                      <input
                        id="telepon"
                        name="telepon"
                        type="tel"
                        placeholder="Masukkan nomor telepon..."
                        className="form-control w-100 py-9 rounded"
                      />
                    </div>

                    <div className="mb-24">
                      <label
                        htmlFor="pesan"
                        className="fw-medium text-neutral-500 mb-8 d-block"
                      >
                        Pesan
                      </label>
                      <textarea
                        id="pesan"
                        name="pesan"
                        placeholder="Tulis pesan kamu..."
                        className="form-control w-100 h-110 rounded-24"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-main rounded-pill w-100 d-flex justify-content-center gap-8 mt-24"
                    >
                      Kirim Pesan
                      <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                    </button>
                  </form>
                  {/* == END FORM == */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
