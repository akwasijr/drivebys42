import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ModernLanding from './pages/ModernLanding';
import Documentation from './pages/Documentation';
import ToolsResources from './pages/ToolsResources';
import VibeToolDetail from './pages/VibeToolDetail';
import AITools from './pages/AITools';
import AIToolDetail from './pages/AIToolDetail';
import AIEvals from './pages/AIEvals';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Router>
        <Routes>
          <Route path="/" element={<ModernLanding />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/docs/*" element={<Documentation />} />
          <Route path="/ai-evals" element={<AIEvals />} />
          <Route path="/tools" element={<ToolsResources />} />
          <Route path="/tools/:toolId" element={<VibeToolDetail />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/ai-tools/:toolId" element={<AIToolDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
