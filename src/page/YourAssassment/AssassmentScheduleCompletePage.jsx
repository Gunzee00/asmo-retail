import React, { useEffect } from "react";

import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";

import Animation from "../../helper/Animation";

import AssassmentPublic from "../../components/AssassmentPublic";
import AssassmentScheduleComplete from "../../components/AssassmentScheduleComplete";

const AssassmentScheduleCompletePage = () => {
  // Ganti title halaman (pengganti metadata Next.js)
  useEffect(() => {
    document.title = "EduAll - About Us ";
  }, []);

  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <HeaderOne />
      <AssassmentScheduleComplete />

      {/* <AssassmentPublic /> */}

      {/* Breadcrumb */}
      {/* <Breadcrumb title="About Us" /> */}

      {/* Features */}

      {/* <FooterThree /> */}
    </>
  );
};

export default AssassmentScheduleCompletePage;
