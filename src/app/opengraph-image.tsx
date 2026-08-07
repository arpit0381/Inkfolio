import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Inkfolio by Arpit Bajpai — Handwritten Developer Notebook";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#FFFDF8",
          backgroundImage:
            "radial-gradient(#E5E7EB 1px, transparent 1px), radial-gradient(#E5E7EB 1px, #FFFDF8 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "16px solid #D97706",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#FEF3C7",
              color: "#92400E",
              padding: "10px 24px",
              borderRadius: "30px",
              fontSize: "22px",
              fontWeight: 700,
              border: "2px solid #FCD34D",
            }}
          >
            <span>✒️ INKFOLIO BY ARPIT BAJPAI</span>
          </div>

          <div
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#B45309",
              letterSpacing: "1px",
            }}
          >
            inkfolio.arpitbajpai.in
          </div>
        </div>

        {/* Main Content Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#111827",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Arpit Bajpai — Developer Notebook
          </div>

          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#4B5563",
              lineHeight: 1.3,
            }}
          >
            Arpit's Diary · Full Stack Software Engineer (React, Next.js, Node.js, PostgreSQL)
          </div>
        </div>

        {/* Bottom Highlights */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "2px solid #E5E7EB",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <span
              style={{
                backgroundColor: "#E0F2FE",
                color: "#0369A1",
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              FormStuff
            </span>
            <span
              style={{
                backgroundColor: "#D1FAE5",
                color: "#047857",
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              LifeReceipt
            </span>
            <span
              style={{
                backgroundColor: "#FCE7F3",
                color: "#BE185D",
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Sulax Solar
            </span>
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#9CA3AF",
            }}
          >
            PSIT Kanpur · Logic Club President
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
