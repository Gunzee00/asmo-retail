import React, { useEffect } from "react";
import BlogListInner from "../../components/BlogListInner";
 
import HeaderOne from "../../components/HeaderOne";
import Animation from "../../helper/Animation";
import FooterTwo from "../../components/FooterTwo";

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

      {/* Blog List */}
      <BlogListInner />

    
      {/* Footer */}
      <FooterTwo />
    </>
  );
};

export default BlogPage;