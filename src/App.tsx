import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';

// Buyer pages
import BuyerDashboard from './pages/buyer/Dashboard';
import BuyerPipeline from './pages/buyer/Pipeline';
import BuyerOpportunities from './pages/buyer/Opportunities';
import BuyerConversations from './pages/buyer/Conversations';
import BuyerTasks from './pages/buyer/Tasks';
import BuyerAppointments from './pages/buyer/Appointments';
import BuyerVehicles from './pages/buyer/Vehicles';
import BuyerSellers from './pages/buyer/Sellers';

// Manager pages
import ManagerDashboard from './pages/manager/Dashboard';
import ManagerReports from './pages/manager/Reports';
import ManagerTeam from './pages/manager/Team';
import ManagerTemplates from './pages/manager/Templates';
import ManagerSettings from './pages/manager/Settings';
import ManagerIntegrations from './pages/manager/Integrations';
import ManagerBilling from './pages/manager/Billing';

// Appraisal pages
import AppraisalDashboard from './pages/appraisal/Dashboard';
import AppraisalAppraisals from './pages/appraisal/Appraisals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          
          {/* Buyer Routes */}
          <Route path="buyer" element={<BuyerDashboard />} />
          <Route path="buyer/pipeline" element={<BuyerPipeline />} />
          <Route path="buyer/opportunities" element={<BuyerOpportunities />} />
          <Route path="buyer/conversations" element={<BuyerConversations />} />
          <Route path="buyer/tasks" element={<BuyerTasks />} />
          <Route path="buyer/appointments" element={<BuyerAppointments />} />
          <Route path="buyer/vehicles" element={<BuyerVehicles />} />
          <Route path="buyer/sellers" element={<BuyerSellers />} />
          
          {/* Manager Routes */}
          <Route path="manager" element={<ManagerDashboard />} />
          <Route path="manager/reports" element={<ManagerReports />} />
          <Route path="manager/team" element={<ManagerTeam />} />
          <Route path="manager/templates" element={<ManagerTemplates />} />
          <Route path="manager/settings" element={<ManagerSettings />} />
          <Route path="manager/integrations" element={<ManagerIntegrations />} />
          <Route path="manager/billing" element={<ManagerBilling />} />
          
          {/* Appraisal Routes */}
          <Route path="appraisal" element={<AppraisalDashboard />} />
          <Route path="appraisal/appraisals" element={<AppraisalAppraisals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
