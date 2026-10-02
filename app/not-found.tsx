import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-gold">404 // VOID</p>
      <h1 className="display mt-4 text-5xl md:text-7xl">Page not found.</h1>
      <p className="mt-4 max-w-md text-mute">
        The coordinate you are looking for does not exist in this sector.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-gold hover:text-gold"
      >
        Return Home →
      </Link>
    </div>
  );
}
