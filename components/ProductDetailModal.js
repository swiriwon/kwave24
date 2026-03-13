// ── PRODUCT DETAIL MODAL ─────────────────────────────────────────────────────
const ProductDetailModal = ({ product, onClose, cart, onAdd, onRemove, allProducts }) => {
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef(null);
  
  const similarProducts = allProducts.filter(p => p.id !== product.id).slice(0, 4);
  const itemsToAddNext = allProducts.filter(p => p.id !== product.id).slice(4, 10);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEsc = (e) => { 
      if (e.key === "Escape") {
        if (isZoomed) setIsZoomed(false);
        else onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose, isZoomed]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const AccordionSection = ({ title, children, id }) => (
    <div style={{ borderBottom:"1px solid #f0f0f0" }}>
      <div 
        onClick={() => toggleSection(id)}
        style={{ padding:"14px 0", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between", fontWeight:600, fontSize:14, color:"#1a1a1a" }}
      >
        {title}
        <span style={{ fontSize:11, color:"#888", transition:"transform 0.2s", transform: expandedSection === id ? "rotate(180deg)" : "rotate(0)" }}>&#9660;</span>
      </div>
      {expandedSection === id && (
        <div style={{ paddingBottom:16, fontSize:13, lineHeight:1.7, color:"#444" }}>{children}</div>
      )}
    </div>
  );

  const ZoomView = () => (
    <div 
      onClick={() => setIsZoomed(false)}
      style={{ position:"absolute", inset:0, zIndex:20, background:"white", display:"flex", flexDirection:"column", cursor:"zoom-out", animation:"fadeIn 0.2s ease-out" }}
    >
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 24px", borderBottom:"1px solid #f0f0f0" }}>
        <button onClick={() => setIsZoomed(false)} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontSize:14, fontWeight:600, color:"#333" }}>&larr; Back to product</button>
        <div style={{ fontSize:14, fontWeight:600, color:"#333" }}>{product.name}</div>
        <button onClick={() => setIsZoomed(false)} style={{ background:"#f5f5f5", border:"none", borderRadius:8, width:36, height:36, cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center" }}>&times;</button>
      </div>
      <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:40, background:"#fafafa" }}>
        <img src={product.img} alt={product.name} style={{ maxWidth:"100%", maxHeight:"calc(100vh - 200px)", objectFit:"contain", borderRadius:12, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
      </div>
      <div style={{ padding:"12px 24px", borderTop:"1px solid #f0f0f0", textAlign:"center", fontSize:12, color:"#888" }}>Click anywhere or press ESC to close</div>
    </div>
  );

  return (
    <>
      <div onClick={handleBackdropClick} style={{ position:"fixed", inset:0, zIndex:1000, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"flex-start", justifyContent:"center", padding:"40px 20px", overflowY:"auto", fontFamily:"'Noto Sans KR',sans-serif" }}>
        <div ref={modalRef} style={{ background:"white", borderRadius:16, width:"100%", maxWidth:1000, maxHeight:"calc(100vh - 80px)", overflowY:"auto", boxShadow:"0 25px 50px -12px rgba(0,0,0,0.25)", position:"relative" }}>
          {isZoomed && <ZoomView />}
          {/* Sticky Header */}
          <div style={{ position:"sticky", top:0, zIndex:10, background:"white", borderBottom:"1px solid #f0f0f0", borderRadius:"16px 16px 0 0", padding:"16px 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <button onClick={onClose} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontSize:14, fontWeight:600, color:"#333", padding:"8px 0" }}>&larr; Back</button>
            <div style={{ display:"flex", gap:10 }}>
              <button style={{ background:"#C41230", color:"white", border:"none", borderRadius:20, padding:"8px 18px", fontSize:13, fontWeight:600, cursor:"pointer" }}>Delivery</button>
              <button style={{ background:"white", border:"1px solid #ddd", borderRadius:20, padding:"8px 18px", fontSize:13, fontWeight:500, cursor:"pointer", color:"#666" }}>Pickup</button>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding:"24px 32px 32px" }}>
            {/* TOP: Image | Product Info */}
            <div style={{ display:"grid", gridTemplateColumns:"400px 1fr", gap:40, marginBottom:24 }}>
              <div>
                <div onClick={() => setIsZoomed(true)} style={{ position:"relative", background:"#f5f5f5", borderRadius:12, overflow:"hidden", aspectRatio:"1", display:"flex", alignItems:"center", justifyContent:"center", cursor:"zoom-in" }}>
                  {!imgLoaded && <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)", backgroundSize:"200% 100%", animation:"shimmer 1.5s infinite" }} />}
                  <img src={product.img} alt={product.name} onLoad={() => setImgLoaded(true)} style={{ width:"75%", height:"75%", objectFit:"contain", opacity: imgLoaded ? 1 : 0, transition:"opacity 0.3s" }} />
                  <button onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }} style={{ position:"absolute", bottom:12, right:12, background:"white", border:"none", borderRadius:6, padding:"6px 8px", cursor:"pointer", boxShadow:"0 2px 6px rgba(0,0,0,0.1)", fontSize:14 }}>&#128269;</button>
                </div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                <div>
                  <h1 style={{ fontSize:24, fontWeight:800, color:"#1a1a1a", lineHeight:1.3, marginBottom:6 }}>{product.name}</h1>
                  <p style={{ fontSize:14, color:"#666", marginBottom:12 }}>{product.size}</p>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
                    <p style={{ fontSize:14, color:"#C41230", cursor:"pointer", fontWeight:500, margin:0 }}>Shop all {product.name.split(" ")[0]}</p>
                    <div style={{ display:"flex", gap:20 }}>
                      <span style={{ display:"flex", alignItems:"center", gap:5, fontSize:13, fontWeight:600, color:"#555", cursor:"pointer" }}>&#128278; Save</span>
                      <span style={{ display:"flex", alignItems:"center", gap:5, fontSize:13, fontWeight:600, color:"#555", cursor:"pointer" }}>&#128203; Add to List</span>
                    </div>
                  </div>
                  {product.badge && (
                    <div style={{ display:"flex", flexWrap:"wrap", gap:16, fontSize:12, color:"#666", padding:"12px 0", borderTop:"1px solid #f0f0f0" }}>
                      <span>&bull; {product.badge}</span>
                    </div>
                  )}
                </div>
                <div style={{ background:"#fafafa", borderRadius:16, padding:"20px 24px" }}>
                  <div style={{ fontSize:28, fontWeight:800, marginBottom:16 }}>
                    ${product.price.toFixed(2)}
                    {product.original && <span style={{ fontSize:14, color:"#888", textDecoration:"line-through", marginLeft:10, fontWeight:500 }}>${product.original.toFixed(2)}</span>}
                    {product.off && <span style={{ fontSize:12, background:"#ffecec", color:"#d63031", fontWeight:800, borderRadius:6, padding:"3px 7px", marginLeft:10 }}>{product.off}</span>}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <select value={quantity} onChange={e => setQuantity(Number(e.target.value))} style={{ padding:"14px 40px 14px 16px", borderRadius:12, border:"1.5px solid #ddd", fontSize:15, fontWeight:600, cursor:"pointer", appearance:"none", background:"white", flexShrink:0 }}>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                    <button 
                      onClick={() => { for(let i=0; i<quantity; i++) onAdd(product.id); onClose(); }}
                      style={{ flex:1, background:"linear-gradient(135deg, #E31937 0%, #B01030 100%)", color:"white", border:"none", borderRadius:28, padding:"14px 24px", fontSize:15, fontWeight:700, cursor:"pointer", boxShadow:"0 4px 14px rgba(200,20,48,0.3)", transition:"transform 0.15s, box-shadow 0.15s" }}
                      onMouseEnter={e => { e.target.style.transform="translateY(-1px)"; e.target.style.boxShadow="0 6px 18px rgba(200,20,48,0.35)"; }}
                      onMouseLeave={e => { e.target.style.transform=""; e.target.style.boxShadow="0 4px 14px rgba(200,20,48,0.3)"; }}
                    >Add to cart</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordions + Product Info */}
            <div style={{ display:"grid", gridTemplateColumns:"400px 1fr", gap:40, marginBottom:40 }}>
              <div>
                <AccordionSection title="Details" id="details">
                  <p>Enjoy premium quality Korean products. Carefully selected and sourced from top Korean brands for authentic taste and quality.</p>
                </AccordionSection>
                <AccordionSection title="Ingredients" id="ingredients">
                  <p>Please refer to product packaging for detailed ingredient information.</p>
                </AccordionSection>
                <AccordionSection title="Directions" id="directions">
                  <p>Follow instructions on product packaging for best results. Store in a cool, dry place.</p>
                </AccordionSection>
              </div>
              <div>
                <div style={{ background:"#fafafa", borderRadius:16, padding:"24px 28px" }}>
                  <h3 style={{ fontSize:16, fontWeight:800, marginBottom:12, color:"#1a1a1a" }}>Product Information</h3>
                  <div style={{ fontSize:13, lineHeight:2, color:"#444" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", borderBottom:"1px solid #eee", padding:"3px 0" }}><span style={{ fontWeight:600 }}>Brand</span><span>{product.name.split(" ")[0]}</span></div>
                    <div style={{ display:"flex", justifyContent:"space-between", borderBottom:"1px solid #eee", padding:"3px 0" }}><span style={{ fontWeight:600 }}>Size</span><span>{product.size}</span></div>
                    <div style={{ display:"flex", justifyContent:"space-between", borderBottom:"1px solid #eee", padding:"3px 0" }}><span style={{ fontWeight:600 }}>Price</span><span>${product.price.toFixed(2)}</span></div>
                    {product.off && <div style={{ display:"flex", justifyContent:"space-between", borderBottom:"1px solid #eee", padding:"3px 0" }}><span style={{ fontWeight:600 }}>Discount</span><span style={{ color:"#C41230", fontWeight:700 }}>{product.off}</span></div>}
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Products */}
            <section style={{ marginBottom:36 }}>
              <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Customers also considered</h2>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:12 }}>
                {similarProducts.map(p => (
                  <div key={p.id} style={{ background:"white", borderRadius:12, overflow:"hidden", cursor:"pointer", border:"1px solid #f0f0f0", transition:"box-shadow 0.15s, transform 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}
                  >
                    <div style={{ aspectRatio:"1", position:"relative", overflow:"hidden" }}>
                      <img src={p.img} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                      <div style={{ position:"absolute", top:8, right:8 }}><AddBtn id={p.id} cart={cart} onAdd={onAdd} onRemove={onRemove} small /></div>
                    </div>
                    <div style={{ padding:"12px 14px" }}>
                      <div style={{ fontSize:16, fontWeight:800, marginBottom:4 }}>${p.price.toFixed(2)}</div>
                      <div style={{ fontSize:13, fontWeight:600, color:"#1a1a1a", marginBottom:3, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{p.name}</div>
                      <div style={{ fontSize:11, color:"#888" }}>{p.size}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Items to add next */}
            <section style={{ marginBottom:36 }}>
              <h2 style={{ fontSize:18, fontWeight:800, marginBottom:16 }}>Items to add next</h2>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(6, 1fr)", gap:10 }}>
                {itemsToAddNext.map(p => (
                  <div key={p.id} style={{ background:"white", borderRadius:12, overflow:"hidden", cursor:"pointer", border:"1px solid #f0f0f0", transition:"box-shadow 0.15s, transform 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}
                  >
                    <div style={{ aspectRatio:"1", position:"relative", overflow:"hidden" }}>
                      <img src={p.img} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                      <div style={{ position:"absolute", top:6, right:6 }}><AddBtn id={p.id} cart={cart} onAdd={onAdd} onRemove={onRemove} small /></div>
                    </div>
                    <div style={{ padding:"10px 12px" }}>
                      <div style={{ fontSize:14, fontWeight:800, marginBottom:3 }}>${p.price.toFixed(2)}</div>
                      <div style={{ fontSize:11, fontWeight:600, color:"#1a1a1a", marginBottom:2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{p.name}</div>
                      <div style={{ fontSize:10, color:"#888" }}>{p.size}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <div style={{ padding:20, background:"#f5f5f5", borderRadius:12, fontSize:12, color:"#666", lineHeight:1.6 }}>
              <p>Product information or packaging displayed may not be current or complete. Always refer to the physical product for the most accurate information. <a href="#" style={{ color:"#C41230", fontWeight:600 }}>Learn more</a></p>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        `}</style>
      </div>
    </>
  );
};


