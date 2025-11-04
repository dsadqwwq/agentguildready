'use client';
import * as React from 'react';
type Tab = { id: string; label: string; content: React.ReactNode };
export function Tabs({ tabs, defaultId }: { tabs: Tab[]; defaultId?: string }) {
  const [active, setActive] = React.useState(defaultId || tabs[0]?.id);
  return (
    <div>
      <div className="inline-flex rounded-xl bg-white/10 p-1 border border-white/10">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)}
            className={`px-3 py-1.5 rounded-lg text-sm ${active===t.id ? 'bg-white text-black' : 'text-white/80 hover:bg-white/10'}`}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-6">{tabs.map(t => active===t.id && <div key={t.id}>{t.content}</div>)}</div>
    </div>
  );
}
