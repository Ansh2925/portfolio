"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

type CityVariant = {
  id: string;
  label: string;
  fileName: string;
  liveUrl: string;
  fallbackSrc: string;
  accent: string;
};

const GITHUB_REPO_RAW_BASE =
  "https://raw.githubusercontent.com/Ansh2925/Ansh2925/main/profile-3d-contrib";

const CITY_VARIANTS: CityVariant[] = [
  {
    id: "night-green",
    label: "Night Green",
    fileName: "profile-night-green.svg",
    liveUrl: `${GITHUB_REPO_RAW_BASE}/profile-night-green.svg`,
    fallbackSrc: "/3d-city.svg",
    accent: "#47a042",
  },
  {
    id: "night-rainbow",
    label: "Rainbow Skyline",
    fileName: "profile-night-rainbow.svg",
    liveUrl: `${GITHUB_REPO_RAW_BASE}/profile-night-rainbow.svg`,
    fallbackSrc: "/3d-city-rainbow.svg",
    accent: "#d4b36a",
  },
  {
    id: "night-view",
    label: "Cyber View",
    fileName: "profile-night-view.svg",
    liveUrl: `${GITHUB_REPO_RAW_BASE}/profile-night-view.svg`,
    fallbackSrc: "/3d-city-view.svg",
    accent: "#7ebfb8",
  },
];

