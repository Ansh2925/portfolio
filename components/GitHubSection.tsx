"use client";

import { languageMix, profile } from "@/lib/data";
import GitHubCityCard from "./GitHubCityCard";
// 3D City SVG imported from repo Ansh2925 (profile-3d-contrib)
import citySvg from "@/public/3d-city.svg";

export default function GitHubSection() {
  const maxLang = Math.max(...languageMix.map((item) => item.value));

  return (
    <section id="github" className="section-pad relative overflow-hidden">
      {/* Background Subtle Cyber Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(71,160,66,0.06),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">GitHub / Open Source</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">Public work, left open.</h2>
          </div>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gold hover:text-ink transition-colors"
          >
            <span>Explore @{profile.github}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.45fr] items-stretch">
          {/* Left Column: Profile Card */}
          <article className="flex flex-col justify-between rounded-[2.25rem] border border-white/15 bg-[#0d0e15] p-6 sm:p-8 transition-colors duration-300 hover:border-white/30">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={profile.avatar}
                  alt={`GitHub avatar for ${profile.fullName}`}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-2xl object-cover border border-white/10"
                />
                <div>
                  <p className="font-display text-2xl text-ink">{profile.fullName}</p>
                  <a
                    className="font-mono text-xs text-gold hover:underline"
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/{profile.github}
                  </a>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-mute">{profile.bio}</p>

              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {profile.publicRepos} Public Repositories
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-mute">
                  Active Builder
                </span>
              </div>

              {/* Technology Distribution */}
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                  Technology distribution
                </p>
                {languageMix.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1 flex justify-between text-xs text-mute font-mono">
                      <span>{lang.name}</span>
                      <span>{lang.value} repos</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold to-emerald-400"
                        style={{ width: `${(lang.value / maxLang) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gold hover:underline"
              >
                <span>Visit Complete GitHub Profile</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          {/* Right Column: 3D Interactive City Card */}
          <div className="w-full">
            <GitHubCityCard />
          </div>
        </div>
      </div>
    </section>
  );
}