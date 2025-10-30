import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import CourseGridView from "../components/CourseGridView";
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import HeaderOne from "../components/HeaderOne";
import Animation from "../helper/Animation";

const Assassment = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <HeaderOne />

      {/* Breadcrumb */}
      {/* <Breadcrumb title="Courses Grid View" /> */}

      {/* CourseGridView */}
      <CourseGridView />

      {/* CertificateOne */}
      {/* <CertificateOne /> */}

      {/* Footer */}
      <FooterTwo /> 
    </>
  );
};

export default Assassment;
