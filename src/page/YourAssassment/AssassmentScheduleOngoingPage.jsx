import React, { useEffect } from "react";

import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";

import Animation from "../../helper/Animation";

import AssassmentPublic from "../../components/AssassmentPublic";
import AssassmentScheduleOngoing from "../../components/AssassmentScheduleOngoing";

const AssassmentScheduleOngoingPage = () => {
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
      <AssassmentScheduleOngoing />

      {/* <AssassmentPublic /> */}

      {/* Breadcrumb */}
      {/* <Breadcrumb title="About Us" /> */}

      {/* Features */}

      {/* <FooterThree /> */}
    </>
  );
};

export default AssassmentScheduleOngoingPage;
