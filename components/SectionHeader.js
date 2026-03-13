// ── SECTION HEADER ─────────────────────────────────────────────────────────
const SectionHeader = ({ title, sub, cta }) => (
  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
    <div>
      <h2 style={{ fontWeight: 800, fontSize: 20, color: "#0a0a0a", letterSpacing: "-0.3px" }}>{title}</h2>
      {sub && <div style={{ fontSize: 13, color: "#777", marginTop: 4 }}>{sub}</div>}
    </div>
    {cta && <button style={{ background: "none", border: "none", color: "#C41230", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>{cta} <span style={{ fontSize: 15 }}>›</span></button>}
  </div>
);


