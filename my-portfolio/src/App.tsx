import { Suspense, lazy, useEffect } from 'react';
import { Route, Router, Switch, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import AccessibilityControls from '@/components/AccessibilityControls';
import AIAssistant from '@/components/AIAssistant';
import PersonalizationEngine from '@/components/PersonalizationEngine';
import { caseStudiesData } from '@/data/caseStudies';

// Route-level code splitting  each page ships as its own chunk.
const Portfolio = lazy(() => import('@/components/Portfolio'));
const CaseStudy = lazy(() => import('@/components/CaseStudy'));
const Education = lazy(() => import('@/components/Education'));
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const CaseStudies = lazy(() => import('@/components/CaseStudies'));
const Services = lazy(() => import('@/components/Services'));
const Contact = lazy(() => import('@/components/Contact'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  );
}

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

  const goHome = () => setLocation('/');

  return (
    <Router base="/">
      {/* Persistent chrome  rendered outside the transition so it never unmounts */}
      <Navbar />
      <AccessibilityControls />
      <AIAssistant />
      <PersonalizationEngine />
      <BackToTop />

      <Suspense fallback={<PageLoader />}>
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
              <Route path="/projects">
                <CaseStudies />
              </Route>
              <Route path="/projects/:id">
                {(params) => {
                  const project = caseStudiesData.find((p) => p.id === params.id);
                  return project ? (
                    <CaseStudy project={project} onBack={() => setLocation('/projects')} />
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
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
