"use client";

import type { ProjectItem } from "./projectData";

export default function ProjectVisual({
  project,
  isHovered,
}: {
  project: ProjectItem;
  isHovered: boolean;
}) {
  const { visualType, accent } = project;

  return (
    <div
      className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07080b] p-4 transition-transform duration-500 ease-out md:h-64"
      style={{
        transform: isHovered ? "scale(1.04) translateZ(25px)" : "scale(1) translateZ(0px)",
      }}
    >
      {/* Background Matrix Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, ${accent}33 1px, transparent 1px), linear-gradient(to bottom, ${accent}33 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Status Telemetry Bar */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-mute">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: accent,
              boxShadow: isHovered ? `0 0 10px ${accent}` : "none",
            }}
          />
          <span className="text-ink/80">{project.categoryTag}</span>
        </div>
        <div className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 text-ink/70">
          SYS_ID // {project.number}
        </div>
      </div>

      {/* Center Dynamic Visual Render */}
      <div className="relative z-10 flex h-[calc(100%-2.25rem)] items-center justify-center pt-2">
        {visualType === "neural" && (
          <div className="relative flex w-full flex-col items-center justify-center">
            {/* Waveform & Spectrogram */}
            <div className="flex h-20 w-full items-end justify-between gap-1 px-4">
              {[28, 42, 65, 88, 54, 76, 92, 45, 68, 85, 96, 62, 40, 72, 89, 58, 35, 64, 82, 48].map(
                (h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t-sm transition-all duration-300"
                    style={{
                      height: isHovered ? `${Math.min(h * 1.15, 100)}%` : `${h * 0.75}%`,
                      background: `linear-gradient(to top, ${accent}22, ${accent})`,
                      opacity: isHovered ? 0.95 : 0.65,
                    }}
                  />
                )
              )}
            </div>

            {/* Neural Matrix Overlay */}
            <div className="mt-3 flex w-full items-center justify-between border-t border-white/10 px-2 pt-2 font-mono text-[9px] text-mute">
              <span>LATENCY: &lt;18ms</span>
              <span style={{ color: accent }}>TENSOR: ACTIVE</span>
              <span>CONF: 94.8%</span>
            </div>
          </div>
        )}

        {visualType === "audio" && (
          <div className="relative flex w-full flex-col items-center justify-center">
            {/* Concentric Audio Radar Circles */}
            <div className="relative flex h-24 w-24 items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border border-dashed transition-transform duration-700"
                style={{
                  borderColor: `${accent}40`,
                  transform: isHovered ? "rotate(90deg) scale(1.15)" : "rotate(0deg)",
                }}
              />
              <div
                className="absolute inset-3 rounded-full border"
                style={{ borderColor: `${accent}70` }}
              />
              <div
                className="h-3 w-3 rounded-full animate-ping"
                style={{ background: accent }}
              />
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: accent }}
              />
            </div>

            {/* Live Audio Stream readout */}
            <div className="mt-2 flex w-full items-center justify-between border-t border-white/10 px-2 pt-2 font-mono text-[9px] text-mute">
              <span>VOICE STREAM</span>
              <span style={{ color: accent }}>BUFFER: 85ms</span>
              <span>SPATIAL: 3D</span>
            </div>
          </div>
        )}

        {visualType === "ledger" && (
          <div className="relative flex w-full flex-col items-center justify-center">
            {/* Asset Status Ledger Nodes */}
            <div className="grid w-full grid-cols-3 gap-2 px-2">
              {[
                { id: "NODE_01", status: "VERIFIED", color: accent },
                { id: "NODE_02", status: "HASHED", color: accent },
                { id: "NODE_03", status: "SECURE", color: accent },
              ].map((node, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/10 bg-black/50 p-2 text-center"
                >
                  <p className="font-mono text-[8px] text-mute">{node.id}</p>
                  <p
                    className="mt-1 font-mono text-[10px] font-medium"
                    style={{ color: node.color }}
                  >
                    {node.status}
                  </p>
                </div>
              ))}
            </div>

            {/* Verification Hash Telemetry */}
            <div className="mt-3 flex w-full items-center justify-between border-t border-white/10 px-2 pt-2 font-mono text-[9px] text-mute">
              <span>IMMUTABLE LEDGER</span>
              <span style={{ color: accent }}>BLOCK #84920</span>
              <span>100% AUDIT</span>
            </div>
          </div>
        )}

        {visualType === "pipeline" && (
          <div className="relative flex w-full flex-col items-center justify-center">
            {/* Pipeline Stages */}
            <div className="flex w-full items-center justify-between gap-2 px-2">
              {["INBOUND", "INTENT_AI", "SCORE", "DISPATCH"].map((stage, i) => (
                <div key={i} className="flex flex-1 flex-col items-center">
                  <div
                    className="flex h-7 w-full items-center justify-center rounded-md border text-[9px] font-mono transition-colors"
                    style={{
                      borderColor: i <= 2 ? accent : "rgba(255,255,255,0.15)",
                      backgroundColor: i === 2 ? `${accent}25` : "rgba(0,0,0,0.4)",
                      color: i <= 2 ? "#f3eee4" : "#8d8880",
                    }}
                  >
                    {stage}
                  </div>
                </div>
              ))}
            </div>

            {/* Velocity readout */}
            <div className="mt-4 flex w-full items-center justify-between border-t border-white/10 px-2 pt-2 font-mono text-[9px] text-mute">
              <span>WORKFLOW: SYNC</span>
              <span style={{ color: accent }}>&lt;150ms SCORE</span>
              <span>AUTO QUALIFIED</span>
            </div>
          </div>
        )}

        {visualType === "graph" && (
          <div className="relative flex w-full flex-col items-center justify-center">
            {/* Entity Disambiguation Graph */}
            <div className="relative flex h-20 w-full items-center justify-around px-4">
              <div className="flex flex-col gap-2">
                <div className="h-4 w-14 rounded border border-white/15 bg-white/5 font-mono text-[8px] flex items-center justify-center text-mute">ENT_A</div>
                <div className="h-4 w-14 rounded border border-white/15 bg-white/5 font-mono text-[8px] flex items-center justify-center text-mute">ENT_B</div>
              </div>

              {/* Connecting similarity beam */}
              <div className="flex flex-1 items-center justify-center px-2">
                <div className="relative h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent">
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-black px-1 font-mono text-[8px]"
                    style={{ color: accent }}
                  >
                    SIM 0.98
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div
                  className="h-9 w-16 rounded border flex flex-col items-center justify-center font-mono text-[8px]"
                  style={{ borderColor: accent, background: `${accent}15`, color: accent }}
                >
                  RESOLVED
                  <span className="text-[7px] text-ink/70">CLUSTER_01</span>
                </div>
              </div>
            </div>

            {/* Disambiguation metrics */}
            <div className="mt-2 flex w-full items-center justify-between border-t border-white/10 px-2 pt-2 font-mono text-[9px] text-mute">
              <span>LSH BLOCKING</span>
              <span style={{ color: accent }}>F1: 0.962</span>
              <span>85K REC/S</span>
            </div>
          </div>
        )}

        {visualType === "cluster" && (
          <div className="relative flex w-full flex-col items-center justify-center">
            {/* Cluster Nodes & Throughput curve */}
            <div className="flex w-full items-center justify-between gap-3 px-3">
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex justify-between font-mono text-[8px] text-mute">
                  <span>EDGE RPS</span>
                  <span style={{ color: accent }}>18.5k/s</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: isHovered ? "88%" : "72%",
                      background: accent,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex justify-between font-mono text-[8px] text-mute">
                  <span>P99 TIME</span>
                  <span style={{ color: accent }}>4.2ms</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: "35%",
                      background: accent,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Telemetry Footer */}
            <div className="mt-4 flex w-full items-center justify-between border-t border-white/10 px-2 pt-2 font-mono text-[9px] text-mute">
              <span>ASYNCIO GATEWAY</span>
              <span style={{ color: accent }}>HIT 96.4%</span>
              <span>ZERO LOSS</span>
            </div>
          </div>
        )}
      </div>

      {/* Subtle Bottom Ambient Gradient */}
      <div
        className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full blur-2xl opacity-20 transition-opacity duration-500"
        style={{
          background: accent,
          opacity: isHovered ? 0.35 : 0.15,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
