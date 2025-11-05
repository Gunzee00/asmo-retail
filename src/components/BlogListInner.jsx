import { Link } from "react-router-dom";

const BlogListInner = () => {
  return (
    <div className="blog-page-section py-26">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <div
              className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30 d-flex flex-row"
              style={{ maxWidth: "1200px", width: "100%" }}
            >
              {/* Gambar */}
              <div
                className="course-item__thumb rounded-12 overflow-hidden position-relative"
                style={{ width: "350px", minWidth: "350px" }}
              >
                <Link to="/blog-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/image2.png"
                    alt="Course Image"
                    className="scale-hover-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="position-absolute inset-inline-start-0 inset-block-start-0 ms-16 mt-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">21</h3>
                  DEC
                </div>
              </div>

              {/* Konten teks */}
              <div className="p-20 position-relative flex-grow-1">
                <div className="flex-align gap-14 flex-wrap mb-20">
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-500 text-lg">By Admin</span>
                  </div>
                  <span className="w-8 h-8 bg-neutral-100 rounded-circle" />
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-chat-dots" />
                    </span>
                    <span className="text-neutral-500 text-lg">24</span>
                  </div>
                </div>

                <h6 className="mb-28">
                  <Link to="/blog-details" className="link text-line-3">
                    The Benefits of Learning a New Language Online The Benefits
                    of Learning a New Language Online
                  </Link>
                </h6>

                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    to="/blog-details"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                  >
                    Read More
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div
              className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30 d-flex flex-row"
              style={{ maxWidth: "1200px", width: "100%" }}
            >
              {/* Gambar */}
              <div
                className="course-item__thumb rounded-12 overflow-hidden position-relative"
                style={{ width: "350px", minWidth: "350px" }}
              >
                <Link to="/blog-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/image2.png"
                    alt="Course Image"
                    className="scale-hover-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="position-absolute inset-inline-start-0 inset-block-start-0 ms-16 mt-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">21</h3>
                  DEC
                </div>
              </div>

              {/* Konten teks */}
              <div className="p-20 position-relative flex-grow-1">
                <div className="flex-align gap-14 flex-wrap mb-20">
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-500 text-lg">By Admin</span>
                  </div>
                  <span className="w-8 h-8 bg-neutral-100 rounded-circle" />
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-chat-dots" />
                    </span>
                    <span className="text-neutral-500 text-lg">24</span>
                  </div>
                </div>

                <h6 className="mb-28">
                  <Link to="/blog-details" className="link text-line-3">
                    The Benefits of Learning a New Language Online The Benefits
                    of Learning a New Language Online
                  </Link>
                </h6>

                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    to="/blog-details"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                  >
                    Read More
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div
              className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30 d-flex flex-row"
              style={{ maxWidth: "1200px", width: "100%" }}
            >
              {/* Gambar */}
              <div
                className="course-item__thumb rounded-12 overflow-hidden position-relative"
                style={{ width: "350px", minWidth: "350px" }}
              >
                <Link to="/blog-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/image2.png"
                    alt="Course Image"
                    className="scale-hover-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="position-absolute inset-inline-start-0 inset-block-start-0 ms-16 mt-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">21</h3>
                  DEC
                </div>
              </div>

              {/* Konten teks */}
              <div className="p-20 position-relative flex-grow-1">
                <div className="flex-align gap-14 flex-wrap mb-20">
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-500 text-lg">By Admin</span>
                  </div>
                  <span className="w-8 h-8 bg-neutral-100 rounded-circle" />
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-chat-dots" />
                    </span>
                    <span className="text-neutral-500 text-lg">24</span>
                  </div>
                </div>

                <h6 className="mb-28">
                  <Link to="/blog-details" className="link text-line-3">
                    The Benefits of Learning a New Language Online The Benefits
                    of Learning a New Language Online
                  </Link>
                </h6>

                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    to="/blog-details"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                  >
                    Read More
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div
              className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30 d-flex flex-row"
              style={{ maxWidth: "1200px", width: "100%" }}
            >
              {/* Gambar */}
              <div
                className="course-item__thumb rounded-12 overflow-hidden position-relative"
                style={{ width: "350px", minWidth: "350px" }}
              >
                <Link to="/blog-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/image2.png"
                    alt="Course Image"
                    className="scale-hover-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="position-absolute inset-inline-start-0 inset-block-start-0 ms-16 mt-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">21</h3>
                  DEC
                </div>
              </div>

              {/* Konten teks */}
              <div className="p-20 position-relative flex-grow-1">
                <div className="flex-align gap-14 flex-wrap mb-20">
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-500 text-lg">By Admin</span>
                  </div>
                  <span className="w-8 h-8 bg-neutral-100 rounded-circle" />
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-chat-dots" />
                    </span>
                    <span className="text-neutral-500 text-lg">24</span>
                  </div>
                </div>

                <h6 className="mb-28">
                  <Link to="/blog-details" className="link text-line-3">
                    The Benefits of Learning a New Language Online The Benefits
                    of Learning a New Language Online
                  </Link>
                </h6>

                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    to="/blog-details"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                  >
                    Read More
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div
              className="scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30 d-flex flex-row"
              style={{ maxWidth: "1200px", width: "100%" }}
            >
              {/* Gambar */}
              <div
                className="course-item__thumb rounded-12 overflow-hidden position-relative"
                style={{ width: "350px", minWidth: "350px" }}
              >
                <Link to="/blog-details" className="w-100 h-100">
                  <img
                    src="assets/images/thumbs/image2.png"
                    alt="Course Image"
                    className="scale-hover-item__img rounded-12 cover-img transition-2"
                  />
                </Link>
                <div className="position-absolute inset-inline-start-0 inset-block-start-0 ms-16 mt-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">21</h3>
                  DEC
                </div>
              </div>

              {/* Konten teks */}
              <div className="p-20 position-relative flex-grow-1">
                <div className="flex-align gap-14 flex-wrap mb-20">
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-500 text-lg">By Admin</span>
                  </div>
                  <span className="w-8 h-8 bg-neutral-100 rounded-circle" />
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-chat-dots" />
                    </span>
                    <span className="text-neutral-500 text-lg">24</span>
                  </div>
                </div>

                <h6 className="mb-28">
                  <Link to="/blog-details" className="link text-line-3">
                    The Benefits of Learning a New Language Online
                  </Link>
                </h6>

                <div className="flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0">
                  <Link
                    to="/blog-details"
                    className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                  >
                    Read More
                    <i className="ph ph-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="pagination mt-40 flex-align gap-12 flex-wrap justify-content-center">
          <li className="page-item">
            <a
              className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
              to="#"
            >
              <i className="ph-bold ph-caret-left" />
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
              to="#"
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
              to="#"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
              to="#"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
              to="#"
            >
              ...
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link text-neutral-700 fw-semibold w-40 h-40 bg-white rounded-circle hover-bg-main-600 border-neutral-30 hover-border-main-600 hover-text-white flex-center p-0"
              to="#"
            >
              <i className="ph-bold ph-caret-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogListInner;
