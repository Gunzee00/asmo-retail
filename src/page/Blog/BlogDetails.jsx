import React, { useEffect } from "react";
import BlogDetailsInner from "../../components/BlogDetailsInner";

import HeaderOne from "../../components/HeaderOne";
import Animation from "../../helper/Animation";
import FooterTwo from "../../components/FooterTwo";

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

      {/* Blog Details Section */}
      <BlogDetailsInner />

      {/* Certificate Section */}
      {/* <CertificateOne /> */}

      {/* Footer */}
      <FooterTwo />
    </>
  );
};

export default BlogDetailsPage;
