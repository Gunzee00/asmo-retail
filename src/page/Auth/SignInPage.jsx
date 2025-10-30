// src/pages/SignIn.jsx

import SignInInner from "../../components/SignInInner";
import Animation from "../../helper/Animation";

const SignInPage = () => {
  // Metadata (SEO) diatur manual via react-helmet (kalau mau)
  // atau bisa abaikan kalau belum butuh
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* SignIn Content */}
      <SignInInner />
    </>
  );
};

export default SignInPage;
