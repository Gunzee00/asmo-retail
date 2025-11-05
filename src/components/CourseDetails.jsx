import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <section className="course-details py-20">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-8">
            {/* Details Content Start */}
            <div className="course-details__content border border-neutral-30 rounded-12 bg-white p-12">
              <img
                src="assets/images/thumbs/course-detail1.png"
                alt=""
                className="rounded-8 cover-img"
              />
              <div className="p-20">
                <h2 className="mt-24 mb-24">
                  Learn Python: From Beginner to Advanced
                </h2>
                <p className="text-neutral-700">
                  Unlock the power of Python, one of the most versatile and
                  in-demand programming languages today. This comprehensive
                  course is designed for both beginners and experienced
                  programmers looking to enhance their skills. Whether you're
                  aiming to start a new career in software development, data
                  analysis, or simply want to automate everyday tasks, this
                  course will provide you with the skills and knowledge you need
                  to succeed.
                </p>
                <span className="d-block border-bottom border-main-100 my-32" />
                <h3 className="mb-16">What You Will Learn:</h3>
                <ul className="list-dotted d-flex flex-column gap-24">
                  <li>
                    Foundations of Python: Understand the basics of Python
                    programming, including syntax, variables, and data types.
                    Learn how to write, debug, and execute Python scripts.
                  </li>
                  <li>
                    Data Structures and Algorithms: Master Python's built-in
                    data structures such as lists, dictionaries, and sets.
                    Implement algorithms for sorting, searching, and
                    manipulating data efficiently.
                  </li>
                  <li>
                    Object-Oriented Programming (OOP): Gain proficiency in OOP
                    concepts like classes, objects, inheritance, and
                    polymorphism, which are crucial for developing complex and
                    modular programs.
                  </li>
                  <li>
                    File Handling and I/O Operations: Learn how to read from and
                    write to files, manage file directories, and handle
                    exceptions for robust file operations.
                  </li>
                  <li>
                    Libraries and Frameworks: Explore essential Python libraries
                    such as NumPy, Pandas, Matplotlib, and Seaborn for data
                    manipulation and visualization. Get an introduction to web
                    frameworks like Flask and Django.
                  </li>
                  <li>
                    Data Science and Machine Learning: Dive into data analysis
                    and visualization. Use Scikit-learn for building and
                    evaluating machine learning models.
                  </li>
                  <li>
                    Project Development: Apply your skills in real-world
                    scenarios with hands-on projects. Develop a comprehensive
                    capstone project that showcases your mastery of Python.
                  </li>
                </ul>
                <span className="d-block border-bottom border-main-100 my-32" />
                <h4 className="mb-16">Why Choose This Course:</h4>
                <ul className="list-dotted d-flex flex-column gap-24">
                  <li>
                    Expert Instruction: Learn from Dr. Jane Smith, an
                    experienced software developer and educator, who brings
                    real-world insights and practical knowledge to the
                    classroom.
                  </li>
                  <li>
                    Hands-On Learning: Engage in interactive exercises and
                    projects that reinforce your learning and provide practical
                    experience.
                  </li>
                  <li>
                    Flexible Learning: Study at your own pace with lifetime
                    access to all course materials, including video lectures,
                    coding exercises, and downloadable resources.
                  </li>
                  <li>
                    Comprehensive Curriculum: Cover all essential aspects of
                    Python programming, from the basics to advanced topics,
                    ensuring a well-rounded understanding of the language.
                  </li>
                  <li>
                    Supportive Community: Benefit from a supportive learning
                    environment with access to the course forum, where you can
                    ask questions, share insights, and collaborate with fellow
                    learners.
                  </li>
                </ul>
                <span className="d-block border-bottom border-main-100 my-32" />
                <h5 className="mb-16">Ideal For:</h5>
                <ul className="list-dotted d-flex flex-column gap-24">
                  <li>
                    Beginners with no prior programming experience looking to
                    start a career in software development or data science.
                  </li>
                  <li>
                    Intermediate programmers who want to deepen their
                    understanding of Python and explore advanced topics.
                  </li>
                  <li>
                    Professionals seeking to automate tasks, analyze data, or
                    develop web applications using Python.
                  </li>
                </ul>
                <span className="d-block border-bottom border-main-100 my-32" />
                <h6 className="mb-16">Enroll Today:</h6>
                <ul className="list-dotted d-flex flex-column gap-24">
                  <li>
                    Take the first step towards mastering Python. Enroll now and
                    start your journey to becoming a proficient Python
                    programmer!
                  </li>
                </ul>
                <p className="mt-24 text-neutral-700">
                  This detailed overview should give potential students a clear
                  understanding of what they can expect from the course and the
                  benefits of enrolling. Feel free to adjust any part of it to
                  better fit your specific course offerings. Let me know if you
                  need further customization or additional details!
                </p>
              </div>
            </div>
            {/* Details Content End */}

            {/* Review Start */}

            {/* Review End */}
            {/* Review Form Start */}

            {/* Review Form End */}
          </div>
          <div className="col-xl-4">
            <div className="course-details__sidebar border border-neutral-30 rounded-12 bg-white p-8">
              <div className="border border-neutral-30 rounded-12 bg-white p-24 bg-white">
                <span className="text-neutral-700 text-lg mb-12">Price</span>
                <div className="flex-align align-items-start flex-wrap gap-8 border-bottom border-neutral-40 pb-24 mb-24">
                  <div className="flex-align gap-12 text-neutral-700">
                    <span className="text-2xl d-flex">
                      <i className="ph-bold ph-tag" />
                    </span>
                    <span className="">From</span>
                    <h2 className="mb-0">Rp 99.99</h2>
                  </div>
                  <button
                    type="button"
                    className="text-neutral-500 text-sm"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Initial Price"
                  >
                    <i className="ph-bold ph-info" />
                  </button>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      <i className="ph ph-watch" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Courses Title
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    Web Development
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-video-camera" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Lessons
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    16 Videos
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      <i className="ph ph-globe" />{" "}
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Language
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    English
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-chart-pie" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Course Level
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    Beginner
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-star" />{" "}
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Reviews
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    4.7(5.5k)
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-question" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Quizzes
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">08</span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-clock" />{" "}
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Duration
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    7 Weeks
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-users" />{" "}
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Students
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    2.5k
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-certificate" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Certifications
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    Yes
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-seal-percent" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Pass Percentage
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    88%
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-calendar-dot" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Deadline
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    01 Jun, 2024
                  </span>
                </div>
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16">
                  <div className="flex-align gap-12">
                    <span className="text-neutral-700 text-2xl d-flex">
                      {" "}
                      <i className="ph ph-user-circle" />
                    </span>
                    <span className="text-neutral-700 text-lg fw-normal">
                      Instructor{" "}
                    </span>
                  </div>
                  <span className="text-lg fw-medium text-neutral-700">
                    Denial Lie
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="btn btn-main rounded-pill flex-center gap-8 mt-40"
                >
                  See All Reviews
                  <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                </Link>
                <div className="mt-24 flex-center gap-24">
                  <button
                    type="button"
                    className="w-44 h-44 flex-center bg-white rounded-circle text-main-600 text-lg hover-text-white hover-bg-main-600 transition-1"
                  >
                    <i className="ph-bold ph-shopping-cart-simple" />
                  </button>
                  <div className="dropdown flex-shrink-0">
                    <button
                      className="w-44 h-44 flex-center bg-white rounded-circle text-main-600 text-lg hover-text-white hover-bg-main-600 transition-1"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ph-bold ph-share-network" />
                    </button>
                    <div className="dropdown-menu dropdown-menu--md border-0 bg-transparent p-0">
                      <div className="card border border-gray-100 rounded-12 box-shadow-custom">
                        <div className="card-body p-16">
                          <ul className="social-list flex-align gap-8">
                            <li className="social-list__item">
                              <a
                                to="https://www.facebook.com"
                                className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"
                              >
                                <i className="ph-bold ph-facebook-logo" />
                              </a>
                            </li>
                            <li className="social-list__item">
                              <a
                                to="https://www.twitter.com"
                                className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"
                              >
                                <i className="ph-bold ph-twitter-logo" />
                              </a>
                            </li>
                            <li className="social-list__item">
                              <a
                                to="https://www.linkedin.com"
                                className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"
                              >
                                <i className="ph-bold ph-instagram-logo" />
                              </a>
                            </li>
                            <li className="social-list__item">
                              <a
                                to="https://www.pinterest.com"
                                className="text-main-600 text-md hover-text-white w-36 h-36 rounded-circle border border-main-200 hover-bg-main-600 hover-border-main-600 flex-center"
                              >
                                <i className="ph-bold ph-pinterest-logo" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
