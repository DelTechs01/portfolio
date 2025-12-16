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

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Kweyu's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?"
    }
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
    "Tell me about his projects",
    "What services does he offer?",
    "How can I contact him?"
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Greetings
    if (['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'].some(greet => lowerMessage.includes(greet))) {
      return "Hello! 👋 I'm Kweyu's AI assistant. How can I assist you today?";
    }

    // Skills & tech
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return "Kweyu specializes in Full-Stack Development with expertise in React, TypeScript, Node.js, Python, Django, Flask, AI/ML integration, cybersecurity, and M-Pesa payment solutions. He has 3+ years of experience building scalable and secure applications with modern tech stacks, including AWS, Docker, and TensorFlow.";
    }

    // Projects
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
      return "Kweyu has completed multiple projects, including:\n- UniConnectKE: A university social platform for Kenyan students\n- AI-Powered Learning Platform: Personalized AI-driven training system\n- M-Pesa E-Commerce System: Secure online platform with M-Pesa payments\n- Cybersecurity Audit Tool: Automated vulnerability scanning across enterprise apps";
    }

    // Services
    if (lowerMessage.includes('service') || lowerMessage.includes('hire') || lowerMessage.includes('cost')) {
      return "Kweyu offers services such as Custom Web Development (React, Node.js, Django), AI Integration & Consulting, E-Commerce Solutions with M-Pesa integration, and Cybersecurity Audits. Pricing depends on project scope, starting from Ksh3,000 for smaller tasks.";
    }

    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can contact Kweyu at kweyudelron37@.com or call +254 (708) 821-843. LinkedIn and GitHub profiles are also available for professional networking. He usually responds within 24 hours.";
    }

    // Experience & background
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return "Kweyu has 3+ years of professional experience as a Full-Stack Developer and AI/ML specialist. He has worked on university platforms, AI-driven applications, and cybersecurity projects. He holds an M.S. in Computer Science and multiple professional certifications.";
    }

    // AI/ML specialization
    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
      return "Kweyu has extensive AI/ML expertise, including TensorFlow, LangChain, OpenAI API, and Hugging Face. He has built AI-powered recommendation engines, natural language processing systems, and automated analytics platforms.";
    }

    return "That's a great question! I recommend checking out the sections on this portfolio for more details. You can also contact Kweyu directly for personalized answers.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setIsTyping(true);
    setTimeout(() => {
      const response = getAIResponse(question);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className="shadow-2xl border-2">
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <CardTitle className="text-lg">AI Assistant</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <Badge variant="secondary" className="w-fit mt-2">
                  Powered by AI
                </Badge>
              </CardHeader>

              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      <div
                        className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-accent" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                      <div className="px-4 py-2 rounded-2xl bg-muted">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {messages.length === 1 && (
                  <div className="px-4 pb-4 space-y-2">
                    <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                )}

                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask me anything..."
                      className="flex-1"
                    />
                    <Button onClick={handleSend} size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-2xl"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </Button>
      </motion.div>
    </>
  );
};

export default AIAssistant;
