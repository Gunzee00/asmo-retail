import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BootstrapInit from "./helper/BootstrapInit";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import LoadPhosphorIcons from "./helper/LoadPhosphorIcons";
import Loading from "./loading.jsx";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./Middleware/ProtectedRoute";

// Lazy loaded pages
const Dashboard = lazy(() => import("./page/Dashboard/DashboardPage.jsx"));
const SignInPage = lazy(() => import("./page/Auth/SignInPage.jsx"));
const SignUpPage = lazy(() => import("./page/Auth/SignUpPage.jsx"));
const AboutUsPage = lazy(() => import("./page/AboutUs/AboutUsPage.jsx"));
const AssassmentPage = lazy(() =>
  import("./page/Assassment/AssassmentPage.jsx")
);
const AssassmentSchedulePage = lazy(() =>
  import("./page/YourAssassment/AssessmentSchedulePage.jsx")
);
const AssassmentInvitationPage = lazy(() =>
  import("./page/YourAssassment/AssassmentInvitationPage.jsx")
);
const AssassmentScheduleOngoingPage = lazy(() =>
  import("./page/YourAssassment/AssassmentScheduleOngoingPage.jsx")
);
const AssassmentScheduleCompletePage = lazy(() =>
  import("./page/YourAssassment/AssassmentScheduleOngoingPage.jsx")
);
const BlogPage = lazy(() => import("./page/Blog/BlogPage.jsx"));
const CartPage = lazy(() => import("./page/Cart/CartPage.jsx"));
const ContactPage = lazy(() => import("./page/Contact/ContactPage.jsx"));
const AssessmentDetailsPage = lazy(() =>
  import("./page/Assassment/AssessmentDetailsPage.jsx")
);
const BlogDetailsPage = lazy(() => import("./page/Blog/BlogDetails.jsx"));
const NotFound = lazy(() => import("./not-found.jsx"));

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <BootstrapInit />
        <LoadPhosphorIcons />
        <RouteScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/assassment" element={<AssassmentPage />} />
          <Route
            path="/assessment-schedule"
            element={<AssassmentSchedulePage />}
          />
          <Route
            path="/assessment-public"
            element={<AssassmentInvitationPage />}
          />
          <Route
            path="/schedule-assessment-ongoing"
            element={<AssassmentScheduleOngoingPage />}
          />
          <Route
            path="/schedule-assessment-complete"
            element={<AssassmentScheduleCompletePage />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/assessment-details"
            element={<AssessmentDetailsPage />}
          />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          {/* Protected Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteApp;
