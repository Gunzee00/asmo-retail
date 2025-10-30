import React, { useEffect } from "react";

 
import HeaderOne from "../../components/HeaderOne";

import Animation from "../../helper/Animation";
import AssassmentSchedule from "../../components/AssassmentSchedule";

const AssassmentSchedulePage = () => {
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

      <AssassmentSchedule />

      {/* Breadcrumb */}
      {/* <Breadcrumb title="About Us" /> */}

      {/* Features */}

      {/* <FooterThree /> */}
    </>
  );
};

export default AssassmentSchedulePage;
