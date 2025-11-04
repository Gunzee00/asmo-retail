// Import components (ubah path sesuai struktur project kamu)

import CategoryOne from "../../components/CategoryOne";

import ExploreCourseTwo from "../../components/ExploreCourseTwo";

import FooterTwo from "../../components/FooterTwo";
import HeaderOne from "../../components/HeaderOne";

import Animation from "../../helper/Animation";
import BrandOne from "../../components/BrandOne";
import BannerTwo from "../../components/BannerTwo";
import BackgroundShapes from "../../components/BackgroundShapes";

const Dashboard = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerTwo */}
      <BannerTwo />
      <section className="position-relative z-1 overflow-hidden py-25 bg-main-25">
        <BackgroundShapes
          customPosition={{
            one: { right: "25%", bottom: "40%", width: "50px", opacity: "1" },
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
          <ExploreCourseTwo />
        </div>
      </section>

      <BrandOne />

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
          <CategoryOne />
        </div>
      </section>

      <FooterTwo />
    </>
  );
};

export default Dashboard;
