import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Eye, Contrast, Minus, Plus, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';

const AccessibilityControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const storedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const storedHighContrast = localStorage.getItem('highContrast') === 'true';
    const storedFontSize = parseInt(localStorage.getItem('fontSize') || '100');

    setReducedMotion(storedReducedMotion);
    setHighContrast(storedHighContrast);
    setFontSize(storedFontSize);

    if (storedReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    }
    if (storedHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    document.documentElement.style.fontSize = `${storedFontSize}%`;
  }, []);

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('reducedMotion', newValue.toString());
    
    if (newValue) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const handleFontSizeChange = (value: number[]) => {
    const newSize = value[0];
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize.toString());
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetSettings = () => {
    setReducedMotion(false);
    setHighContrast(false);
    setFontSize(100);
    
    localStorage.removeItem('reducedMotion');
    localStorage.removeItem('highContrast');
    localStorage.removeItem('fontSize');
    
    document.documentElement.classList.remove('reduce-motion', 'high-contrast');
    document.documentElement.style.fontSize = '100%';
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-24 right-8 z-50 w-80 max-w-[calc(100vw-2rem)]"
          >
            <Card className="shadow-2xl border-2">
              <CardHeader className="bg-accent text-accent-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <CardTitle className="text-lg">Accessibility</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-accent-foreground hover:bg-accent-foreground/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reduced-motion" className="text-base font-semibold">
                      Reduce Motion
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Minimize animations
                    </p>
                  </div>
                  <Switch
                    id="reduced-motion"
                    checked={reducedMotion}
                    onCheckedChange={toggleReducedMotion}
                  />
                </div>

                <Separator />

                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="high-contrast" className="text-base font-semibold">
                      High Contrast
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Increase color contrast
                    </p>
                  </div>
                  <Switch
                    id="high-contrast"
                    checked={highContrast}
                    onCheckedChange={toggleHighContrast}
                  />
                </div>

                <Separator />

                {/* Font Size */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="font-size" className="text-base font-semibold">
                      Text Size
                    </Label>
                    <span className="text-sm text-muted-foreground">{fontSize}%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleFontSizeChange([Math.max(80, fontSize - 10)])}
                      disabled={fontSize <= 80}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Slider
                      id="font-size"
                      value={[fontSize]}
                      onValueChange={handleFontSizeChange}
                      min={80}
                      max={150}
                      step={10}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleFontSizeChange([Math.min(150, fontSize + 10)])}
                      disabled={fontSize >= 150}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Reset Button */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={resetSettings}
                >
                  Reset to Defaults
                </Button>

                {/* Info */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">
                    This site is designed to meet WCAG 2.1 AA standards. For additional assistance, please contact us.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed top-20 right-8 z-40"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full shadow-lg"
          aria-label="Accessibility Settings"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </motion.div>
    </>
  );
};

export default AccessibilityControls;