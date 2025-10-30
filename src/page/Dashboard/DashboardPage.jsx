 

// Import components (ubah path sesuai struktur project kamu)

 
import CategoryOne from "../../components/CategoryOne";

import ExploreCourseTwo from "../../components/ExploreCourseTwo";

import FooterTwo from "../../components/FooterTwo";
import HeaderOne from "../../components/HeaderOne";

import Animation from "../../helper/Animation";
import BrandOne from "../../components/BrandOne";
import BannerTwo from "../../components/BannerTwo";

const Dashboard = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerTwo */}
      <BannerTwo />
     
      <ExploreCourseTwo />

      <BrandOne />
      
      <CategoryOne />

      
      <FooterTwo />
    </>
  );
};

export default Dashboard;
