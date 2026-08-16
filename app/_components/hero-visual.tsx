const SIDEBAR_ICONS = [false, true, false, false];
const BARS = [40, 70, 55, 90, 65];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute inset-0 -z-10 rounded-(--radius-lg) bg-gradient-to-br from-(--brand) to-(--accent) opacity-20 blur-3xl"
        aria-hidden="true"
      />

      <div className="animate-float overflow-hidden rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) shadow-(--shadow-lg)">
        <div className="flex items-center gap-1.5 border-b border-(--line) px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-(--danger)/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--gold)/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--success)/70" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-(--bg-sunken)" />
        </div>

        <div className="flex gap-4 p-5">
          <div className="flex flex-col gap-3">
            {SIDEBAR_ICONS.map((active, i) => (
              <span
                key={i}
                className={`h-6 w-6 rounded-md ${
                  active ? "bg-gradient-to-br from-(--brand) to-(--accent)" : "bg-(--bg-sunken)"
                }`}
              />
            ))}
          </div>

          <div className="flex-1 space-y-5">
            <div className="space-y-1.5">
              <span className="block h-3 w-28 rounded bg-(--line-strong)" />
              <span className="block h-2 w-20 rounded bg-(--line)" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-10 rounded-md border border-(--line) ${
                    i === 1 ? "bg-(--brand)/10" : "bg-(--bg-sunken)"
                  }`}
                />
              ))}
            </div>

            <div className="flex h-14 items-end gap-1.5">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-sm ${
                    i === BARS.length - 1
                      ? "bg-gradient-to-t from-(--brand) to-(--accent)"
                      : "bg-(--line-strong)"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-float-slow absolute -top-5 -right-5 hidden items-center gap-2 rounded-full border border-(--line) bg-(--bg-elevated) px-3 py-2 shadow-(--shadow-lg) sm:flex">
        <span className="h-2 w-2 rounded-full bg-(--success)" aria-hidden="true" />
        <span className="text-xs font-semibold text-foreground">TypeScript</span>
      </div>

      <div className="animate-float absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-full border border-(--line) bg-(--bg-elevated) px-3 py-2 shadow-(--shadow-lg) sm:flex">
        <span
          className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[8px] font-black text-background"
          aria-hidden="true"
        >
          N
        </span>
        <span className="text-xs font-semibold text-foreground">Next.js</span>
      </div>
    </div>
  );
}
