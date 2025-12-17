'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Kweyu's AI assistant. I can help you learn about his skills, projects, experience, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "What are Kweyu's top skills?",
    'Tell me about his projects',
    'What services does he offer?',
    'How can I contact him?',
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'].some((greet) =>
        lowerMessage.includes(greet)
      )
    ) {
      return "Hello! 👋 I'm Kweyu's AI assistant. How can I help you today?";
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
      return 'Kweyu excels in Full-Stack Development using React, TypeScript, Node.js, Python (Django/Flask), AI/ML integration, and cybersecurity. He has 3+ years building secure, scalable apps with modern tools like AWS, Docker, TensorFlow, and M-Pesa integrations.';
    }

    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      return `Here are some of Kweyu's standout projects:\n\n• **UniConnectKE** – Social platform for Kenyan university students\n• **AI Learning Platform** – Personalized training with adaptive AI\n• **M-Pesa E-Commerce** – Secure online store with mobile payments\n• **Cybersecurity Audit Tool** – Automated vulnerability scanner`;
    }

    if (lowerMessage.includes('service') || lowerMessage.includes('hire') || lowerMessage.includes('offer')) {
      return 'Kweyu offers:\n• Custom Web & Mobile Development\n• AI/ML Integration & Consulting\n• E-Commerce with M-Pesa\n• Cybersecurity Audits & Hardening\n\nRates start from Ksh3,000 for small tasks. Full projects priced by scope.';
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return 'You can reach Kweyu via:\n📧 kweyudelron37@gmail.com\n📱 +254 708 821 843\n\nHe typically responds within 24 hours.';
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning')) {
      return 'Kweyu has deep AI/ML expertise with TensorFlow, PyTorch, LangChain, OpenAI APIs, and Hugging Face. He builds recommendation systems, NLP tools, chatbots, and predictive analytics.';
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return 'Kweyu has 3+ years as a Full-Stack & AI Developer. He’s pursuing a B.S. in Software Engineering at Kirinyaga University and holds multiple certifications in AWS, Google Cloud, Ethical Hacking, and TensorFlow.';
    }

    return "That's an interesting question! Feel free to explore the portfolio sections or send a direct message for more personalized details. 😊";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickQuestion = (question: string) => {
    setMessages((prev) => [...prev, { role: 'user', content: question }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(question);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] rounded-2xl shadow-2xl"
          >
            <Card className="overflow-hidden border-none shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6" />
                    <CardTitle className="text-xl">AI Assistant</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-white/20"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <Badge variant="secondary" className="mt-2 w-fit">
                  Powered by Intelligence
                </Badge>
              </CardHeader>

              <CardContent className="p-0 flex flex-col h-96">
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role === 'assistant' && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Bot className="h-5 w-5 text-primary" />
                        </div>
                      )}

                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {message.content}
                      </div>

                      {message.role === 'user' && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <User className="h-5 w-5 text-accent-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                      <div className="rounded-2xl bg-muted px-4 py-3">
                        <div className="flex space-x-1">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: '0ms' }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: '150ms' }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {messages.length === 1 && (
                  <div className="border-t border-border px-4 py-3">
                    <p className="mb-3 text-xs font-medium text-muted-foreground">Quick questions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickQuestions.map((q, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          size="sm"
                          className="h-auto py-2 text-left text-xs justify-start"
                          onClick={() => handleQuickQuestion(q)}
                        >
                          {q}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-border p-4">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button onClick={handleSend} size="icon" disabled={!input.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 rounded-full bg-primary p-4 text-primary-foreground shadow-2xl transition-shadow hover:shadow-primary/50"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </motion.button>
    </>
  );
}