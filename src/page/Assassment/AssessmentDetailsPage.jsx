// src/pages/CourseDetailsPage.jsx

import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

import CourseDetails from "../../components/CourseDetails";

import HeaderOne from "../../components/HeaderOne";
import Animation from "../../helper/Animation";
import FooterTwo from "../../components/FooterTwo";

const AssessmentDetailsPage = () => {
  // Optional: bisa ganti title halaman pakai useEffect
  React.useEffect(() => {
    document.title = "EduAll - Courses Details";
  }, []);

  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <HeaderOne />

      {/* Breadcrumb */}
      {/* <Breadcrumb title="Courses Details" /> */}

      {/* Course Details */}
      <CourseDetails />

      {/* Certificate Section */}
      {/* <CertificateOne /> */}

      {/* Footer */}
      <FooterTwo />
    </>
  );
};

export default AssessmentDetailsPage;
