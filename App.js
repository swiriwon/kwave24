// ── MAIN APP ───────────────────────────────────────────────────────────────
function App() {
  const [cart, setCart] = useState({ 5: 1, 6: 1, 7: 1 });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [navActive, setNavActive] = useState("New Arrivals");
  const [showMore, setShowMore] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [freshlyMadeTab, setFreshlyMadeTab] = useState("gourmet");
  const [topChartsTab, setTopChartsTab] = useState("selling");
  const rootRef = useRef(null);
  const cartBtnRef = useRef(null);
  const winW = useContainerWidth(rootRef);

  // ── fluid breakpoints (all derived from container width) ──
  const isMobile  = winW > 0 && winW < 600;
  const isTablet  = winW > 0 && winW < 920;
  const sideW     = isMobile ? 0 : isTablet ? 64 : 220;
  const contentW  = winW - sideW;
  const rightPad  = isMobile ? 20 : Math.round(Math.min(64, contentW * 0.045));
  const leftPad   = isMobile ? 20 : Math.round(Math.min(56, contentW * 0.04));

  // ── flyer row: card count based on window width breakpoints ───
  const visibleArea = contentW - leftPad - rightPad;
  const flyerGap  = 16;
  const N_flyer   = isMobile ? 2 : isTablet ? 4 : 
                    winW > 1920 ? 10 :
                    winW > 1700 ? 9 :
                    winW > 1500 ? 8 :
                    winW > 1300 ? 7 :
                    winW > 1100 ? 5 :
                    winW > 1000 ? 4 : 4;
  const flyerW    = Math.round((visibleArea - flyerGap * (N_flyer - 1)) / N_flyer);
  const visibleFlyerCount = N_flyer;
  
  const add = (id) => setCart((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
  const remove = (id) => setCart((p) => { const n = { ...p }; if (n[id] <= 1) delete n[id]; else n[id]--; return n; });
  
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = ALL_PRODUCTS.find(p => p.id === parseInt(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  const flyerStoreProducts = FLYER_STORES.flatMap(s => s.products);
  const allProductsForModal = [...ALL_PRODUCTS, ...flyerStoreProducts];

  const openProduct = (product) => setSelectedProduct(product);
  const closeProduct = () => setSelectedProduct(null);
  
  const NAV_ITEMS = [
    { icon: Icons.Sparkle, label: "New Arrivals" },
    { icon: Icons.Utensils, label: "Food" },
    { icon: Icons.Beauty, label: "Beauty" },
    { icon: Icons.Home, label: "Home" },
    { icon: Icons.Monitor, label: "Electronics" },
    { icon: Icons.ChefHat, label: "Kitchen & Dining" },
    { icon: Icons.Shirt, label: "Fashion" },
    { icon: Icons.Dumbbell, label: "Wellness & Sports" },
  ];
  
  const NAV_MORE = [
    { icon: Icons.Baby, label: "Baby & Kids" },
    { icon: Icons.Music, label: "K-POP" },
    { icon: Icons.Drama, label: "K-Culture" },
    { icon: Icons.Pencil, label: "Office Supplies" },
    { icon: Icons.Pets, label: "Pets" },
  ];
  
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { overflow-y: scroll; }
        body { font-family: 'Noto Sans KR', sans-serif; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d8d8d8; border-radius: 4px; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        button:focus { outline: none; }
        button, input { font-family: inherit; }
      `}</style>
      
      <div ref={rootRef} style={{ display: "flex", minHeight: "100vh", background: "white" }}>
        
        {/* ── LEFT SIDEBAR ── */}
        <aside style={{ width: 220, minWidth: 220, background: "white", borderRight: "1px solid #efefef", position: "sticky", top: 0, height: "100vh", overflowY: "auto", flexShrink: 0, display: "flex", flexDirection: "column", paddingLeft: 16 }}>
          <div style={{ padding: "22px 18px 18px", borderBottom: "1px solid #f5f5f5", display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setAccountOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#333" }}><Icons.Menu size={22} sw={2.2} /></button>
            <img src={LOGO_IMG} alt="KWAVE24" style={{ height: 32, objectFit: "contain" }} />
          </div>
          
          <nav style={{ padding: "14px 12px", flex: 1 }}>
            {NAV_ITEMS.map(({ icon: IconComp, label }) => {
              const active = navActive === label;
              return (
                <div key={label} onClick={() => setNavActive(label)} style={{ padding: "11px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, borderRadius: 10, margin: "2px 0", fontWeight: active ? 700 : 500, fontSize: 14.5, color: active ? "#003d2b" : "#444", background: active ? "#eef9f3" : "transparent", transition: "all 0.15s" }}>
                  <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}><IconComp size={20} sw={active ? 2.4 : 2} /></span>{label}
                </div>
              );
            })}
            {showMore && NAV_MORE.map(({ icon: IconComp, label }) => {
              const active = navActive === label;
              return (
                <div key={label} onClick={() => setNavActive(label)} style={{ padding: "11px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, borderRadius: 10, margin: "2px 0", fontWeight: active ? 700 : 500, fontSize: 14.5, color: active ? "#003d2b" : "#444", background: active ? "#eef9f3" : "transparent", transition: "all 0.15s" }}>
                  <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}><IconComp size={20} sw={active ? 2.4 : 2} /></span>{label}
                </div>
              );
            })}
            <div onClick={() => setShowMore(!showMore)} style={{ padding: "11px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, borderRadius: 10, margin: "2px 0", fontWeight: 500, fontSize: 14.5, color: "#444" }}>
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center", transform: showMore ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}><Icons.ChevronDown size={20} sw={2} /></span>{showMore ? "Show less" : "Show more"}
            </div>
          </nav>
          
          <div style={{ height: 1, background: "#f0f0f0", margin: "0 16px" }} />
          <div style={{ padding: "14px 12px 20px" }}>
            <div style={{ padding: "6px 16px 8px", fontSize: 10, color: "#bbb", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase" }}>You</div>
            {[{ icon: Icons.Newspaper, label: "Flyers", badge: "New" }, { icon: Icons.User, label: "Account" }].map(({ icon: IconComp, label, badge }) => {
              const isActive = navActive === label;
              return (
                <div key={label} onClick={() => label === "Account" ? setAccountOpen(true) : setNavActive(label)} style={{ padding: "11px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, fontSize: 14.5, color: isActive ? "#003d2b" : "#444", borderRadius: 10, margin: "2px 0", fontWeight: isActive ? 700 : 500, background: isActive ? "#eef9f3" : "transparent", transition: "all 0.15s" }}>
                  <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}><IconComp size={20} sw={isActive ? 2.4 : 2} /></span>{label}
                  {badge && !isActive && <span style={{ marginLeft: "auto", background: "linear-gradient(135deg, #C41230 0%, #8B0D25 100%)", color: "white", borderRadius: 20, fontSize: 9, fontWeight: 800, padding: "3px 9px" }}>{badge}</span>}
                </div>
              );
            })}
          </div>
        </aside>
        
        {/* ── MAIN CONTENT ── */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <header style={{ background: "white", borderBottom: "1px solid #f0f0f0", padding: "12px 32px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 50 }}>
            <div style={{ flex: 1, position: "relative" }}>
              <svg style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)} placeholder="Search products, stores, and recipes" style={{ width: "100%", padding: "11px 14px 11px 40px", border: `2px solid ${searchFocus ? "#003d2b" : "#ebebeb"}`, borderRadius: 12, fontSize: 13.5, outline: "none", background: searchFocus ? "white" : "#f7f7f7", transition: "border-color 0.15s, background 0.15s" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12.5, color: "#333", cursor: "pointer", whiteSpace: "nowrap", padding: "8px 10px", borderRadius: 8, border: "1.5px solid #ebebeb" }}>
              <Icons.MapPin size={14} sw={2.2} /><span style={{ fontWeight: 500 }}>150 Grant Ave</span><span style={{ fontSize: 10, color: "#aaa", marginLeft: 1 }}>▼</span>
            </div>
            <div style={{ position: "relative" }} ref={cartBtnRef}>
              <button onClick={() => setCartOpen(true)} style={{ background: cartCount > 0 ? "#003d2b" : "#f7f7f7", color: cartCount > 0 ? "white" : "#555", border: "none", borderRadius: 10, padding: cartCount > 0 ? "9px 16px" : "9px 14px", cursor: "pointer", fontWeight: 700, fontSize: 13.5, display: "flex", alignItems: "center", gap: 6 }}>
                <Icons.ShoppingCart size={18} sw={2.5} />{cartCount > 0 ? <span style={{ fontWeight: 800 }}>{cartCount} item{cartCount > 1 ? "s" : ""}</span> : <span style={{ fontSize: 12 }}>Cart</span>}
              </button>
            </div>
          </header>
          
          <div style={{ flex: 1, padding: `20px ${rightPad}px 100px ${leftPad}px`, overflowY: "auto", background: "white" }}>
            {navActive !== "Flyers" && (<>
            {/* Hero App Banner - Weee! Style */}
            <section style={{ marginBottom: 24 }}>
              <div style={{ 
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "32px 0",
                borderBottom: "1px solid #e5e5e5"
              }}>
                {/* Left - Tagline */}
                <div style={{ flex: "0 0 auto" }}>
                  <h1 style={{ 
                    color: "#1a365d", 
                    fontSize: 36, 
                    fontWeight: 800, 
                    margin: 0, 
                    lineHeight: 1.25,
                    fontStyle: "italic"
                  }}>
                    America's largest<br/>
                    Korean online market
                  </h1>
                </div>
                
                {/* Center - Delivery Van + Products */}
                <div style={{ flex: "0 0 auto", position: "relative", display: "flex", alignItems: "flex-end", gap: 0 }}>
                  {/* Delivery Van */}
                  <div style={{ position: "relative" }}>
                    <svg width="280" height="120" viewBox="0 0 280 120">
                      {/* Van body */}
                      <rect x="60" y="30" width="200" height="70" rx="8" fill="white" stroke="#e5e5e5" strokeWidth="2"/>
                      {/* Van front */}
                      <path d="M60 50 L20 50 Q10 50 10 60 L10 90 Q10 100 20 100 L60 100" fill="white" stroke="#e5e5e5" strokeWidth="2"/>
                      {/* Window */}
                      <rect x="18" y="55" width="35" height="25" rx="4" fill="#87CEEB"/>
                      {/* Wheels */}
                      <circle cx="50" cy="100" r="14" fill="#333"/>
                      <circle cx="50" cy="100" r="6" fill="#666"/>
                      <circle cx="220" cy="100" r="14" fill="#333"/>
                      <circle cx="220" cy="100" r="6" fill="#666"/>
                      {/* Door line */}
                      <line x1="180" y1="35" x2="180" y2="95" stroke="#e5e5e5" strokeWidth="1"/>
                    </svg>
                    {/* KWAVE24 Logo on van */}
                    <div style={{ 
                      position: "absolute", 
                      top: 50, 
                      left: 100, 
                      display: "flex", 
                      alignItems: "center" 
                    }}>
                      <img src={LOGO_IMG} alt="KWAVE24" style={{ height: 32, objectFit: "contain" }} />
                    </div>
                  </div>
                  
                  {/* Product Box */}
                  <div style={{ 
                    position: "relative", 
                    marginLeft: -30,
                    marginBottom: 10
                  }}>
                    <svg width="90" height="80" viewBox="0 0 90 80">
                      {/* Box */}
                      <path d="M10 25 L45 10 L80 25 L80 70 L45 80 L10 70 Z" fill="#D2691E"/>
                      <path d="M10 25 L45 40 L45 80 L10 70 Z" fill="#CD853F"/>
                      <path d="M45 40 L80 25 L80 70 L45 80 Z" fill="#8B4513"/>
                      <path d="M10 25 L45 10 L80 25 L45 40 Z" fill="#DEB887"/>
                      {/* KWAVE24 label on box */}
                      <rect x="20" y="45" width="35" height="12" rx="2" fill="#C41230"/>
                      <text x="37" y="54" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">KWAVE24</text>
                    </svg>
                    {/* Products popping out */}
                    <div style={{ position: "absolute", top: -20, left: 15, fontSize: 28 }}>🧴</div>
                    <div style={{ position: "absolute", top: -15, left: 40, fontSize: 24 }}>💄</div>
                    <div style={{ position: "absolute", top: -10, right: 10, fontSize: 22 }}>🎀</div>
                  </div>
                </div>
                
                {/* Right - QR Code */}
                <div style={{ 
                  flex: "0 0 auto", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 16,
                  background: "white",
                  padding: "16px 20px",
                  borderRadius: 16,
                  border: "1px solid #e5e5e5"
                }}>
                  {/* Fake QR Code */}
                  <div style={{ 
                    width: 80, 
                    height: 80, 
                    background: "white",
                    padding: 4,
                    border: "2px solid #333",
                    borderRadius: 8,
                    position: "relative"
                  }}>
                    <svg width="72" height="72" viewBox="0 0 72 72">
                      {/* Corner squares */}
                      <rect x="4" y="4" width="18" height="18" fill="#333"/>
                      <rect x="7" y="7" width="12" height="12" fill="white"/>
                      <rect x="10" y="10" width="6" height="6" fill="#333"/>
                      
                      <rect x="50" y="4" width="18" height="18" fill="#333"/>
                      <rect x="53" y="7" width="12" height="12" fill="white"/>
                      <rect x="56" y="10" width="6" height="6" fill="#333"/>
                      
                      <rect x="4" y="50" width="18" height="18" fill="#333"/>
                      <rect x="7" y="53" width="12" height="12" fill="white"/>
                      <rect x="10" y="56" width="6" height="6" fill="#333"/>
                      
                      {/* Random pattern */}
                      <rect x="26" y="4" width="4" height="4" fill="#333"/>
                      <rect x="34" y="4" width="4" height="4" fill="#333"/>
                      <rect x="42" y="8" width="4" height="4" fill="#333"/>
                      <rect x="26" y="12" width="4" height="4" fill="#333"/>
                      <rect x="38" y="12" width="4" height="4" fill="#333"/>
                      
                      <rect x="4" y="26" width="4" height="4" fill="#333"/>
                      <rect x="12" y="30" width="4" height="4" fill="#333"/>
                      <rect x="4" y="38" width="4" height="4" fill="#333"/>
                      <rect x="16" y="34" width="4" height="4" fill="#333"/>
                      
                      <rect x="26" y="26" width="4" height="4" fill="#333"/>
                      <rect x="34" y="30" width="4" height="4" fill="#333"/>
                      <rect x="30" y="38" width="4" height="4" fill="#333"/>
                      <rect x="42" y="34" width="4" height="4" fill="#333"/>
                      <rect x="38" y="42" width="4" height="4" fill="#333"/>
                      
                      <rect x="50" y="26" width="4" height="4" fill="#333"/>
                      <rect x="58" y="30" width="4" height="4" fill="#333"/>
                      <rect x="54" y="38" width="4" height="4" fill="#333"/>
                      <rect x="64" y="34" width="4" height="4" fill="#333"/>
                      
                      <rect x="26" y="50" width="4" height="4" fill="#333"/>
                      <rect x="34" y="54" width="4" height="4" fill="#333"/>
                      <rect x="30" y="62" width="4" height="4" fill="#333"/>
                      <rect x="42" y="58" width="4" height="4" fill="#333"/>
                      
                      <rect x="50" y="50" width="4" height="4" fill="#333"/>
                      <rect x="58" y="54" width="4" height="4" fill="#333"/>
                      <rect x="54" y="62" width="4" height="4" fill="#333"/>
                      <rect x="64" y="58" width="4" height="4" fill="#333"/>
                      <rect x="62" y="64" width="4" height="4" fill="#333"/>
                    </svg>
                  </div>
                  
                  {/* App download info */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                      </svg>
                      <span style={{ fontSize: 11, color: "#666" }}>Scan to</span>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#1a365d", marginBottom: 8 }}>download app</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 4 }}>
                      {[1,2,3,4,5].map(i => (
                        <span key={i} style={{ color: "#0ea5e9", fontSize: 14 }}>★</span>
                      ))}
                    </div>
                    <div style={{ fontSize: 12, color: "#C41230", fontWeight: 700 }}>1m+ reviews</div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Promo Banners - 5 cards */}
            <section style={{ marginBottom: 32 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
                <div style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
                  <img src={BANNER_IMG1} alt="$20 off" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
                  <img src={BANNER_IMG2} alt="40% off" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
                  <img src={BANNER_IMG3} alt="Korean food week" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
                  <img src={BANNER_IMG4} alt="Spring Korean Cuisine" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
                  <img src={BANNER_IMG5} alt="Thursday Last Call" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </section>
            
            {/* Glow In Bloom */}
            <section style={{ marginBottom: 32 }}>
              <div style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)", borderRadius: 16, padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ background: "#22c55e", color: "white", padding: "8px 14px", borderRadius: 8, fontWeight: 700, fontSize: 12 }}>Free gift</div>
                  <div>
                    <div style={{ fontSize: 11, color: "#9333ea", fontWeight: 600 }}>Glow In Bloom · Feb 27th → Apr 2nd</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#1e1e1e" }}>Glow Up Your Look & Space</div>
                    <div style={{ fontSize: 13, color: "#555" }}>Beauty, laundry & home fragrance</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ background: "#f97316", color: "white", padding: "10px 14px", borderRadius: 8, textAlign: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: 800 }}>$5 off</div>
                    <div style={{ fontSize: 10 }}>Buy $32 (Selected)</div>
                  </div>
                  <button style={{ width: 44, height: 44, borderRadius: "50%", background: "white", border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", cursor: "pointer", fontSize: 18 }}>›</button>
                </div>
              </div>
            </section>
            
            {/* Product Sections - matching left sidebar categories */}
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Food" sub="Korean Food & Snacks" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {FOOD.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Beauty" sub="K-Beauty Essentials" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {BEAUTY.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Home" sub="Home & Living" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {HOME.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Electronics" sub="Tech & Gadgets" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {ELECTRONICS.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Kitchen & Dining" sub="Cookware & Tableware" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {KITCHEN.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Fashion" sub="Korean Style" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {FASHION.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Wellness & Sports" sub="Health & Fitness" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {WELLNESS.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Baby & Kids" sub="For Little Ones" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {BABY_KIDS.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="K-POP" sub="Albums & Merch" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {KPOP.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="K-Culture" sub="Korean Heritage" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {KCULTURE.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Office Supplies" sub="Cute & Functional" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {OFFICE.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Pets" sub="For Furry Friends" cta="See all deals" />
              <div style={{ display:"flex", gap:flyerGap }}>
                {PETS.slice(0, visibleFlyerCount).map(p => (
                  <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                ))}
              </div>
            </section>
            </>)}

            {/* ── FLYERS CONTENT ── */}
            {navActive === "Flyers" && (
            <>
              <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:24 }}>
                <div>
                  <h1 style={{ fontSize:28, fontWeight:800, color:"#111", marginBottom:6 }}>Flyers</h1>
                  <p style={{ fontSize:13, color:"#888" }}>
                    Best deals from your favorite Korean stores.
                    <span style={{ marginLeft:4, cursor:"pointer" }}>&oplus;</span>
                  </p>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", color:"#111", fontSize:14, fontWeight:600 }}>
                  <span style={{ fontSize:16 }}>&#128276;</span>
                  Notifications
                </div>
              </div>

              {FLYER_STORES.map(store => (
                <section key={store.id} style={{ marginBottom:40 }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                      <div style={{ width:44, height:44, background: store.color, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:900, fontSize:11 }}>
                        {store.name.slice(0,2).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontWeight:700, fontSize:16, color:"#111" }}>{store.name}</div>
                        <div style={{ fontSize:13, color:"#666" }}>Flyer deals {store.dateRange}</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                      <span style={{ fontSize:14, fontWeight:600, color:"#C41230", cursor:"pointer" }}>Shop flyer &rsaquo;</span>
                      <div style={{ display:"flex", gap:6 }}>
                        <button style={{ width:32, height:32, borderRadius:"50%", border:"1px solid #ddd", background:"white", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, color:"#888" }}>&lsaquo;</button>
                        <button style={{ width:32, height:32, borderRadius:"50%", border:"1px solid #ddd", background:"white", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, color:"#888" }}>&rsaquo;</button>
                      </div>
                    </div>
                  </div>

                  <div style={{ display:"flex", gap:flyerGap, overflowX:"auto" }} className="hide-scrollbar">
                    <div style={{ width:flyerW, minWidth:flyerW, height: flyerW * 1.5, borderRadius:18, overflow:"hidden", background:`linear-gradient(180deg, ${store.color}22 0%, ${store.color}44 100%)`, display:"flex", flexDirection:"column", justifyContent:"flex-end", position:"relative", cursor:"pointer", flexShrink:0, border:"1px solid #e8e8e8" }}>
                      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <div style={{ width: flyerW * 0.5, height: flyerW * 0.5, background: store.color, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:900, fontSize: flyerW * 0.1 }}>
                          {store.name.slice(0,3).toUpperCase()}
                        </div>
                      </div>
                      <div style={{ background: store.color, color:"white", padding:"10px 16px", textAlign:"center", fontWeight:700, fontSize:13 }}>{store.dateRange}</div>
                    </div>
                    {store.products.slice(0, 10).map(p => (
                      <FlyerCard key={p.id} p={p} onAdd={add} onRemove={remove} cart={cart} w={flyerW} onClick={openProduct} />
                    ))}
                  </div>
                </section>
              ))}
            </>
            )}
            
            <section style={{ marginBottom: 44 }}>
              <SectionHeader title="Featured Reviews" cta="More" />
              <div style={{ display: "flex", gap: flyerGap }}>
                {FEATURED_REVIEWS.slice(0, visibleFlyerCount).map((r) => <ReviewCard key={r.id} review={r} onAdd={add} w={flyerW} />)}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Account Panel */}
      {accountOpen && (
        <>
          <div onClick={() => setAccountOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, animation: "fadeIn 0.2s ease" }} />
          <div style={{ position: "fixed", top: 0, left: 0, bottom: 0, width: 320, background: "white", zIndex: 201, overflowY: "auto", boxShadow: "4px 0 24px rgba(0,0,0,0.15)", animation: "slideInLeft 0.25s ease" }}>
            {/* Header */}
            <div style={{ padding: "20px 24px", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#E31937", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 16 }}>W</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>wonsil j.</div>
                  <div style={{ fontSize: 12, color: "#888" }}>Customer since May 2021</div>
                </div>
              </div>
              <button onClick={() => setAccountOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#666" }}><Icons.X size={22} sw={2} /></button>
            </div>

            {/* Promo Banner */}
            <div style={{ margin: "16px 20px", padding: "14px 18px", background: "#E31937", borderRadius: 12, color: "white" }}>
              <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 4 }}>KWAVE24+ perk alert!</div>
              <div style={{ fontSize: 11, opacity: 0.9, lineHeight: 1.4 }}>$0 delivery fee on grocery and retail orders of $10+. Service fees apply. $35 min. for Costco.</div>
            </div>

            {/* Menu Sections */}
            <div style={{ padding: "12px 8px" }}>
              <div style={{ padding: "8px 16px", fontSize: 10, color: "#999", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase" }}>Manage your account</div>
              {[
                { icon: Icons.Store, label: "Stores", active: true },
                { icon: Icons.Package, label: "Your orders" },
                { icon: Icons.List, label: "Your lists" },
                { icon: Icons.Heart, label: "Your recipes" },
                { icon: Icons.Settings, label: "Your account settings" },
                { icon: Icons.Zap, label: "Try KWAVE24+" },
                { icon: Icons.User, label: "Start a family account" },
              ].map(({ icon: IconComp, label, active }) => (
                <div key={label} style={{
                  padding: "12px 16px", display: "flex", alignItems: "center", gap: 14,
                  cursor: "pointer", borderRadius: 10, margin: "2px 0",
                  background: active ? "#eef9f3" : "transparent",
                  color: active ? "#003d2b" : "#333", fontWeight: active ? 700 : 500, fontSize: 14,
                }}>
                  <IconComp size={20} sw={active ? 2.4 : 2} />
                  {label}
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: "#f0f0f0", margin: "8px 20px" }} />

            <div style={{ padding: "12px 8px" }}>
              <div style={{ padding: "8px 16px", fontSize: 10, color: "#999", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase" }}>Credits and promos</div>
              {[
                { icon: Icons.Gift, label: "Invite friends, earn money", highlight: true },
                { icon: Icons.CreditCard, label: "Buy gift cards" },
                { icon: Icons.Tag, label: "Credits, promos, and gift cards" },
                { icon: Icons.CreditCard, label: "Apply: KWAVE24 Mastercard" },
              ].map(({ icon: IconComp, label, highlight }) => (
                <div key={label} style={{
                  padding: "12px 16px", display: "flex", alignItems: "center", gap: 14,
                  cursor: "pointer", borderRadius: 10, margin: "2px 0",
                  color: highlight ? "#E31937" : "#333", fontWeight: 500, fontSize: 14,
                }}>
                  <IconComp size={20} sw={2} />
                  {label}
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: "#f0f0f0", margin: "8px 20px" }} />

            <div style={{ padding: "12px 8px" }}>
              <div style={{ padding: "8px 16px", fontSize: 10, color: "#999", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase" }}>Support</div>
              {[
                { icon: Icons.HelpCircle, label: "Help Center" },
                { icon: Icons.HelpCircle, label: "How KWAVE24 works" },
              ].map(({ icon: IconComp, label }) => (
                <div key={label} style={{
                  padding: "12px 16px", display: "flex", alignItems: "center", gap: 14,
                  cursor: "pointer", borderRadius: 10, margin: "2px 0",
                  color: "#333", fontWeight: 500, fontSize: 14,
                }}>
                  <IconComp size={20} sw={2} />
                  {label}
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: "#f0f0f0", margin: "8px 20px" }} />

            <div style={{ padding: "12px 8px 24px" }}>
              <div style={{ padding: "8px 16px", fontSize: 10, color: "#999", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase" }}>Our apps</div>
              {[
                { icon: Icons.ShoppingBag, label: "App Store" },
                { icon: Icons.ShoppingBag, label: "Google Play" },
              ].map(({ icon: IconComp, label }) => (
                <div key={label} style={{
                  padding: "12px 16px", display: "flex", alignItems: "center", gap: 14,
                  cursor: "pointer", borderRadius: 10, margin: "2px 0",
                  color: "#333", fontWeight: 500, fontSize: 14,
                }}>
                  <IconComp size={20} sw={2} />
                  {label}
                </div>
              ))}
            </div>

            {/* Log out */}
            <div style={{ padding: "12px 8px 24px" }}>
              <div style={{
                padding: "12px 16px", display: "flex", alignItems: "center", gap: 14,
                cursor: "pointer", borderRadius: 10, margin: "2px 0",
                color: "#E31937", fontWeight: 600, fontSize: 14,
              }}>
                <Icons.X size={20} sw={2} />
                Log out
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={closeProduct} 
          cart={cart} 
          onAdd={add} 
          onRemove={remove}
          allProducts={allProductsForModal}
        />
      )}

      {/* Cart Panel */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, animation: "fadeIn 0.2s ease" }} />
          <div style={{
            position:"fixed", top:0, right:0, bottom:0, width: isMobile ? "90%" : 400,
            background:"white", zIndex:201,
            boxShadow:"-4px 0 24px rgba(0,0,0,0.15)",
            animation:"slideInRight 0.25s ease",
            display:"flex", flexDirection:"column"
          }}>
            {/* Header */}
            <div style={{ padding:"16px 20px", borderBottom:"1px solid #f0f0f0", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <button onClick={() => setCartOpen(false)} style={{ background:"none", border:"none", cursor:"pointer", padding:0, color:"#555", display:"flex", alignItems:"center", fontSize:14 }}>
                  ✕
                </button>
                <span style={{ fontWeight:600, fontSize:14, color:"#111" }}>Personal KWAVE24 Cart</span>
              </div>
              <div style={{ fontSize:12, color:"#888" }}>Shopping</div>
            </div>

            {/* Store badge and total */}
            <div style={{ padding:"14px 20px", borderBottom:"1px solid #f0f0f0", display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
              <div style={{ width:40, height:40, background:"#C41230", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:8, color:"white", lineHeight:1.1, textAlign:"center", flexShrink:0 }}>
                KWAVE<br/>24
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:14, color:"#111" }}>KWAVE24</div>
                <div style={{ fontSize:12, color:"#888" }}>Today</div>
              </div>
              <span style={{ fontWeight:800, fontSize:16, color:"#111" }}>${cartTotal.toFixed(2)}</span>
            </div>

            {/* Cart Content */}
            <div style={{ flex:1, overflowY:"auto", padding:"12px 20px" }}>
              {cartCount === 0 ? (
                <div style={{ textAlign:"center", padding:"60px 20px" }}>
                  <div style={{ fontSize:48, marginBottom:16 }}>🛒</div>
                  <div style={{ fontWeight:700, fontSize:18, color:"#111", marginBottom:8 }}>Your cart is empty</div>
                  <div style={{ fontSize:14, color:"#888" }}>Start shopping to add items</div>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div style={{ marginBottom:8 }}>
                    {Object.entries(cart).map(([id, qty]) => {
                      const product = ALL_PRODUCTS.find(p => p.id === Number(id));
                      if (!product) return null;
                      return (
                        <div key={id} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 0", borderBottom:"1px solid #f0f0f0" }}>
                          <div style={{ width:52, height:52, background:"#fff", borderRadius:8, border:"1px solid #e8e8e8", overflow:"hidden", flexShrink:0 }}>
                            <img src={product.img} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                          </div>
                          <div style={{ flex:1, minWidth:0 }}>
                            <div style={{ fontSize:14, fontWeight:600, color:"#111", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{product.name}</div>
                            <div style={{ fontSize:13, color:"#888", marginTop:2 }}>${product.price.toFixed(2)}</div>
                            <button style={{ fontSize:12, color:"#C41230", background:"none", border:"none", cursor:"pointer", padding:0, marginTop:4, display:"flex", alignItems:"center", gap:4 }}>
                              <span>↻</span> Choose replacement
                            </button>
                          </div>
                          <div style={{ display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
                            <button onClick={() => remove(Number(id))} style={{ width:32, height:32, borderRadius:"50%", border:"1.5px solid #ddd", background:"white", cursor:"pointer", fontWeight:700, fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", color:"#333" }}>−</button>
                            <span style={{ fontWeight:700, fontSize:15, minWidth:24, textAlign:"center" }}>{qty}</span>
                            <button onClick={() => add(Number(id))} style={{ width:32, height:32, borderRadius:"50%", border:"none", background:"#C41230", color:"white", cursor:"pointer", fontWeight:700, fontSize:18, display:"flex", alignItems:"center", justifyContent:"center" }}>+</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Make this order a gift */}
                  <div style={{ padding:"14px 0", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid #f0f0f0" }}>
                    <span style={{ fontSize:13, color:"#555", display:"flex", alignItems:"center", gap:8 }}>🎁 Make this order a gift</span>
                    <div style={{ width:42, height:24, background:"#d1d5db", borderRadius:12, cursor:"pointer", position:"relative" }}>
                      <div style={{ width:20, height:20, background:"white", borderRadius:"50%", position:"absolute", top:2, left:2, boxShadow:"0 1px 3px rgba(0,0,0,0.2)" }} />
                    </div>
                  </div>

                  {/* Complete your cart */}
                  <div style={{ marginTop:16, paddingBottom:20 }}>
                    <div style={{ fontWeight:700, fontSize:14, marginBottom:4 }}>Complete your cart</div>
                    <div style={{ fontSize:12, color:"#888", marginBottom:12 }}>Based on items in your cart</div>
                    <div style={{ display:"grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(3,1fr)", gap:10 }}>
                      {ALL_PRODUCTS.slice(0, isMobile ? 6 : 9).map(s => (
                        <div key={s.id} style={{ display:"flex", flexDirection:"column" }}>
                          <div style={{ position:"relative", width:"100%", paddingBottom:"100%", background:"#f8f7f4", borderRadius:8, overflow:"hidden" }}>
                            <img src={s.img} alt={s.name} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
                            <div style={{ position:"absolute", top:4, right:4 }}>
                              <button onClick={() => add(s.id)} style={{ width:24, height:24, borderRadius:"50%", background:"#C41230", border:"none", color:"white", fontWeight:800, cursor:"pointer", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }}>+</button>
                            </div>
                          </div>
                          <div style={{ fontSize:11, fontWeight:800, marginTop:4 }}>${s.price.toFixed(2)}</div>
                          <div style={{ fontSize:10, color:"#444", lineHeight:1.35, display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>{s.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Sticky Footer with checkout */}
            {cartCount > 0 && (
              <div style={{
                padding:"16px 20px 24px",
                borderTop:"1px solid #e8e8e8",
                background:"white",
                flexShrink:0
              }}>
                {/* Free delivery progress bar */}
                {(() => {
                  const freeDeliveryThreshold = 35;
                  const remaining = Math.max(0, freeDeliveryThreshold - cartTotal);
                  const isFree = cartTotal >= freeDeliveryThreshold;
                  const progress = Math.min(100, (cartTotal / freeDeliveryThreshold) * 100);

                  return (
                    <div style={{
                      background: isFree ? "#003d2b" : "#f0f0f0",
                      borderRadius:30, padding:"12px 16px", marginBottom:14,
                      display:"flex", alignItems:"center", justifyContent:"space-between",
                      transition:"background 0.3s"
                    }}>
                      <div style={{ flex:1, marginRight:12 }}>
                        <div style={{ fontSize:13, color: isFree ? "white" : "#333", fontWeight:600 }}>
                          {isFree
                            ? "You're getting $0 delivery fee"
                            : `Add $${remaining.toFixed(2)} to get $0 delivery fee`}
                        </div>
                        {!isFree && (
                          <div style={{ marginTop:6, height:4, background:"#ddd", borderRadius:2, overflow:"hidden" }}>
                            <div style={{ width:`${progress}%`, height:"100%", background:"#C41230", borderRadius:2, transition:"width 0.3s" }} />
                          </div>
                        )}
                      </div>
                      <div style={{
                        display:"flex", alignItems:"center", gap:4,
                        color: isFree ? "white" : "#C41230", fontWeight:800, fontSize:14
                      }}>
                        <Icons.ShoppingCart size={18} sw={2.5} />
                        {cartCount}
                      </div>
                    </div>
                  );
                })()}

                <button style={{
                  width:"100%", background:"#C41230", color:"white", border:"none",
                  borderRadius:28, padding:"16px 20px", fontSize:16, fontWeight:800,
                  cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between"
                }}>
                  <span>Go to checkout</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  </script>
</body>
</html>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
