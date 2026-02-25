"use client";

import { GridMarkers } from "./GridMarkers";

export default function Footer() {
  const movieSections = [
    {
      id: "playing",
      label: "/ NOW PLAYING",
      links: [
        "Antim: The Final Truth",
        "Tadap",
        "Resident Evil",
        "Satyameva Jayate 2",
        "Eternals",
        "My Hero Academia",
        "Marakkar",
        "Akhanda",
      ],
    },
    {
      id: "upcoming",
      label: "/ UPCOMING",
      links: [
        "Jail",
        "Ikk",
        "Murungakkai Chips",
        "Rhymes",
        "Theal",
        "Gamanam",
        "Bullet Satyam",
        "Drishya 2",
      ],
    },
    {
      id: "genre",
      label: "/ BY GENRE",
      links: [
        "Action",
        "Drama",
        "Comedy",
        "Thriller",
        "Romance",
        "Horror",
        "Sci-Fi",
        "Animation",
      ],
    },
    {
      id: "language",
      label: "/ BY LANGUAGE",
      links: [
        "Hindi",
        "English",
        "Tamil",
        "Telugu",
        "Malayalam",
        "Kannada",
        "Punjabi",
        "Bhojpuri",
      ],
    },
  ];

  const hoverLink = (e, enter:boolean) => {
    e.target.style.color = enter ? "#1A1A1A" : "#525252";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .bms-chip {
          display: inline-block;
          padding: 3px 10px;
          border: 1px solid #D4D4D4;
          border-radius: 2px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #525252;
          background: rgba(229,229,229,0.4);
          transition: all 0.2s ease;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
        }
        .bms-chip:hover { background: #1A1A1A; color: white; border-color: #1A1A1A; }

        .bms-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 24px;
          border: 1px solid #1A1A1A;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 500;
          color: #1A1A1A;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
        }
        .bms-btn:hover { background: #1A1A1A; color: white; }

        .bms-legal-link {
          padding: 4px 8px;
          font-size: 10px;
          font-weight: 500;
          color: #737373;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-decoration: none;
          border: 1px solid transparent;
          border-radius: 2px;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .bms-legal-link:hover { color: #1A1A1A; border-color: #D4D4D4; }

        .bms-striped {
          background: repeating-linear-gradient(180deg, #1A1A1A, #1A1A1A 2px, transparent 2px, transparent 6px);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          opacity: 0.85;
        }

        .bms-pulse {
          width: 7px;
          height: 7px;
          border-radius: 9999px;
          background: #E11D48;
          display: inline-block;
          animation: bmspulse 2s ease-in-out infinite;
        }
        @keyframes bmspulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }

        .bms-footer * { box-sizing: border-box; }
      `}</style>

      <footer
        className="bms-footer"
        style={{
          fontFamily: "'Inter', sans-serif",
          backgroundColor: "#FAFAF9",
          borderTop: "1px solid #D4D4D4",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* === PARTNER CTA + EXCLUSIVE ROW === */}
        <div
          style={{ position: "relative", borderBottom: "1px solid #D4D4D4" }}
        >
          <GridMarkers />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {/* Partner CTA */}
            <div
              style={{
                padding: "2rem",
                borderRight: "1px solid #D4D4D4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "200px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "#737373",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  / PARTNER WITH US
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    lineHeight: 1.25,
                    margin: 0,
                    maxWidth: "300px",
                  }}
                >
                  List your show on BookMyShow.
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#737373",
                    marginTop: "8px",
                    lineHeight: 1.6,
                  }}
                >
                  Got a show, event, or great experience? Partner with us & get
                  listed.
                </p>
              </div>
              <div style={{ marginTop: "24px" }}>
                <a href="#" className="bms-btn">
                  Contact Today →
                </a>
              </div>
            </div>

            {/* BMS Exclusive */}
            <div style={{ padding: "2rem" }}>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "#737373",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span className="bms-pulse" />/ BMS EXCLUSIVE
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {[
                  "BHARAT",
                  "Nayeem Diaries",
                  "Michael's Coffee House",
                  "Muddy",
                  "Consilium",
                  "Avatar Purusha",
                  "Antardhaan",
                  "Bullet Satyam",
                  "Drishya 2",
                  "Oomai Sennai",
                  "Marjaney",
                ].map((title) => (
                  <span key={title} className="bms-chip">
                    {title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === MOVIE LINK GRID === */}
        <div
          style={{ position: "relative", borderBottom: "1px solid #D4D4D4" }}
        >
          <GridMarkers />
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {movieSections.map((section, idx) => (
              <div
                key={section.id}
                style={{
                  padding: "2rem",
                  borderRight: idx < 3 ? "1px solid #D4D4D4" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "#737373",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  {section.label}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        onMouseEnter={(e) => hoverLink(e, true)}
                        onMouseLeave={(e) => hoverLink(e, false)}
                        style={{
                          fontSize: "12px",
                          color: "#525252",
                          textDecoration: "none",
                          transition: "color 0.2s",
                          lineHeight: 1.5,
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* === SECONDARY LINK GRID === */}
        <div
          style={{ position: "relative", borderBottom: "1px solid #D4D4D4" }}
        >
          <GridMarkers />
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {[
              {
                label: "/ BY FORMAT",
                items: [
                  "2D",
                  "3D",
                  "4DX",
                  "IMAX",
                  "MX4D",
                  "Dolby Atmos",
                  "ScreenX",
                ],
              },
              {
                label: "/ TOP CITIES",
                items: [
                  "Mumbai",
                  "Delhi NCR",
                  "Bengaluru",
                  "Hyderabad",
                  "Chennai",
                  "Kolkata",
                  "Pune",
                ],
              },
              {
                label: "/ BOX OFFICE",
                items: [
                  "Weekly Chart",
                  "All Time Hits",
                  "Blockbusters",
                  "Opening Weekend",
                  "Overseas",
                  "OTT Hits",
                ],
              },
              {
                label: "/ COUNTRIES",
                items: [
                  "India",
                  "USA",
                  "UK",
                  "UAE",
                  "Australia",
                  "Canada",
                  "Singapore",
                ],
              },
            ].map((col, idx) => (
              <div
                key={col.label}
                style={{
                  padding: "2rem",
                  borderRight: idx < 3 ? "1px solid #D4D4D4" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "#737373",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  {col.label}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        onMouseEnter={(e) => hoverLink(e, true)}
                        onMouseLeave={(e) => hoverLink(e, false)}
                        style={{
                          fontSize: "12px",
                          color: "#525252",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* === META / LEGAL ROW === */}
        <div
          style={{ position: "relative", borderBottom: "1px solid #D4D4D4" }}
        >
          <GridMarkers />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {/* Left: Logo + Badge + Copyright */}
            <div
              style={{
                padding: "1.25rem 2rem",
                borderRight: "1px solid #D4D4D4",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "9999px",
                  border: "1px solid #1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div
                style={{
                  padding: "3px 10px",
                  border: "1px solid #1A1A1A",
                  borderRadius: "9999px",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                IN
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  fontSize: "10px",
                  fontFamily: "monospace",
                  color: "#737373",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                © {new Date().getFullYear()} Bigtree Entertainment Pvt. Ltd. All rights reserved.
              </div>
            </div>

            {/* Right: Legal + Socials */}
            <div
              style={{
                padding: "1.25rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "4px",
                flexWrap: "wrap",
              }}
            >
              {["Privacy Policy", "Terms & Conditions", "Sitemap", "FAQ"].map(
                (link) => (
                  <a key={link} href="#" className="bms-legal-link">
                    {link}
                  </a>
                ),
              )}
              <div style={{ marginLeft: "12px", display: "flex", gap: "5px" }}>
                {["YT", "TW", "IG", "FB"].map((s) => (
                  <span key={s} className="bms-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === MASSIVE BRAND WORDMARK === */}
        <div
          style={{
            position: "relative",
            backgroundColor: "#FAFAF9",
            paddingTop: "2rem",
            paddingBottom: 0,
            overflow: "hidden",
          }}
        >
          <GridMarkers />
          <h1
            className="bms-striped"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14vw",
              lineHeight: 0.82,
              letterSpacing: "-0.04em",
              textAlign: "center",
              width: "100%",
              userSelect: "none",
              transform: "scaleY(1.1)",
              transformOrigin: "bottom",
              fontWeight: 700,
              margin: 0,
              display: "block",
            }}
          >
            BOOKMYSHOW
          </h1>

          {/* Bottom markers */}
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              padding: "0 1px",
              pointerEvents: "none",
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
                }}
              >
                +
              </span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
