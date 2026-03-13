// ── REVIEW CARD ────────────────────────────────────────────────────────────
const ReviewCard = ({ review, onAdd, w = 260 }) => (
  <div style={{ width: w, flexShrink: 0, background: "white", borderRadius: 12, overflow: "hidden", border: "1px solid #f0f0f0" }}>
    <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>👤</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#333" }}>{review.username}</div>
        <div style={{ fontSize: 10, color: "#888" }}>{review.date}</div>
      </div>
    </div>
    <div style={{ padding: "0 14px 10px", fontSize: 12, color: "#555", lineHeight: 1.5, height: 54, overflow: "hidden" }}>{review.text}</div>
    <div style={{ width: "100%", height: w * 0.6, background: "#f8f8f8" }}>
      <img src={review.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
    <div style={{ padding: 10, display: "flex", alignItems: "center", gap: 8, borderTop: "1px solid #f0f0f0" }}>
      <img src={review.productImg} alt="" style={{ width: 40, height: 40, borderRadius: 6, objectFit: "cover" }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "#333", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{review.productName}</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#E31937" }}>${review.productPrice.toFixed(2)}</div>
      </div>
      <button onClick={() => onAdd && onAdd(review.id)} style={{ width: 26, height: 26, borderRadius: "50%", background: "#f3f4f6", border: "none", cursor: "pointer", fontSize: 14 }}>+</button>
    </div>
  </div>
);


