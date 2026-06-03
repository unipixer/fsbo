import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Pipeline from './pages/Pipeline';
import Opportunities from './pages/Opportunities';
import Conversations from './pages/Conversations';
import Tasks from './pages/Tasks';
import Appointments from './pages/Appointments';
import Appraisals from './pages/Appraisals';
import Vehicles from './pages/Vehicles';
import Sellers from './pages/Sellers';
import Reports from './pages/Reports';
import Team from './pages/Team';
import Templates from './pages/Templates';
import Settings from './pages/Settings';
import Integrations from './pages/Integrations';
import Billing from './pages/Billing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="conversations" element={<Conversations />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="appraisals" element={<Appraisals />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="team" element={<Team />} />
          <Route path="templates" element={<Templates />} />
          <Route path="settings" element={<Settings />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
