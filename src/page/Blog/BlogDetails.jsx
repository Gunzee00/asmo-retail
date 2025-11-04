import React, { useEffect } from "react";
import BlogDetailsInner from "../../components/BlogDetailsInner";

import HeaderOne from "../../components/HeaderOne";
import Animation from "../../helper/Animation";
import FooterTwo from "../../components/FooterTwo";
import BackgroundShapes from "../../components/BackgroundShapes";

const BlogDetailsPage = () => {
  // Ganti title halaman (pengganti metadata Next.js)
  useEffect(() => {
    document.title = "EduAll - Blog Details";
  }, []);

  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <HeaderOne />

      {/* Breadcrumb */}
      {/* <Breadcrumb title="Blog Details" /> */}
      <section className="position-relative z-1 overflow-hidden py-25 bg-main-25">
        <BackgroundShapes
          customPosition={{
            // one: { right: "25%", top: "0%", width: "50px", opacity: "1" },
            two: { right: "40%", top: "20%", width: "120px", opacity: "0.5" },
            four: {
              right: "2%",
              bottom: "20%",
              width: "100px",
              opacity: "0.6",
            },
            six: {
              right: "2%",
              bottom: "20%",
              width: "150px",
              opacity: "1",
            },
            eight: { right: "8%", top: "50%", width: "90px", opacity: "0.6" },
            nine: {
              right: "20%",
              bottom: "5%",
              width: "110px",
              opacity: "0.5",
            },
          }}
        />

        <div className="container">
          <BlogDetailsInner />
        </div>
      </section>
      {/* Blog Details Section */}

      {/* Certificate Section */}
      {/* <CertificateOne /> */}

      {/* Footer */}
      <FooterTwo />
    </>
  );
};

export default BlogDetailsPage;
