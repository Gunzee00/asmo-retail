"use client";
import { Link } from "react-router-dom";
import { useState } from "react"; // Pastikan useState di-import

export const CartCount = () => {
  let [count, setCount] = useState(1);
  return (
    <>
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
        />
        <button
          onClick={() => setCount(count + 1)}
          type="button"
          className="quantity__plus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral430 hover-border-main-600 hover-text-white flex-center"
        >
          <i className="ph-bold ph-plus" />
        </button>
      </div>
    </>
  );
};

const CartInner = () => {
  // 1. Definisikan data awal di luar return
  // Tambahkan 'id' unik and 'checked'
  const initialCartItems = [
    {
      id: 1,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: true,
    },
    {
      id: 2,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: true,
    },
    {
      id: 3,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: true,
    },
    {
      id: 4,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: true,
    },
    {
      id: 5,
      img: "/assets/images/logo/nav-logo.png",
      name: "Tes Assessment Psikometrik Lengkap",
      price: "Rp 250.000",
      checked: true,
    },
    {
      id: 6,
      img: "assets/images/thumbs/image2.png",
      name: "Tes Minat & Bakat Karier Profesional",
      price: "Rp 300.000",
      checked: true,
    },
    {
      id: 7,
      img: "assets/images/thumbs/about-image1.png",
      name: "Tes Kepribadian Online",
      price: "Rp 200.000",
      checked: true,
    },
  ];

  // 2. Buat state untuk item keranjang
  const [cartItems, setCartItems] = useState(initialCartItems);

  // 3. Buat fungsi untuk menangani perubahan checkbox
  const handleCheckboxChange = (id) => {
    // Cari item yang diklik, lalu ubah status 'checked'-nya
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="py-30 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="border border-neutral-30 rounded-12 bg-white p-32">
              <h4 className="mb-0">Keranjang</h4>
              <span className="d-block border border-neutral-30 my-24 border-dashed" />

              {/* LIST ITEM */}
              <div className="d-flex flex-column gap-20">
                {/* 4. Gunakan state 'cartItems' untuk me-render list */}
                {cartItems.map((item) => (
                  <div
                    key={item.id} // Gunakan item.id sebagai key
                    className="border border-neutral-30 bg-white rounded-12 p-20 d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap gap-16 shadow-sm hover-shadow-lg transition-3"
                  >
                    {/* KIRI: CHECKBOX + GAMBAR + TEKS */}
                    <div className="d-flex align-items-center gap-16 flex-grow-1">
                      {/* === 5. CHECKBOX DITAMBAHKAN DI SINI === */}
                      <input
                        type="checkbox"
                        className="form-check-input" // Kelas dari Bootstrap
                        style={{
                          minWidth: "20px",
                          height: "20px",
                          cursor: "pointer",
                        }}
                        checked={item.checked} // Hubungkan ke state
                        onChange={() => handleCheckboxChange(item.id)} // Hubungkan ke handler
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

                    {/* KANAN: TOMBOL HAPUS */}
                    <button
                      className="delete-btn text-lg hover-text-main-600 transition-2"
                      style={{
                        border: "none",
                        background: "transparent",
                      }}
                    >
                      <i className="ph ph-trash text-xl"></i>
                    </button>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="d-flex justify-content-between align-items-center mt-32 flex-wrap gap-12">
                <Link
                  to="/courses"
                  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold"
                >
                  <i className="ph ph-arrow-left" />
                  Lanjut Assessment
                </Link>
              </div>
            </div>
          </div>

          {/* Sisi kanan (Total Harga) tidak saya ubah */}
          <div className="col-lg-4">
            <div
              className="border border-neutral-30 rounded-12 bg-white p-24 bg-white"
              style={{ position: "sticky", top: "20px" }} // Tetap gunakan sticky
            >
              <span className="text-neutral-700 text-lg mb-12">
                Total Harga
              </span>
              <div className="flex-align align-items-start flex-wrap gap-8">
                <div className="flex-align gap-12 text-neutral-700">
                  <span className="text-2xl d-flex">
                    <i className="ph-bold ph-tag" />
                  </span>

                  <h2 className="mb-0">Rp 500.000</h2>
                </div>
                <button
                  type="button"
                  className="text-neutral-500 text-sm"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Initial Price"
                >
                  <i className="ph-bold ph-info" />
                </button>
              </div>
              <span className="d-block border border-neutral-30 my-24 border-dashed" />
              <div className="d-flex flex-column gap-24">
                <div className="d-flex align-items-center justify-content-between gap-4">
                  <span className="text-neutral-500">Harga Sekarang</span>
                  <span className="text-neutral-700 fw-medium">Rp 500.000</span>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-4">
                  <span className="text-neutral-500">Pajak</span>
                  <span className="text-neutral-700 fw-medium">Rp 5.000</span>
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
              <span className="d-block border border-neutral-30 mt-24 border-dashed" />
              <Link
                to="/checkout"
                className="btn btn-main rounded-pill w-100 mt-40"
              >
                Bayar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInner;
