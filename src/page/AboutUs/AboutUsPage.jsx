import React, { useEffect } from "react";
import AboutTwo from "../../components/AboutTwo";

import CertificateTwo from "../../components/CertificateTwo";
import FeaturesTwo from "../../components/FeaturesTwo";
import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";
import InfoSectionOne from "../../components/InfoSectionOne";
import JoinCommunityOne from "../../components/JoinCommunityOne";

import Animation from "../../helper/Animation";
import BackgroundShapes from "../../components/BackgroundShapes";

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

      {/* Section dengan background dan shape */}
      <section className="position-relative z-1 overflow-hidden py-25 bg-main-25">
        <BackgroundShapes
          customPosition={{
            // one: { right: "25%", top: "0%", width: "50px", opacity: "1" },
            two: { right: "10%", top: "20%", width: "12 0px", opacity: "0.5" },
            four: {
              right: "2%",
              bottom: "10%",
              width: "130px",
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
          <FeaturesTwo />
        </div>
      </section>
      {/* Features */}

      {/* Section dengan background dan shape */}
      <section className="position-relative z-1 overflow-hidden py-25 bg-main-25">
        <BackgroundShapes
          customPosition={{
            // one: { right: "25%", top: "0%", width: "50px", opacity: "1" },
            two: { right: "10%", top: "20%", width: "12 0px", opacity: "0.5" },
            four: {
              right: "2%",
              bottom: "10%",
              width: "130px",
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
          <InfoSectionOne />
        </div>
      </section>
      {/* Info Section */}

      {/* Section dengan background dan shape */}
      <section className="position-relative z-1 overflow-hidden py-25 bg-main-25">
        <BackgroundShapes
          customPosition={{
            one: { right: "25%", top: "0%", width: "50px", opacity: "1" },
            two: { right: "10%", top: "20%", width: "12 0px", opacity: "0.5" },
            four: {
              right: "2%",
              bottom: "10%",
              width: "130px",
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
          <AboutTwo />
        </div>
      </section>
      {/* About Section */}
      {/* Section dengan background dan shape */}
      <section className="position-relative z-1 overflow-hidden py-25 bg-main-25">
        <BackgroundShapes
          customPosition={{
            one: { right: "25%", top: "0%", width: "50px", opacity: "1" },
            two: { right: "10%", top: "20%", width: "12 0px", opacity: "0.5" },
            four: {
              right: "2%",
              bottom: "10%",
              width: "130px",
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
          <CertificateTwo />
        </div>
      </section>
      {/* Certificate Section */}

      {/* Section dengan background dan shape */}
      <section className="position-relative z-1 overflow-hidden py-25 bg-main-25">
        <BackgroundShapes
          customPosition={{
            one: { right: "25%", top: "0%", width: "50px", opacity: "1" },
            two: { right: "10%", top: "20%", width: "12 0px", opacity: "0.5" },
            four: {
              right: "2%",
              bottom: "10%",
              width: "130px",
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
          <JoinCommunityOne />
        </div>
      </section>
      {/* Join Community */}

      {/* Footer */}
      <FooterThree />
    </>
  );
};

export default AboutUsPage;
