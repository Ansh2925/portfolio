"use client";

export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050507]"
      aria-hidden="true"
    >
      {/* 1. Subtle Monochrome & Deep Charcoal Depth Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_20%,rgba(255,255,255,0.035),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_75%,rgba(255,255,255,0.025),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]" />

      {/* 2. Cyber Matrix Grid Surface: Grey & Black Variants (Major Grid 80px, Subgrid 16px, & Node Dots) */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `
            radial-gradient(circle 4px at 0px 0px, rgba(255, 255, 255, 0.12) 0%, transparent 100%),
            radial-gradient(circle 1.8px at 0px 0px, rgba(240, 240, 245, 0) 100%, transparent 100%),
            linear-gradient(to right, rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: `
            40px 40px,
            40px 40px,
            40px 40px,
            40px 40px,
            8px 8px,
            8px 8px
          `,
          backgroundPosition: `
            0 0,
            0 0,
            0 0,
            0 0,
            0 0,
            0 0
          `,
        }}
      />

      {/* 3. Subtle Neutral Grey Accent Line Traces */}
      <div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.18)] to-transparent"
        style={{ top: "320px" }}
      />
      <div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent"
        style={{ top: "640px" }}
      />
      <div
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.12)] to-transparent"
        style={{ left: "calc(50% - 240px)" }}
      />
      <div
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.16)] to-transparent"
        style={{ left: "calc(50% + 240px)" }}
      />
    </div>
  );
}
