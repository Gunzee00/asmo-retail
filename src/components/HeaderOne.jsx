"use client";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import $ from "jquery";
import { authService } from "../services/authService"; // ✅ Import authService

const HeaderOne = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ State user
  const [user, setUser] = useState(null);

  // ✅ Ambil data user saat komponen mount
  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  // ✅ Logout
  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  // ✅ Dropdown
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const handleLinkClick = () => setIsDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Scroll effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("select2").then(() => {
        const selectElement = $(".js-example-basic-single");
        if (selectElement.length > 0) selectElement.select2();
      });
    }
    window.onscroll = () => {
      setScroll(window.pageYOffset > 150);
      return () => (window.onscroll = null);
    };
  }, []);

  // ✅ Menu mobile
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    document.body.classList.toggle("scroll-hide-sm", !isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove("scroll-hide-sm");
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmenuClick = (index) => {
    if (windowWidth < 992)
      setActiveSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const menuItems = [
    { label: "Beranda", to: "/" },
    { label: "Assessment", to: "/assassment" },
    { label: "Blog", to: "/blog" },
    { label: "Tentang Kami", to: "/about-us" },
    // { label: "Kontak", to: "/contact" },
  ];

  const profileDropdownItems = [
    {
      label: "List Assesmen",
      to: "/http://asmo.anagata.co.id/schedule-assessment",
      icon: "ph-list-checks",
    },
    { label: "Profile", to: "/profile", icon: "ph-user-gear" },
  ];

  return (
    <>
      <div className={`side-overlay ${isMenuActive ? "show" : ""}`}></div>
      <header className={`header ${scroll ? "fixed-header" : ""}`}>
        <div className="container container--xl">
          <nav className="header-inner flex-between gap-8">
            <div className="header-content-wrapper flex-align flex-grow-1">
              {/* ✅ Logo */}
              <div className="logo">
                <Link to="/" className="link">
                  <img
                    src="./assets/images/logo/nav-logo.png"
                    alt="Logo"
                    style={{ maxWidth: "130px", height: "auto" }}
                  />
                </Link>
              </div>

              {/* ✅ Menu utama */}
              <div className="header-menu d-lg-block d-none">
                <ul className="nav-menu flex-align">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={`nav-menu__item ${
                        pathname === item.to ? "activePage" : ""
                      }`}
                    >
                      <Link to={item.to} className="nav-menu__link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ✅ Header kanan */}
            <div className="header-right flex-align">
              {user ? (
                <>
                  {/* 🛒 Cart */}
                  <Link
                    to="/cart"
                    className="info-action w-52 h-52 bg-main-25 hover-bg-main-600 border border-neutral-30 rounded-circle flex-center text-2xl text-neutral-500 hover-text-white hover-border-main-600"
                  >
                    <i className="ph ph-shopping-cart" />
                  </Link>

                  {/* 👤 Profile Dropdown */}
                  <div ref={dropdownRef} className="position-relative">
                    <button
                      type="button"
                      onClick={toggleDropdown}
                      className={`info-action w-52 h-52 bg-main-25 hover-bg-main-600 border border-neutral-30 rounded-circle flex-center text-2xl text-neutral-500 hover-text-white hover-border-main-600 ${
                        isDropdownOpen ? "active" : ""
                      }`}
                    >
                      <i className="ph ph-user-circle" />
                    </button>

                    {isDropdownOpen && (
                      <div
                        className="profile-dropdown animate-fadeIn"
                        style={{
                          position: "absolute",
                          top: "110%",
                          right: 0,
                          zIndex: 1000,
                          minWidth: "240px",
                          backgroundColor: "#ffffff",
                          borderRadius: "12px",
                          padding: "14px 10px",
                          marginTop: "8px",
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                          border: "1px solid rgba(230,230,230,0.8)",
                          backdropFilter: "blur(8px)",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {/* Header user info */}
                        <div
                          className="dropdown-user-info mb-3 pb-2"
                          style={{
                            borderBottom: "1px solid rgba(230,230,230,0.8)",
                            padding: "0 10px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "13px",
                              color: "#888",
                              marginBottom: "4px",
                            }}
                          >
                            Halo
                          </p>
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "16px",
                              color: "#222",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {user?.name || user?.email}
                          </p>
                        </div>

                        {/* List items */}
                        <ul className="list-unstyled mb-2">
                          {profileDropdownItems.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={item.to}
                                onClick={handleLinkClick}
                                className="d-flex align-items-center gap-20 px-3 py-2 rounded-md text-decoration-none"
                                style={{
                                  color: "#444",
                                  transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "#f5f5f5";
                                  e.currentTarget.style.color = "#007bff";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "transparent";
                                  e.currentTarget.style.color = "#444";
                                }}
                              >
                                <i className={`ph ${item.icon} text-lg`} />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <button
                              onClick={handleLogout}
                              className="d-flex align-items-center gap-20  px-3 py-2 w-100 text-start rounded-md border-0 bg-transparent"
                              style={{
                                color: "#dc3545",
                                fontWeight: 500,
                                transition: "background 0.2s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "#fff0f0")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "transparent")
                              }
                            >
                              <i className="ph ph-sign-out gap-20 text-lg" />
                              Keluar
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                // Kalau belum login → tampilkan tombol "Masuk"
                <Link
                  to="/sign-in"
                  className="btn btn-main rounded-pill flex-align "
                  data-aos="fade-right"
                >
                  Masuk
                  <i className="ph-bold d-flex text-lg" />
                </Link>
              )}

              {/* ☰ Mobile Menu */}
              <button
                type="button"
                className="toggle-mobileMenu d-lg-none text-neutral-200 flex-center"
                onClick={toggleMenu}
              >
                <i className="ph ph-list" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ✅ Mobile Menu */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          isMenuActive ? "active" : ""
        }`}
      >
        <button type="button" className="close-button" onClick={closeMenu}>
          <i className="ph ph-x" />
        </button>
        <div className="mobile-menu__inner">
          <Link to="/" className="mobile-menu__logo">
            <img src="./assets/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            <ul className="nav-menu flex-align nav-menu--mobile">
              {menuItems.map((item, index) => (
                <li
                  className={`nav-menu__item ${
                    pathname === item.to ? "activePage" : ""
                  }`}
                  key={index}
                >
                  <Link to={item.to} className="nav-menu__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
