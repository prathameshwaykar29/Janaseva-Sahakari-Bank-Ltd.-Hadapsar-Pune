// ─── Shared UI Primitives (Tailwind) ─────────────────────────────────────────

/** Red-bar section heading used across all tabs */
export function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2 mb-2 pb-2 border-b-2 border-blue-100">
      <span className="w-1 h-5 rounded-sm bg-[#f47012] shrink-0" />
      <h2 className="font-poppins text-base font-bold text-[#000]">{children}</h2>
    </div>
  );
}

/** Yellow-left-border info note */
export function InfoNote({ children }) {
  return (
    <p className="mt-3 text-[11px] text-gray-500 bg-gray-50 rounded px-3 py-2.5 border-l-[3px] border-yellow-400 leading-relaxed">
      {children}
    </p>
  );
}

/** Card wrapper for a content section */
export function CardSection({ children, className = "" }) {
  return (
    <div className={`p-4 border-b border-[#dce3f0] last:border-b-0 ${className}`}>
      {children}
    </div>
  );
}