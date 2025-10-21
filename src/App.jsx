import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Documentation from './pages/Documentation';
import Labs from './pages/Labs';
import ToolsResources from './pages/ToolsResources';
import VibeToolDetail from './pages/VibeToolDetail';
import AITools from './pages/AITools';
import AIToolDetail from './pages/AIToolDetail';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/docs/*" element={<Documentation />} />
          <Route path="/labs" element={<Labs />} />
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
