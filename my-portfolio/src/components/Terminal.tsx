import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; content: string }>>([
    { type: 'output', content: "Welcome to Kweyu Delron's Portfolio Terminal" },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '' },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, () => string> = {
    help: () => `Available commands:
  about       - Learn about Kweyu Delron
  skills      - View technical skills
  education   - Display education history
  certs       - Show certifications
  contact     - Get contact information
  projects    - List network work and projects
  clear       - Clear terminal screen
  whoami      - Display current user`,

    about: () => `Kweyu Delron - Network Engineer & Software Engineer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Focus: Network engineering, ISP operations, software and automation
Work: Internet service provider operations
Platform: MikroTik RouterOS 7
Location: Nairobi, Kenya
Experience: 4+ years`,

    skills: () => `Skills (each backed by real work):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Network Engineering:
  MikroTik RouterOS 7, dual link load balancing, automatic failover,
  policy routing (routing tables, mangle rules, connection marks, health check scripts)
  > Raised usable capacity from 190 to 224 Mbps with no customer downtime.

Fault Diagnosis:
  Optics, VLAN, ARP, routing, packet capture
  > Diagnosed a multi provider outage and proved the fault was upstream.

Internet Service Provider Operations:
  PPPoE, hotspot, DHCP, NAT, provider escalation

Software, Automation and AI:
  React, TypeScript, Node.js, Python (Flask), PostgreSQL, REST APIs, AI agents`,

    education: () => `Education:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BSc Software Engineering - Kirinyaga University
  2022 - 2026 (in progress)`,

    certs: () => `Certifications:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Full-Stack Development (MERN) - Power Learn Project
✓ Injective: Layer 1 Blockchain - Binance Academy
✓ Crypto & Blockchain Fundamentals - Binance Academy
✓ Python & Flask Framework - Udemy
✓ Getting Started with Cisco Packet Tracer - Cisco Networking Academy`,

    contact: () => `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    kweyudelron37@gmail.com
Phone:    +254 (708) 821-843
GitHub:   https://github.com/DelTechs01
LinkedIn: https://www.linkedin.com/in/delron-kweyu-3a4060244
X:        https://x.com/BTripatakah`,

    projects: () => `Network engineering:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Dual link load balancing and automatic failover
   MikroTik RouterOS 7. Usable capacity 190 -> 224 Mbps, no customer downtime.

2. Multi provider outage diagnosis
   Optics, VLAN, ARP, routing, packet capture. Fault proven upstream.

Software:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. EastMedic HMS - Hospital Management System
   Live: https://eastmedic-hms.vercel.app

4. Constel AI - AI Agent Platform
   Live: https://zynthos-lab.vercel.app

5. Cloud SMS Engine - Bulk SMS Platform
   Live: https://cloudsmsengine.co.ke

6. MUA ODEL - University E-Learning Portal
   Live: https://odel.mua.ac.ke

7. Cloud ISP Engine - ISP Billing & Management
   Status: ISP Billing coming soon

8. CampusTribe Social - Campus Community Platform
   Status: being rehosted

Type "help" to explore more, or visit the Projects page.`,

    whoami: () => 'visitor@portfolio ~ guest user',

    clear: () => 'CLEAR_TERMINAL',
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === '') return;

    setHistory((prev) => [...prev, { type: 'input', content: `$ ${cmd}` }]);

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      if (output === 'CLEAR_TERMINAL') {
        setHistory([
          { type: 'output', content: 'Terminal cleared.' },
          { type: 'output', content: '' },
        ]);
      } else {
        setHistory((prev) => [...prev, { type: 'output', content: output }, { type: 'output', content: '' }]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'output', content: `Command not found: ${cmd}` },
        { type: 'output', content: 'Type "help" for available commands' },
        { type: 'output', content: '' },
      ]);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCommand(input);
  };

  // Keep the terminal scrolled to the newest line WITHOUT moving the page.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  return (
    <Card className="gap-0 overflow-hidden border-border bg-[oklch(0.12_0.004_240)] py-0 shadow-none">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <span className="ml-3 font-mono text-xs text-white/50">portfolio-terminal</span>
      </div>

      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        className="h-96 overflow-y-auto p-5 font-mono text-sm leading-relaxed"
      >
        {history.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className={item.type === 'input' ? 'text-[oklch(0.84_0.15_165)]' : 'text-gray-300 whitespace-pre-wrap'}
          >
            {item.content}
          </motion.div>
        ))}

        <div className="flex items-center gap-2 text-[oklch(0.84_0.15_165)]">
          <span>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Terminal command"
            autoCapitalize="off"
            autoComplete="off"
            className="flex-1 min-w-0 bg-transparent outline-none text-[oklch(0.84_0.15_165)] caret-[oklch(0.84_0.15_165)]"
            spellCheck={false}
          />
        </div>
      </div>
    </Card>
  );
};

export default Terminal;
