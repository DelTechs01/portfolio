import { useEffect } from 'react';
import { Route, Router, Switch, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import AccessibilityControls from '@/components/AccessibilityControls';
import AIAssistant from '@/components/AIAssistant';
import PersonalizationEngine from '@/components/PersonalizationEngine';
import Portfolio from '@/components/Portfolio';
import CaseStudy from '@/components/CaseStudy';
import Education from '@/components/Education';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import { caseStudiesData } from '@/data/caseStudies';

function NotFound({ onHome }: { onHome: () => void }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Page not found</p>
        <button onClick={onHome} className="text-primary hover:underline">
          Go back home
        </button>
      </div>
    </div>
  );
}

function App() {
  const [location, setLocation] = useLocation();

  // Always start a new page at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleSelectProject = (id: string) => setLocation(`/case-studies/${id}`);
  const goHome = () => setLocation('/');

  return (
    <Router base="/">
      {/* Persistent chrome — rendered outside the transition so it never unmounts */}
      <Navbar />
      <AccessibilityControls />
      <AIAssistant />
      <PersonalizationEngine />
      <BackToTop />

      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Switch location={location}>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/case-studies">
              <CaseStudies onSelectProject={handleSelectProject} />
            </Route>
            <Route path="/case-studies/:id">
              {(params) => {
                const project = caseStudiesData.find((p) => p.id === params.id);
                return project ? (
                  <CaseStudy project={project} onBack={() => setLocation('/case-studies')} />
                ) : (
                  <NotFound onHome={goHome} />
                );
              }}
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/">
              <Portfolio />
            </Route>
            <Route>
              <NotFound onHome={goHome} />
            </Route>
          </Switch>
        </motion.div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
