 export const GridMarkers = () => (
    <div
      style={{
        position: "absolute",
        top: "-6px",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        padding: "0 1px",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          style={{
            width: "11px",
            height: "11px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#525252",
            fontSize: "14px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
          }}
        >
          +
        </span>
      ))}
    </div>
  );