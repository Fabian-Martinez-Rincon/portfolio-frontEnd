const DOT = "h-1.5 w-1.5 rounded-full";
const LINE = "rounded-sm bg-(--line-strong)";

function CodeEditorPreview() {
  return (
    <div className="w-44 rounded-lg border border-(--line) bg-(--bg-elevated) shadow-(--shadow)">
      <div className="flex items-center gap-1.5 border-b border-(--line) px-2.5 py-2">
        <span className={`${DOT} bg-(--danger)/70`} />
        <span className={`${DOT} bg-(--gold)/70`} />
        <span className={`${DOT} bg-(--success)/70`} />
      </div>
      <div className="space-y-1.5 p-3">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-5 rounded-sm bg-(--accent)/70" />
          <span className={`h-1.5 w-12 ${LINE}`} />
        </div>
        <div className="flex gap-1.5 pl-3">
          <span className="h-1.5 w-4 rounded-sm bg-(--brand)/70" />
          <span className="h-1.5 w-16 rounded-sm bg-(--line)" />
        </div>
        <div className="flex gap-1.5 pl-3">
          <span className="h-1.5 w-6 rounded-sm bg-(--success)/70" />
          <span className="h-1.5 w-9 rounded-sm bg-(--line)" />
        </div>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-4 rounded-sm bg-(--accent)/70" />
        </div>
      </div>
    </div>
  );
}

function KanbanPreview() {
  const columns = [
    { cards: [7, 4] },
    { cards: [4] },
    { cards: [9, 4] },
  ];
  return (
    <div className="flex w-48 items-start gap-2.5">
      {columns.map((col, i) => (
        <div key={i} className="flex flex-1 flex-col gap-1.5">
          <span className={`h-1.5 w-6 ${LINE}`} />
          {col.cards.map((h, j) => (
            <span
              key={j}
              style={{ height: `${h * 0.25}rem` }}
              className={`rounded-md border border-(--line) bg-(--bg-elevated) ${
                i === 2 && j === 0 ? "border-l-2 border-l-(--brand)" : ""
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function ChartPreview() {
  const bars = [35, 55, 40, 70, 90];
  return (
    <div className="flex h-20 w-40 items-end gap-2">
      {bars.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%` }}
          className={`flex-1 rounded-t-sm ${
            i >= 3 ? "bg-gradient-to-t from-emerald-500 to-teal-400" : "bg-(--line-strong)"
          }`}
        />
      ))}
    </div>
  );
}

function FlashcardPreview() {
  return (
    <div className="relative h-20 w-32">
      <div className="absolute inset-0 rotate-6 rounded-lg border border-(--line) bg-(--bg-elevated) shadow-(--shadow)" />
      <div className="absolute inset-0 -rotate-3 rounded-lg border border-(--line) bg-(--bg-elevated) shadow-(--shadow)" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-(--line) bg-(--bg-elevated) shadow-(--shadow)">
        <span className="text-sm font-bold text-foreground">Hello</span>
        <span className="h-px w-10 bg-(--line)" />
        <span className="text-[10px] text-(--ink-faint)">Hola</span>
      </div>
    </div>
  );
}

function MapPreview() {
  const cols = 10;
  const rows = 4;
  return (
    <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {Array.from({ length: cols * rows }).map((_, i) => {
        const row = Math.floor(i / cols);
        const inWindow = row === 1 || row === 2;
        return <span key={i} className={`${DOT} ${inWindow ? "bg-(--brand)" : "bg-(--line-strong)"}`} />;
      })}
    </div>
  );
}

function PublishPreview() {
  const tiles = [
    { gradient: "from-rose-500 to-red-500", path: "M8 5v14l11-7z" },
    {
      gradient: "from-fuchsia-500 to-pink-500",
      path: "M4 8a2 2 0 0 1 2-2h1l1-1.5h4L13 6h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",
    },
    { gradient: "from-sky-500 to-blue-600", path: "M4 6h16M4 12h16M4 18h10" },
  ];
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-1.5">
        {tiles.map((tile, i) => (
          <span
            key={i}
            className={`flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br text-white ${tile.gradient}`}
          >
            <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor" aria-hidden="true">
              <path d={tile.path} />
            </svg>
          </span>
        ))}
      </div>
      <svg viewBox="0 0 40 60" className="h-14 w-8 text-(--line-strong)" aria-hidden="true">
        <path d="M2 8h20M2 30h20M2 52h20" stroke="currentColor" strokeWidth={1.5} fill="none" strokeDasharray="2 3" />
      </svg>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-(--brand) text-(--brand-foreground) shadow-(--shadow)">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <path d="m3 12 18-8-8 18-2-8-8-2Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

const PREVIEWS: Record<string, () => React.ReactNode> = {
  "academia-fabo": CodeEditorPreview,
  "gestor-tareas": KanbanPreview,
  "gimnasio-stats": ChartPreview,
  "ingles-flashcards": FlashcardPreview,
  "ventana-10-40": MapPreview,
  "publicador-redes": PublishPreview,
};

export function ProjectPreview({ id, gradient }: { id: string; gradient: string }) {
  const Illustration = PREVIEWS[id];

  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-(--line) bg-(--bg-sunken)">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className={`pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-25 blur-2xl ${gradient}`}
        aria-hidden="true"
      />
      <div className="relative">{Illustration ? <Illustration /> : null}</div>
    </div>
  );
}
