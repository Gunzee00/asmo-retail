import { useState } from "react";

const AssassmentSchedule = () => {
  const [showModal, setShowModal] = useState(false);
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const updated = [...codes];
      updated[index] = value;
      setCodes(updated);

      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = () => {
    const finalCode = codes.join("");
    if (finalCode.length === 6) {
      alert("Kode: " + finalCode);
      setShowModal(false);
      setCodes(["", "", "", "", "", ""]);
    }
  };

  return (
    <div className="container py-4">
      {/* CARD HEADER + BUTTON */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
            <p className="mb-0">
              Selamat datang kembali, <strong>Gunawan Sinaga</strong>. Berikut
              ringkasan tes asesmen undangan Anda.
            </p>

            <button
              className="btn btn-primary d-flex align-items-center gap-2"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-calendar-plus"></i>
              Tambahkan Tes
            </button>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row g-3">
        <div className="col-md-6 ">
          <div
            className="card p-3 h-100 d-flex align-items-center justify-content-center"
            style={{ minHeight: "260px" }}
          >
            <div className="row g-3 w-100" style={{ minHeight: "220px" }}>
              <div className="col-6">
                
                <div className="card h-100 text-center p-3 d-flex flex-column justify-content-center">
                  <div className="mb-3">📆</div>
                  <h3 className="mb-1">0</h3>
                  <p className="mb-0 small">Tes Berakhir</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card h-100 text-center p-3 d-flex flex-column justify-content-center">
                  <div className="mb-3">⏳</div>
                  <h3 className="mb-1">0</h3>
                  <p className="mb-0 small">Tes Berlangsung</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HISTORI */}
        <div className="col-md-6">
          <div className="card p-4 h-100 position-relative">
            <h5 className="text-center fw-bold mb-4">Histori Tes Asesmen</h5>
            <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
              <p className="text-muted small">Tidak ada jadwal tes saat ini.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MODAL TAMBAH TES ===== */}
      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4">
                <h5 className="mb-2 text-center fw-bold">
                  Tambahkan Tes Assessment
                </h5>
                <p className="text-center mb-4">
                  Masukkan kode 6 digit yang telah diberikan untuk mengakses tes
                  baru.
                </p>

                <div className="d-flex justify-content-center gap-2 mb-4">
                  {codes.map((val, i) => (
                    <input
                      key={i}
                      id={`code-${i}`}
                      type="text"
                      className="form-control text-center"
                      style={{ width: "45px", fontSize: "20px" }}
                      maxLength={1}
                      value={val}
                      onChange={(e) => handleChange(e.target.value, i)}
                    />
                  ))}
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-primary w-50"
                    onClick={handleSubmit}
                  >
                    Lanjutkan
                  </button>
                  <button
                    className="btn btn-secondary w-50"
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
};

export default AssassmentSchedule;
