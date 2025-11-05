"use client";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const CartCount = () => {
  let [count, setCount] = useState(1);
  return (
    <div className="border border-neutral-40 bg-main-50 rounded-pill p-4 max-w-116 w-100 d-flex justify-content-between">
      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 1}
        type="button"
        className="quantity__minus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral-40 hover-border-main-600 hover-text-white flex-center"
      >
        <i className="ph-bold ph-minus" />
      </button>
      <input
        type="text"
        className="quantity__input flex-grow-1 common-input border-0 bg-transparent text-center text-lg fw-semibold text-neutral-700 p-0"
        value={count}
        readOnly
      />
      <button
        onClick={() => setCount(count + 1)}
        type="button"
        className="quantity__plus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral-40 hover-border-main-600 hover-text-white flex-center"
      >
        <i className="ph-bold ph-plus" />
      </button>
    </div>
  );
};

const CartInner = () => {
  const initialCartItems = [
    {
      id: 1,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: false,
    },
    {
      id: 2,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: false,
    },
    {
      id: 3,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: false,
    },
    {
      id: 4,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: false,
    },
    {
      id: 5,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: false,
    },
    {
      id: 6,
      img: "assets/images/thumbs/image2.png",
      name: "Tes Minat & Bakat Karier Profesional",
      price: "Rp 300.000",
      checked: false,
    },
    {
      id: 7,
      img: "assets/images/thumbs/about-image1.png",
      name: "Tes Kepribadian Online",
      price: "Rp 200.000",
      checked: false,
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectAll, setSelectAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const summaryRef = useRef(null);
  const [summaryStyle, setSummaryStyle] = useState({
    position: "fixed",
    right: "5%",
    top: "130px",
    width: "350px",
    zIndex: 10,
  });

  // === Sticky berhenti sebelum footer ===
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerTop = footer?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight + 40) {
        setSummaryStyle((prev) => ({
          ...prev,
          position: "absolute",
          top: window.scrollY + (footerTop - windowHeight) + "px",
        }));
      } else {
        setSummaryStyle((prev) => ({
          ...prev,
          position: "fixed",
          top: "130px",
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Checkbox handler ===
  const handleCheckboxChange = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCartItems(updated);
    const allChecked = updated.every((item) => item.checked);
    setSelectAll(allChecked);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setCartItems((prev) =>
      prev.map((item) => ({ ...item, checked: newSelectAll }))
    );
  };

  return (
    <div className="py-30 ">
      <div className="container">
        <div className="row">
          {/* Kiri: Daftar Keranjang */}
          <div className="col-lg-8 mx-auto">
            <div className="border border-neutral-30 rounded-12 bg-white p-32">
              <h4 className="mb-0">Keranjang</h4>

              <span className="d-block border border-neutral-30 my-24 border-dashed" />
              <div className="d-flex align-items-center gap-8 my-24">
                <input
                  type="checkbox"
                  className="form-check-input"
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <label className="text-neutral-700 fw-semibold">
                  Pilih Semua
                </label>
              </div>

              <div className="d-flex flex-column gap-20">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-neutral-30 bg-white rounded-12 p-20 d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap gap-16 shadow-sm hover-shadow-lg transition-3"
                  >
                    <div className="d-flex align-items-center gap-16 flex-grow-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        style={{
                          minWidth: "20px",
                          height: "20px",
                          cursor: "pointer",
                        }}
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                      <div className="border border-neutral-40 rounded-8 bg-white p-8">
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "contain",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                      <div>
                        <h6 className="mb-4 fw-semibold text-neutral-700">
                          {item.name}
                        </h6>
                        <span className="text-main-600 fw-semibold">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <button
                      className="delete-btn text-lg hover-text-main-600 transition-2"
                      style={{ border: "none", background: "transparent" }}
                    >
                      <i className="ph ph-trash text-xl"></i>
                    </button>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-between align-items-center mt-32 flex-wrap gap-12">
                <Link
                  to="/courses"
                  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                >
                  <i className="ph ph-arrow-left" /> Lanjut Assessment
                </Link>
              </div>
            </div>
          </div>

          {/* Kanan: Total Harga */}
          <div className="col-lg-3">
            <div
              ref={summaryRef}
              className="cart-summary border border-neutral-30 rounded-12 bg-white p-24 shadow-lg"
              style={summaryStyle}
            >
              <span className="text-neutral-700 text-lg mb-12">
                Total Harga
              </span>
              <div className="flex-align align-items-start flex-wrap gap-8">
                <div className="flex-align gap-12 text-neutral-700">
                  <h4 className="mb-0">Rp 500.000</h4>
                </div>
              </div>

              <span className="d-block border border-neutral-30 my-24 border-dashed" />
              <form action="#" className="my-24 position-relative">
                <input
                  type="email"
                  className="form-control bg-white shadow-none border border-neutral-30 rounded-pill h-48 ps-24 pe-44 focus-border-main-600"
                  placeholder="Kode Diskon"
                />
                <button
                  type="submit"
                  className="w-36 h-36 flex-center rounded-circle bg-main-600 text-white hover-bg-main-800 position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                >
                  <i className="ph ph-arrow-right" />
                </button>
              </form>
              <div className="d-flex align-items-center justify-content-between gap-4">
                <span className="text-neutral-500">Diskon</span>
                <span className="text-main-two-600 fw-medium">Rp 20.000</span>
              </div>

              <span className="d-block border border-neutral-30 my-24 border-dashed" />

              <div className="d-flex align-items-center justify-content-between gap-4">
                <span className="text-neutral-500">Total</span>
                <span className="text-main-600 fw-medium">Rp 480.000</span>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="btn btn-main rounded-pill w-100 mt-40"
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === MODAL PEMBAYARAN === */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "400px",
              maxWidth: "90%",
              background: "#fff",
              borderRadius: "12px",
              padding: "32px",
              position: "relative",
              boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
            }}
          >
            {/* ✅ TOMBOL CLOSE DI POJOK KANAN */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                cursor: "pointer",
                color: "#999",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#333")}
              onMouseLeave={(e) => (e.target.style.color = "#999")}
            >
              ✕
            </button>

            {/* --- TOTAL PEMBAYARAN --- */}
            <div className="text-center mb-4 ">
              <span className="text-muted d-block mb-1">Total Harga</span>
              <h3 className="fw-bold m-0">Rp 480.000</h3>
            </div>

            <hr className="my-3" />

            <p className="mb-3 text-center fw-semibold text-neutral-700">
              Pilih Metode Pembayaran
            </p>

            {/* BUTTON LIST */}
            <div className="d-flex flex-column gap-12 my-4">
              <button className="btn btn-outline-main rounded-pill">
                Mitra Pembayaran Digital
              </button>
              <button className="btn btn-outline-main rounded-pill">
                Qris by Anagata
              </button>
              <button className="btn btn-outline-main rounded-pill">
                Kartu Kredit
              </button>
            </div>

            {/* BATAL */}
            <div className="text-center mt-3">
              <button
                className="btn btn-neutral rounded-pill px-4"
                onClick={() => setShowModal(false)}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartInner;
