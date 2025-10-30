import React, { useEffect } from "react";
import AboutTwo from "../components/AboutTwo";
import Breadcrumb from "../components/Breadcrumb";
import CertificateTwo from "../components/CertificateTwo";
import FeaturesTwo from "../components/FeaturesTwo";
import FooterThree from "../components/FooterThree";
import HeaderOne from "../components/HeaderOne";
import InfoSectionOne from "../components/InfoSectionOne";
import JoinCommunityOne from "../components/JoinCommunityOne";
import TestimonialsTwo from "../components/TestimonialsTwo";
import Animation from "../helper/Animation";

const AboutUsPage = () => {
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

      {/* Breadcrumb */}
      {/* <Breadcrumb title="About Us" /> */}

      {/* Features */}
      <FeaturesTwo />

      {/* Info Section */}
      <InfoSectionOne />

      {/* About Section */}
      <AboutTwo />

      {/* Certificate Section */}
      <CertificateTwo />

      {/* Join Community */}
      <JoinCommunityOne />

      {/* Testimonials */}
      {/* <TestimonialsTwo /> */}

      {/* Footer */}
      <FooterThree />
    </>
  );
};

export default AboutUsPage;