export default function GitHubCityCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [selectedVariant, setSelectedVariant] = useState<CityVariant>(CITY_VARIANTS[0]);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [cacheTimestamp, setCacheTimestamp] = useState<number | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Set initial client-side timestamp for live fetch cache busting
  useEffect(() => {
    setCacheTimestamp(Date.now());
  }, []);

  const currentSrc = imgError
    ? selectedVariant.fallbackSrc
    : cacheTimestamp
    ? `${selectedVariant.liveUrl}?v=${cacheTimestamp}`
    : selectedVariant.liveUrl;

  const handleRefresh = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRefreshing(true);
    setImgError(false);
    setCacheTimestamp(Date.now());
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const handleVariantChange = (variant: CityVariant) => {
    setSelectedVariant(variant);
    setImgError(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setCoords({ x: px * 100, y: py * 100 });
  };

  const handlePointerEnter = () => {
    setHovered(true);
  };

  const handlePointerLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div className="w-full h-full">
        <motion.div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          animate={{
            scale: hovered && !reduced ? 1.015 : 1,
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            boxShadow:
              hovered && !reduced
                ? `0 25px 55px -15px rgba(0, 0, 0, 0.9), 0 0 30px -10px ${selectedVariant.accent}30`
                : "0 15px 35px -10px rgba(0, 0, 0, 0.8)",
          }}
          className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.25rem] border border-white/15 bg-[#0d0e15] p-5 sm:p-7 transition-colors duration-300 hover:border-white/30"
        >
          {/* Dynamic Light Specular Follower */}
          <div
            className="pointer-events-none absolute -inset-px rounded-[2.25rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(550px circle at ${coords.x}% ${coords.y}%, ${selectedVariant.accent}22, transparent 65%)`,
            }}
            aria-hidden="true"
          />

          {/* Layer 1: Top Status & Variant Selector */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span
                className="relative flex h-2.5 w-2.5"
                title={imgError ? "Using local cache fallback" : "Live fetched from GitHub"}
              >
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ background: imgError ? "#d4b36a" : selectedVariant.accent }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ background: imgError ? "#d4b36a" : selectedVariant.accent }}
                />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                    3D City Skyline
                  </p>
                  <span
                    className="rounded-full px-2 py-0.2 font-mono text-[8px] uppercase tracking-wider"
                    style={{
                      background: imgError ? "rgba(212,179,106,0.15)" : "rgba(71,160,66,0.15)",
                      color: imgError ? "#d4b36a" : "#47a042",
                      border: `1px solid ${imgError ? "rgba(212,179,106,0.4)" : "rgba(71,160,66,0.4)"}`,
                    }}
                  >
                    {imgError ? "Cached Fallback" : "Live GitHub"}
                  </span>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-mute">
                  Repo: Ansh2925 / profile-3d-contrib
                </p>
              </div>
            </div>

            {/* Variant Switcher & Live Refresh Action */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleRefresh}
                title="Sync and refresh latest 3D City from GitHub"
                className={`flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-mute transition-transform hover:border-white/30 hover:text-ink ${
                  isRefreshing ? "animate-spin text-ink" : ""
                }`}
                aria-label="Refresh live 3D City"
              >
                ↻
              </button>

              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1">
                {CITY_VARIANTS.map((variant) => {
                  const isActive = selectedVariant.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => handleVariantChange(variant)}
                      className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? "bg-white/15 text-ink shadow-sm"
                          : "text-mute hover:text-ink/80"
                      }`}
                      style={isActive ? { color: variant.accent } : undefined}
                    >
                      {variant.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Layer 2: City Display Stage */}
          <div className="relative z-10 my-4 flex flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#00000f] p-2 sm:p-4 shadow-inner">
            {/* Telemetry Header */}
            <div className="pointer-events-none absolute left-3 top-3 z-20 flex items-center gap-2 font-mono text-[8px] tracking-widest text-mute/70">
              <span className="rounded bg-white/5 px-1.5 py-0.5 border border-white/5 text-emerald-400">
                LIVE_FEED
              </span>
              <span>1280x850</span>
            </div>

            <div className="pointer-events-none absolute right-3 top-3 z-20 hidden sm:flex items-center gap-2 font-mono text-[8px] tracking-widest text-mute/70">
              <span
                className="rounded bg-white/5 px-1.5 py-0.5 border border-white/5"
                style={{ color: selectedVariant.accent }}
              >
                COMMITS = ELEVATION
              </span>
            </div>

            {/* City Image Container with Hover Scale */}
            <div
              className="relative w-full overflow-hidden rounded-xl cursor-zoom-in"
              onClick={() => setIsExpanded(true)}
              title="Click to expand 3D City view"
            >
              <img
                key={currentSrc}
                src={currentSrc}
                alt="3D City contribution graph live fetched from repo Ansh2925"
                width={1280}
                height={850}
                onError={() => {
                  if (!imgError) {
                    setImgError(true);
                  }
                }}
                className="w-full h-auto max-h-[360px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />

              {/* Click to expand hint pill */}
              <div className="absolute bottom-2 right-2 rounded-full border border-white/15 bg-black/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-ink/80 backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity">
                ⤢ Click to inspect
              </div>
            </div>
          </div>

          {/* Layer 3: Bottom Telemetry & Navigation */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-mute">
                Live stream from GitHub raw · Updated via GitHub Actions
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-mute hover:text-ink transition-colors"
              >
                <span>Fullscreen</span>
                <span aria-hidden="true">↗</span>
              </button>

              <a
                href="https://github.com/Ansh2925/Ansh2925/tree/main/profile-3d-contrib"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink transition-transform duration-200 hover:scale-105"
                style={{
                  background: `${selectedVariant.accent}20`,
                  border: `1px solid ${selectedVariant.accent}60`,
                  color: selectedVariant.accent,
                }}
              >
                <span>Ansh2925 Repo</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Expanded Inspection Modal */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-[#0d0e15] p-5 sm:p-7 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: selectedVariant.accent }}
                  />
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-ink">
                    GitHub 3D City // {selectedVariant.label} (Live)
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedVariant.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-mute hover:text-ink transition-colors"
                  >
                    Open Live Raw SVG ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mute hover:text-ink"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="my-4 flex flex-1 items-center justify-center overflow-auto rounded-xl bg-[#00000f] p-4">
                <img
                  src={currentSrc}
                  alt="Full-size 3D City Contribution Graph"
                  width={1280}
                  height={850}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-mute">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Streamed directly from raw.githubusercontent.com/Ansh2925/Ansh2925</span>
                </div>
                <a
                  href="https://github.com/Ansh2925/Ansh2925"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:underline"
                >
                  github.com/Ansh2925/Ansh2925
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
