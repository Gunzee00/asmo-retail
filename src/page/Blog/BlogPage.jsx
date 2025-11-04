import React, { useEffect } from "react";
import BlogListInner from "../../components/BlogListInner";
 
import HeaderOne from "../../components/HeaderOne";
import Animation from "../../helper/Animation";
import FooterTwo from "../../components/FooterTwo";
import BackgroundShapes from "../../components/BackgroundShapes";

const BlogPage = () => {
  // Ganti title halaman (pengganti metadata Next.js)
  useEffect(() => {
    document.title = "EduAll - Blog List";
  }, []);

  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <HeaderOne />

      {/* Breadcrumb */}
      {/* <Breadcrumb title="Blog List" /> */}

      {/* Section dengan background dan shape */}
      <section className="position-relative z-1 overflow-hidden py-25 bg-main-25">
        <BackgroundShapes
          customPosition={{
            one: { right: "25%", top: "0%", width: "50px", opacity: "1" },
            two: { right: "10%", top: "20%", width: "100px", opacity: "0.5" },
            four: {
              right: "2%",
              bottom: "10%",
              width: "100px",
              opacity: "0.6",
            },
            six: {
              right: "12%",
              bottom: "25%",
              width: "150px",
              opacity: "0.5",
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
          <BlogListInner />
        </div>
      </section>
       

      {/* Footer */}
      <FooterTwo />
    </>
  );
};

export default BlogPage;