import React, { useEffect } from "react";
import ContactInner from "../../components/ContactInner";
import HeaderOne from "../../components/HeaderOne";
import Animation from "../../helper/Animation";
import FooterTwo from "../../components/FooterTwo";

const ContactPage = () => {
  // Pengganti metadata Next.js → ubah title halaman
  useEffect(() => {
    document.title = "EduAll - Contact";
  }, []);

  return (
    <>
      {/* Animation */}
      <Animation />

      {/* Header */}
      <HeaderOne />

      {/* Breadcrumb */}
      {/* <Breadcrumb title="Contact" /> */}

      {/* Contact Section */}
      <ContactInner />

      {/* Certificate Section */}
      {/* <CertificateOne /> */}

      {/* Footer */}
      <FooterTwo />
    </>
  );
};

export default ContactPage;
