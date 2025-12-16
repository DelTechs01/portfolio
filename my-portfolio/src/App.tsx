import { useState, useEffect } from 'react';
import { Route, Router, Switch, useLocation } from 'wouter';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
import { caseStudiesData } from './data/caseStudies';

function App() {
  const [location, setLocation] = useLocation();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    
    if (projectId && caseStudiesData.find(p => p.id === projectId)) {
      setSelectedProject(projectId);
    } else {
      setSelectedProject(null);
    }
  }, [location]);

  const handleSelectProject = (id: string) => {
    setSelectedProject(id);
    setLocation(`/?project=${id}`);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
    setLocation('/');
  };

  const currentProject = selectedProject 
    ? caseStudiesData.find(p => p.id === selectedProject)
    : null;

  return (
    <Router base="/">
      <Switch>
        <Route path="/">
          {currentProject ? (
            <CaseStudy 
              project={currentProject} 
              onBack={handleBackToPortfolio} 
            />
          ) : (
            <Portfolio onSelectProject={handleSelectProject} />
          )}
        </Route>
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-muted-foreground mb-6">Page not found</p>
              <button
                onClick={() => setLocation('/')}
                className="text-primary hover:underline"
              >
                Go back home
              </button>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;