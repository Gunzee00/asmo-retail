"use client";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  return (
    <div className="py-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25">
              <h4 className="mb-0">Keranjang</h4>
              <span className="d-block border border-neutral-30 my-24 border-dashed" />
              <div className="table-responsive overflow-x-auto">
                <table className="table min-w-max vertical-middle mb-0">
                  <thead>
                    <tr>
                      <th className="text-neutral-500 fw-semibold px-24 py-20 border-0">
                        Assessment
                      </th>
                      <th className="text-neutral-500 fw-semibold px-24 py-20 border-0">
                        Harga
                      </th>
                      <th className="text-neutral-500 fw-semibold px-24 py-20 border-0" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20"
                        style={{
                          whiteSpace: "normal", // biar teks bisa turun ke bawah
                          wordBreak: "break-word", // pecah kata panjang
                          maxWidth: "200px", // batas lebar kolom
                        }}
                      >
                        <div className="d-flex flex-column align-items-start text-start">
                          <div className="border border-neutral-40 rounded-8 bg-white p-12 mb-12">
                            <img
                              src="/assets/images/logo/nav-logo.png"
                              alt=""
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <h6 className="mb-0">
                            Tes Assassment Psikometrik Lengkap
                          </h6>
                        </div>
                      </td>

                      <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                        Rp 250.000
                      </td>

                      <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                        <button className="delete-btn text-lg hover-text-main-600 transition-2">
                          <i className="ph ph-trash" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20"
                        style={{
                          whiteSpace: "normal", // biar teks bisa turun ke bawah
                          wordBreak: "break-word", // pecah kata panjang
                          maxWidth: "200px", // batas lebar kolom
                        }}
                      >
                        <div className="d-flex flex-column align-items-start text-start">
                          <div className="border border-neutral-40 rounded-8 bg-white p-12 mb-12">
                            <img
                              src="assets/images/thumbs/image2.png"
                              alt=""
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <h6 className="mb-0">
                            Tes Assassment Psikometrik Lengkap
                          </h6>
                        </div>
                      </td>

                      <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                        Rp 250.000
                      </td>

                      <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                        <button className="delete-btn text-lg hover-text-main-600 transition-2">
                          <i className="ph ph-trash" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20"
                        style={{
                          whiteSpace: "normal", // biar teks bisa turun ke bawah
                          wordBreak: "break-word", // pecah kata panjang
                          maxWidth: "200px", // batas lebar kolom
                        }}
                      >
                        <div className="d-flex flex-column align-items-start text-start">
                          <div className="border border-neutral-40 rounded-8 bg-white p-12 mb-12">
                            <img
                              src="assets/images/thumbs/about-image1.png"
                              alt=""
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <h6 className="mb-0">
                            Tes Assassment Psikometrik Lengkap
                          </h6>
                        </div>
                      </td>

                      <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                        Rp 250.000
                      </td>

                      <td className="border-bottom border-dashed border-neutral-40 text-neutral-500 bg-transparent px-24 py-20">
                        <button className="delete-btn text-lg hover-text-main-600 transition-2">
                          <i className="ph ph-trash" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to="/courses"
                  className="flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold mt-24"
                  tabIndex={0}
                >
                  <i className="ph ph-arrow-left" />
                  Lanjut Assassment
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25">
              <span className="text-neutral-700 text-lg mb-12">
                Total Harga
              </span>
              <div className="flex-align align-items-start flex-wrap gap-8">
                <div className="flex-align gap-12 text-neutral-700">
                  <span className="text-2xl d-flex">
                    <i className="ph-bold ph-tag" />
                  </span>
                  {/* <span className=""></span> */}
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
                {/* <div className="d-flex align-items-center justify-content-between gap-4">
                  <span className="text-neutral-500">Shipping</span>
                  <span className="text-neutral-700 fw-medium">Free</span>
                </div> */}
              </div>
              <span className="d-block border border-neutral-30 my-24 border-dashed" />
              <form action="#" className="my-24 position-relative">
                <input
                  type="email"
                  className="form-control bg-white shadow-none border border-neutral-30 rounded-pill h-48 ps-24 pe-44 focus-border-main-600"
                  placeholder="DISCOUNT9"
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
