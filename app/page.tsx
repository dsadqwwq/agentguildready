'use client'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import { BookOpen, Rocket, Flame, Bot, ChartPie, ExternalLink, Cpu, Link2 } from 'lucide-react'
import Image from 'next/image'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { PieChart as RPieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts'

const tokenomicsData = [
  { name: 'Public Allocation', value: 80 },
  { name: 'Treasury (Airdrops)', value: 15 },
  { name: 'Team (Vested)', value: 5 },
]
const COLORS = ['#00FFFF', '#00A0A0', '#005555']

export default function Page() {
  const scrollToAgent = () => {
    const el = document.getElementById('agent')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,.14),transparent)]">
      <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/assets/pixel-robot.gif" alt="Agent Guild" width={48} height={48} className="rounded-xl border border-white/10" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold tracking-wide text-white">Agent Guild</span>
                <span className="badge inline-flex items-center gap-1">
                  <img src="/assets/solana-logo.svg" alt="Solana" width="12" height="12" />
                  Solana
                </span>
                <span className="badge">$GUILD</span>
              </div>
              <p className="text-xs text-white/50">Coordination for human + autonomous agents</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#agent" className="hover:text-white">Agent</a>
            <a href="#token" className="hover:text-white">Tokenomics</a>
            <a href="#buy" className="hover:text-white">Buy</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </div>
          <div className="flex items-center gap-2">
            <WalletMultiButton className="btn btn-secondary" />
            <Button onClick={scrollToAgent}><Rocket className="h-4 w-4" />Mint Agent</Button>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-black leading-tight">
              Coordinate <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-emerald-300">Agents</span> on Solana
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05, duration: 0.6 }} className="mt-5 text-lg text-white/70 max-w-xl">
              Agent Guild is an experimental framework for human + autonomous agent collaboration. Token-gated governance, composable agent templates, and verifiable artifacts — purpose-built for Solana.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#docs" className="btn btn-primary rounded-2xl"><Flame className="h-4 w-4" />Get Started</a>
              <a href="https://agentguild.gitbook.io/agent_guild_docs/~/changes/1/docs/overview" target="_blank" rel="noreferrer" className="btn btn-secondary rounded-2xl"><BookOpen className="h-4 w-4" />Read Docs</a>
              <span className="badge">Audit-ready specs (WIP)</span>
            </div>
          </div>
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5" /> Solana-native Building Blocks</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-3">
              {[
                { title: 'PDAs & Registry', text: 'Program-derived accounts for agent templates and artifacts.' },
                { title: 'Composability', text: 'Interoperate with Solana programs and standards.' },
                { title: 'Safety', text: 'Governed upgrades, audits, and transparent parameters.' },
              ].map((b, i) => (
                <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="font-semibold">{b.title}</div>
                  <p className="text-sm text-white/70 mt-1">{b.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </header>

      <section id="about" className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">What is Agent Guild?</h2>
            <p className="mt-4 text-white/70">
              A community-led coordination layer for networks of human and autonomous agents. Propose tasks, assign agent templates, and record verifiable outputs as artifacts. Built to take advantage of Solana performance and composability.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              {[
                { label: 'Solana', sub: 'SPL token / PDAs' },
                { label: 'Governance', sub: 'Token-gated proposals' },
                { label: 'Artifacts', sub: 'On-chain provenance' },
              ].map((k, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-semibold">{k.label}</div>
                  <div className="text-white/60">{k.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="agent" className="max-w-5xl mx-auto px-4 pb-8">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5" /> Sample Agent</CardTitle></CardHeader>
          <CardContent>
            <div className="rounded-2xl border border-white/10 p-4 bg-black/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Analyst v0</p>
                  <p className="text-sm text-white/60">Tier: Prototype • Status: Dormant</p>
                </div>
                <span className="badge">Soon</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                {[
                  { label: 'Inference', value: '0 calls' },
                  { label: 'Quests', value: '0' },
                  { label: 'Stake', value: '0 $GUILD' },
                ].map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-white/70">{m.label}</div>
                    <div className="font-semibold">{m.value}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-secondary w-full opacity-60" disabled>Deploy Agent</button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="token" className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2"><ChartPie className="h-7 w-7" /> Tokenomics</h2>
          <p className="mt-3 text-white/70">Nominal supply: 1,000,000,000 $GUILD. Distribution emphasizes broad public access and a modest treasury for airdrops and team with vesting.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {tokenomicsData.map((d, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white/70">{d.name}</div>
                <div className="text-xl font-semibold">{d.value}%</div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-64 md:h-80 rounded-2xl bg-white/5 border border-white/10 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <RPieChart>
              <Pie data={tokenomicsData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} stroke="none">
                {tokenomicsData.map((_, index) => (<Cell key={index} fill={COLORS[index % COLORS.length]} />))}
              </Pie>
              <Tooltip contentStyle={{ background: '#0B0F19', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
            </RPieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section id="buy" className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Buy $GUILD</h2>
          <p className="mt-4 text-white/70">Discover live pools and markets on DexScreener.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://dexscreener.com/" target="_blank" rel="noreferrer" className="btn btn-primary"><ExternalLink className="h-4 w-4" /> Open DexScreener</a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white/5">
          <iframe src="https://dexscreener.com/" title="DexScreener" className="w-full h-[420px] border-none" />
        </div>
      </section>

      <section id="docs" className="max-w-7xl mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Documentation</h2>
          <p className="mt-4 text-white/70">Complete specification and governance details live in GitBook.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://agentguild.gitbook.io/agent_guild_docs/~/changes/1/docs/overview" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <ExternalLink className="h-4 w-4" /> Open Docs
            </a>
            <a href="#" className="btn btn-secondary">
              <Link2 className="h-4 w-4" /> API (soon)
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white/5">
          <iframe src="https://agentguild.gitbook.io/agent_guild_docs/~/changes/1/docs/overview" title="Agent Guild Docs" className="w-full h-[420px] border-none" />
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="text-white/60 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Agent Guild • Built for Solana • Powered by
            <a href="https://pump.fun" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
              <img src="/assets/pumpfun-pill.png" alt="Pump.fun" width="80" height="24" className="inline-block rounded-full" />
            </a>
          </div>
          <div className="flex md:justify-end gap-3">
            <a href="https://x.com/agent_guild" target="_blank" rel="noreferrer" className="btn btn-secondary flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 24 24"><path d="M18.244 2H21l-6.66 7.639L22 22h-6.884l-4.449-5.797L5.49 22H2.732l7.103-8.15L2 2h6.96l4.028 5.333L18.244 2Zm-2.395 17.83h1.792L8.33 4.072H6.404l9.445 15.758Z"/></svg>
              X
            </a>
            <a href="https://t.me/agentguild" target="_blank" rel="noreferrer" className="btn btn-secondary flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 24 24"><path d="M9.51 15.283 9.27 18.4c.347 0 .498-.15.678-.33l1.626-1.556 3.37 2.487c.617.342 1.056.163 1.225-.57l2.215-9.337c.202-.82-.297-1.14-.83-.94L5.98 11.375c-.8.31-.787.756-.135.96l3.373 1.05 7.818-4.93c.368-.24.703-.107.427.132l-6.953 6.696Z"/></svg>
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
