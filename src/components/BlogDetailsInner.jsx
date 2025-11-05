import { Link } from "react-router-dom";

const BlogDetailsInner = () => {
  return (
    <div className="blog-page-section py-30">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="bg-white rounded-16 p-12 border border-neutral-30">
              <div className="rounded-12 overflow-hidden position-relative">
                <img
                  src="assets/images/thumbs/blog-detail1.png"
                  alt="Course Image"
                  className="rounded-12 cover-img transition-2"
                  style={{
                    maxWidth: "400px" /* lebih kecil */,
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                    margin: "20px auto" /* kasih jarak atas bawah + center */,
                  }}
                />
                <div className="position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium">
                  <h3 className="mb-0 text-white fw-medium">21</h3>
                  DEC
                </div>
              </div>
              <div className="pt-32 pb-24 px-16 position-relative">
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
                      <i className="ph-bold ph-eye" />
                    </span>
                    <span className="text-neutral-500 text-lg">1.6k</span>
                  </div>
                  <span className="w-8 h-8 bg-neutral-100 rounded-circle" />
                  <div className="flex-align gap-8">
                    <span className="text-neutral-500 text-2xl d-flex">
                      <i className="ph ph-chat-dots" />
                    </span>
                    <span className="text-neutral-500 text-lg">24</span>
                  </div>
                </div>
                <h2 className="mb-24">
                  {" "}
                  Top 10 Tips for Online Learning Success{" "}
                </h2>
                <p className="text-neutral-500 mb-32">
                  This blog post provides practical tips and strategies to help
                  students succeed in their online learning journey. It covers
                  aspects like time management, staying motivated, and effective
                  study techniques.
                </p>
                <h6 className="mb-16 text-neutral-500 text-lg">Key Points:</h6>
                <ul className="list-dotted d-flex flex-column gap-8">
                  <li>
                    {" "}
                    Create a Dedicated Study Space: Ensure your study area is
                    quiet, well-lit, and free from distractions.
                  </li>
                  <li>
                    {" "}
                    Set a Routine: Develop a consistent study schedule to stay
                    organized and on track.
                  </li>
                  <li>
                    {" "}
                    Stay Organized: Use planners or digital tools to keep track
                    of assignments and deadlines.
                  </li>
                  <li>
                    {" "}
                    Participate Actively: Engage in online discussions, forums,
                    and group projects to enhance learning.
                  </li>
                  <li>
                    {" "}
                    Take Breaks: Avoid burnout by taking regular breaks and
                    practicing self-care.
                  </li>
                  <li>
                    {" "}
                    Stay Connected: Communicate regularly with instructors and
                    classmates for support and collaboration.
                  </li>
                  <li>
                    {" "}
                    Utilize Resources: Take advantage of available resources
                    like online libraries, tutoring services, and study guides.
                  </li>
                  <li>
                    {" "}
                    Practice Time Management: Prioritize tasks and break larger
                    projects into manageable chunks.
                  </li>
                  <li>
                    {" "}
                    Stay Motivated: Set personal goals and reward yourself for
                    achieving milestones.
                  </li>
                  <li>
                    {" "}
                    Seek Feedback: Actively seek and apply feedback to improve
                    your understanding and performance.
                  </li>
                </ul>
                <span className="d-block border border-neutral-30 my-32 border-dashed" />
                <h3 className="mb-16 text-neutral-500 text-lg">
                  Create a Dedicated Study Space
                </h3>
                <ul className="list-dotted d-flex flex-column gap-8">
                  <li>
                    Description: Set up a specific area in your home that is
                    solely for studying. This helps create a clear boundary
                    between study time and personal time.
                  </li>
                  <li>
                    Tips: Ensure your study space is quiet, well-lit,
                    comfortable, and free from distractions. Keep all necessary
                    materials within reach to minimize interruptions.
                  </li>
                </ul>
                <span className="d-block border border-neutral-30 my-32 border-dashed" />
                <h4 className="mb-16 text-neutral-500 text-lg">
                  Set a Routine
                </h4>
                <ul className="list-dotted d-flex flex-column gap-8">
                  <li>
                    Description: Establishing a consistent study schedule can
                    help you stay organized and manage your time effectively.
                  </li>
                  <li>
                    Tips: Plan your day around your classes and study sessions.
                    Stick to this routine as closely as possible to build good
                    habits and ensure you cover all your subjects.
                  </li>
                </ul>
                <span className="d-block border border-neutral-30 my-32 border-dashed" />
                <h5 className="mb-16 text-neutral-500 text-lg">
                  Stay Organized
                </h5>
                <ul className="list-dotted d-flex flex-column gap-8">
                  <li>
                    Description: Organization is key to managing coursework,
                    deadlines, and other responsibilities.
                  </li>
                  <li>
                    {" "}
                    Tips: Use planners, calendars, or digital tools to keep
                    track of assignments, exams, and important dates. Regularly
                    review and update your schedule to stay on top of your
                    tasks.
                  </li>
                </ul>
                <span className="d-block border border-neutral-30 my-32 border-dashed" />
                <h6 className="mb-16 text-neutral-500 text-lg">
                  Utilize Resources
                </h6>
                <ul className="list-dotted d-flex flex-column gap-8">
                  <li>
                    Description: Take full advantage of the resources available
                    to you, such as libraries, tutoring services, and online
                    tools.
                  </li>
                  <li>
                    Tips: Access digital libraries, attend virtual tutoring
                    sessions, and use educational apps and websites. Many
                    institutions offer free resources to support online
                    learners.
                  </li>
                </ul>
                <p className="text-neutral-500 mt-24">
                  Online learning can be a highly effective way to achieve your
                  educational goals if approached with the right strategies. By
                  creating a dedicated study space, setting a routine, staying
                  organized, and actively participating, you can make the most
                  of your online learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsInner;
