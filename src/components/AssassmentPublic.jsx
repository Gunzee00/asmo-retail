const AssassmentPublic = () => {
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
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row g-3">
        {/* KIRI — CARD KUMULATIF */}
        <div className="col-md-6 ">
          <div
            className="card p-3 h-100 d-flex align-items-center justify-content-center"
            style={{ minHeight: "260px" }}
          >
            <div className="row g-3 w-100 " style={{ minHeight: "220px" }}>
              <div className="col-6">
                <div className="card h-100 text-center p-3">
                  <div className="mb-3">📆</div>
                  <h3 className="mb-1">0</h3>
                  <p className="mb-0 small">Tes Berakhir</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card h-100 text-center p-3">
                  <div className="mb-3">⏳</div>
                  <h3 className="mb-1">0</h3>
                  <p className="mb-0 small">Tes Berlangsung</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN — HISTORI TES */}
        <div className="col-md-6">
          <div className="card p-4 h-100 position-relative">
            <h5 className="text-center fw-bold mb-4">Histori Tes Asesmen</h5>
            <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
              <p className="text-muted small">Tidak ada jadwal tes saat ini.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssassmentPublic;
