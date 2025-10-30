import React, { useEffect } from "react";
import AboutTwo from "../../components/AboutTwo";

import CertificateTwo from "../../components/CertificateTwo";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";
import InfoSectionOne from "../../components/InfoSectionOne";
import JoinCommunityOne from "../../components/JoinCommunityOne";

import Animation from "../../helper/Animation";

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

      {/* Footer */}
      <FooterThree />
    </>
  );
};

export default AboutUsPage;
