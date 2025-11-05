import { Link } from "react-router-dom";

const ExploreCourseTwo = () => {
  return (
    <section className="explore-course py-120 bg-main-25 position-relative z-1">
      <img
        src="assets/images/shapes/shape2.png"
        alt=""
        className="shape six animation-scalation"
      />
      <div className="container">
        <div className="section-heading text-center">
          <div className="flex-align d-inline-flex gap-8 mb-16 wow bounceInDown">
            {/* <span className='text-main-600 text-2xl d-flex'>
              <i className='ph-bold ph-book' />
            </span> */}
            {/* <h5 className='text-main-600 mb-0'>Assessment Terpopuler</h5> */}
          </div>
          <h2 className="mb-24 wow bounceIn">Assessment Terpopuler</h2>
          <p className=" wow bounceInUp">
            Berbagai tes yang paling banyak dipakai dalam proses seleksi dan
            evaluasi.
          </p>
        </div>
        <div className="text-center">
          <div
            className="nav-tab-wrapper bg-white p-16 mb-40 d-inline-block"
            data-aos="zoom-out"
          >
            <ul
              className="nav nav-pills common-tab gap-16"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8 active"
                  id="pills-categories-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-categories"
                  type="button"
                  role="tab"
                  aria-controls="pills-categories"
                  aria-selected="true"
                >
                  <i className="text-xl d-flex ph-bold ph-squares-four" />
                  Semua Kategori
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-design-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-design"
                  type="button"
                  role="tab"
                  aria-controls="pills-design"
                  aria-selected="false"
                >
                  <i className="text-xl d-flex ph-bold ph-magic-wand" />
                  Tes Kepribadian
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-programming-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-programming"
                  type="button"
                  role="tab"
                  aria-controls="pills-programming"
                  aria-selected="false"
                >
                  <i className="text-xl d-flex ph-bold ph-code" />
                  Tes Kemampuan Kognitif
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-webDesign-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-webDesign"
                  type="button"
                  role="tab"
                  aria-controls="pills-webDesign"
                  aria-selected="false"
                >
                  <i className="text-xl d-flex ph-bold ph-code" />
                  Tes Bakat & Aptitude
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8"
                  id="pills-Academic-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Academic"
                  type="button"
                  role="tab"
                  aria-controls="pills-Academic"
                  aria-selected="false"
                >
                  <i className="text-xl d-flex ph-bold ph-graduation-cap" />
                  Tes Sikap & Etika Kerja
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">9h 36m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Introduction to Digital Marketing
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/image2.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          AnikaZ
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 200.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">25h 06m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Introduction to Python Programming
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/image2.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Wade
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 220.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">9h 36m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Introduction to Photography Masterclass
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/image2.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Cody
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 150.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">9h 36m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Spanish Language Mastery: Beginner to Fluent
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/user-img4.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Dustin
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 280.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">9h 36m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Financial Planning for Millennials
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/user-img5.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Bruce
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 200.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">9h 36m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Nutrition Essentials for Healthy Living
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/user-img6.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Robert
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 150.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">9h 36m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Nutrition Essentials for Healthy Living
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/user-img2.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Robert
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 190.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">9h 36m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Nutrition Essentials for Healthy Living
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/user-img3.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Robert
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 190.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="course-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="course-item__thumb rounded-12 overflow-hidden position-relative">
                  <Link to="/assessment-details" className="w-100 h-100">
                    <img
                      src="assets/images/thumbs/image2.png"
                      alt="Course Image"
                      className="course-item__img rounded-12 cover-img transition-2"
                    />
                  </Link>
                  <div className="flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1">
                    <span className="text-2xl d-flex">
                      <i className="ph ph-clock" />
                    </span>
                    <span className="text-lg fw-medium">9h 36m</span>
                  </div>
                  <button
                    type="button"
                    className="wishlist-btn w-48 h-48 bg-white text-main-two-600 flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2"
                  >
                    <i className="ph ph-heart" />
                  </button>
                </div>
                <div className="course-item__content">
                  <div className="">
                    <h5 className="mb-28">
                      <Link
                        to="/assessment-details"
                        className="link text-line-2"
                      >
                        Nutrition Essentials for Healthy Living
                      </Link>
                    </h5>
                    <div className="flex-between gap-8 flex-wrap mb-16">
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-video-camera" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          20 Lessons
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <i className="ph-bold ph-chart-bar" />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Beginner
                        </span>
                      </div>
                    </div>
                    <div className="flex-between gap-8 flex-wrap">
                      <div className="flex-align gap-4">
                        <span className="text-2xl fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-lg text-neutral-700">
                          4.7
                          <span className="text-neutral-100">(6.4k)</span>
                        </span>
                      </div>
                      <div className="flex-align gap-8">
                        <span className="text-neutral-700 text-2xl d-flex">
                          <img
                            src="assets/images/thumbs/user-img1.png"
                            alt="User Image"
                            className="w-32 h-32 object-fit-cover rounded-circle"
                          />
                        </span>
                        <span className="text-neutral-700 text-lg fw-medium">
                          Robert
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                    <h5 className="mb-0 text-main-two-600">Rp 100.000</h5>
                    <Link
                      to="/apply-admission"
                      className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                      tabIndex={0}
                    >
                      Enroll Now
                      <i className="ph ph-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination mt-40 flex-align gap-12 flex-wrap justify-content-center">
            <li className="page-item">
              <Link
                className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
                to="#"
              >
                <i className="ph-bold ph-caret-left" />
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
                to="#"
              >
                1
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
                to="#"
              >
                2
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
                to="#"
              >
                3
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
                to="#"
              >
                ...
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
                to="#"
              >
                <i className="ph-bold ph-caret-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourseTwo;
