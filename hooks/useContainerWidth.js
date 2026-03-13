// ── useContainerWidth HOOK ─────────────────────────────────────────────────
const useContainerWidth = (ref) => {
  const [w, setW] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => setW(entry.contentRect.width));
    ro.observe(ref.current);
    setW(ref.current.offsetWidth);
    return () => ro.disconnect();
  }, []);
  return w;
};


