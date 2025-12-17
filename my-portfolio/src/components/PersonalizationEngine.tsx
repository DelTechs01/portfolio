import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


type VisitorType = 'developer' | 'client' | 'recruiter' | null;

interface PersonalizationEngineProps {
  onPersonalize?: (type: VisitorType) => void;
}

const PersonalizationEngine = ({ onPersonalize }: PersonalizationEngineProps) => {
  const [visitorType, setVisitorType] = useState<VisitorType>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('visitorType') as VisitorType;
    const isDismissed = localStorage.getItem('personalizationDismissed') === 'true';
    
    if (stored) {
      setVisitorType(stored);
      onPersonalize?.(stored);
    } else if (!isDismissed) {
      // Show prompt after 3 seconds
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [onPersonalize]);

  const handleSelection = (type: VisitorType) => {
    setVisitorType(type);
    setShowPrompt(false);
    if (type) {
      localStorage.setItem('visitorType', type);
      onPersonalize?.(type);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem('personalizationDismissed', 'true');
  };

  if (!showPrompt || dismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
    >
      <Card className="shadow-2xl border-2 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Personalize Your Experience</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismiss}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            I'm here to help! What brings you to my portfolio today?
          </p>
          
          <div className="grid md:grid-cols-3 gap-3">
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-start gap-2 hover:border-primary"
              onClick={() => handleSelection('developer')}
            >
              <Badge variant="secondary" className="mb-1">Developer</Badge>
              <span className="text-sm text-left">
                Exploring tech stack & architecture
              </span>
            </Button>
            
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-start gap-2 hover:border-primary"
              onClick={() => handleSelection('client')}
            >
              <Badge variant="secondary" className="mb-1">Client</Badge>
              <span className="text-sm text-left">
                Looking for development services
              </span>
            </Button>
            
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-start gap-2 hover:border-primary"
              onClick={() => handleSelection('recruiter')}
            >
              <Badge variant="secondary" className="mb-1">Recruiter</Badge>
              <span className="text-sm text-left">
                Reviewing experience & skills
              </span>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full mt-3 text-xs"
            onClick={handleDismiss}
          >
            Skip personalization
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PersonalizationEngine;