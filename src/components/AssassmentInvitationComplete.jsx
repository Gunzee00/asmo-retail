// AssassmentScheduleOngoing.jsx
const AssassmentInvitationComplete = () => {
  return (
    <div
      className="card p-4 h-100 position-relative"
      style={{ minHeight: "260px" }}
    >
      <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
        <p className="text-muted small mb-0">
          Tidak ada jadwal tes yang tersedia saat ini.
        </p>
      </div>
    </div>
  );
};

export default AssassmentInvitationComplete;
