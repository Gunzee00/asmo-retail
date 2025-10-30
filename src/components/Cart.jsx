 import React from "react";

const Cart = () => {
  // contoh data dummy cart
  const cartItems = [
    {
      id: 1,
      name: "Nama Produk A",
      price: 120000,
      qty: 2,
      img: "/assets/images/thumbs/image2.png",
    },
    {
      id: 2,
      name: "Nama Produk B",
      price: 75000,
      qty: 1,
       img: "/assets/images/thumbs/image2.png",
    },
  ];

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container py-5">
      <h3 className="mb-4">Keranjang Belanja</h3>

      <div className="row">
        <div className="col-lg-8">
          <div className="list-group">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded me-3"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-1">{item.name}</h6>
                    <small className="text-muted">{formatRupiah(item.price)}</small>
                  </div>
                </div>

                <span className="fw-semibold">x {item.qty}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="border p-3 rounded shadow-sm">
            <h5 className="mb-3">Ringkasan Belanja</h5>
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <strong>{formatRupiah(total)}</strong>
            </div>
            <button className="btn btn-primary w-100 mt-3">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
