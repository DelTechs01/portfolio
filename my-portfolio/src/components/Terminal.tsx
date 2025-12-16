import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output', content: string }>>([
    { type: 'output', content: 'Welcome to Alex Thompson\'s Portfolio Terminal' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '' }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => string> = {
    help: () => `Available commands:
  about       - Learn about Alex Thompson
  skills      - View technical skills
  education   - Display education history
  certs       - Show certifications
  contact     - Get contact information
  projects    - List featured projects
  clear       - Clear terminal screen
  whoami      - Display current user`,
    
    about: () => `Alex Thompson - Full-Stack Developer & AI Enthusiast
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Experience: 5+ years
Location: San Francisco, CA
Specialization: AI Integration & Modern Web Technologies
Projects Completed: 50+
Uptime Record: 99.9%`,

    skills: () => `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend:  React (95%), TypeScript (90%), Tailwind CSS (92%)
Backend:   Node.js (90%), Python (85%), PostgreSQL (82%)
Cloud:     AWS (88%), Docker (85%), Kubernetes (75%)
AI/ML:     TensorFlow (80%), LangChain (85%), OpenAI API (90%)`,

    education: () => `Education:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
M.S. Computer Science - Stanford University (2016-2018)
  GPA: 3.9/4.0 | Specialization: AI & Machine Learning

B.S. Computer Engineering - MIT (2012-2016)
  GPA: 3.8/4.0 | Summa Cum Laude`,

    certs: () => `Professional Certifications:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ AWS Certified Solutions Architect - Professional (2024)
✓ Google Cloud Professional Cloud Architect (2023)
✓ Certified Ethical Hacker (CEH) (2022)
✓ TensorFlow Developer Certificate (2023)
✓ MongoDB Certified Developer (2023)`,

    contact: () => `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    alex@example.com
Phone:    +1 (234) 567-890
Location: San Francisco, CA
GitHub:   github.com/alexthompson
LinkedIn: linkedin.com/in/alexthompson
Response: Within 24 hours`,

    projects: () => `Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. AI-Powered E-Commerce Platform
   Tech: React, Node.js, OpenAI API
   Result: 50% revenue increase

2. Real-Time Analytics Dashboard  
   Tech: React, WebSockets, D3.js
   Result: 150x traffic handling

3. Cybersecurity Audit Tool
   Tech: Python, PostgreSQL, AWS
   Result: 95% vulnerability reduction`,

    whoami: () => 'visitor@portfolio ~ guest user',

    clear: () => 'CLEAR_TERMINAL'
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;

    setHistory(prev => [...prev, { type: 'input', content: `$ ${cmd}` }]);

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      if (output === 'CLEAR_TERMINAL') {
        setHistory([
          { type: 'output', content: 'Terminal cleared.' },
          { type: 'output', content: '' }
        ]);
      } else {
        setHistory(prev => [...prev, { type: 'output', content: output }, { type: 'output', content: '' }]);
      }
    } else {
      setHistory(prev => [...prev, 
        { type: 'output', content: `Command not found: ${cmd}` },
        { type: 'output', content: 'Type "help" for available commands' },
        { type: 'output', content: '' }
      ]);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
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