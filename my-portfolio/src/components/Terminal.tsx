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
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => string> = {
    help: () => `Available commands:
  about       - Learn about Kweyu Delron
  skills      - View technical skills
  education   - Display education history
  certs       - Show certifications
  contact     - Get contact information
  projects    - List featured projects
  clear       - Clear terminal screen
  whoami      - Display current user`,

    about: () => `Kweyu Delron - Software Engineering Student & Backend Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Specializations: Backend Development, Networking, Cybersecurity, Blockchain
Location: Kenya
Experience: IT Support & Network Engineering
Passion: Building secure, scalable, and efficient systems`,

    skills: () => `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Programming & Development:
  Python (Flask, Django), PHP, JavaScript (React, Node.js), Java, SQL, HTML, CSS

Backend & Database:
  RESTful API Development, Database Management (MySQL, PostgreSQL), Authentication & User Management

Networking & IT Support:
  Network Setup & Configuration, Troubleshooting, Server Maintenance, IT Support

Cybersecurity:
  System & Network Security, Vulnerability Assessment, Secure Coding Practices

Emerging Technologies:
  Blockchain Fundamentals & Applications, AI Integration, Automation

Tools & Platforms:
  Git/GitHub, NetBeans, VS Code, Kali Linux, Windows & Linux Administration, Figma (UI/UX Design)`,

    education: () => `Education:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
B.Sc. Software Engineering - Kirinyaga University
  GPA: 3.5/4.0 | Specialization: Backend Development & Networking`,

    certs: () => `Certifications:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Certified Mobile Apllication Tester
✓ BlockChain Fundamentals
✓ Injective Developer Certificate
✓ Power Learn Project(PLP) Certificate`,

    contact: () => `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    kweyudelron37@gmail.com.com
Phone:    +254 708821843
GitHub:   https://github.com/DelTechs01
LinkedIn: linkedin.com/in/kweyudelron`,

    projects: () => `Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. UniConnectKE - University Social Platform
   Tech: React, Flask, PostgreSQL
   Description: Connects Kenyan university students, supports verified communities, and social features

2. AI-Powered Learning Platform
   Tech: Python, Flask, AI Integration
   Description: Personalized AI tutor delivering daily learning content

3. M-Pesa Integrated E-Commerce System
   Tech: PHP, HTML, CSS, JS
   Description: Realistic payment system integrated with M-Pesa API`,

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

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <Card className="bg-black/95 border-primary/20 overflow-hidden">
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-muted-foreground ml-4">portfolio-terminal</span>
      </div>

      <div className="p-4 font-mono text-sm h-96 overflow-y-auto">
        {history.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className={item.type === 'input' ? 'text-green-400' : 'text-gray-300 whitespace-pre-wrap'}
          >
            {item.content}
          </motion.div>
        ))}

        <div className="flex items-center gap-2 text-green-400">
          <span>$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-green-400"
            autoFocus
            spellCheck={false}
          />
        </div>

        <div ref={terminalEndRef} />
      </div>
    </Card>
  );
};

export default Terminal;
