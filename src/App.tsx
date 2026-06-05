import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import BuyerLayout from './components/BuyerLayout';
import ManagerLayout from './components/ManagerLayout';
import AppraisalLayout from './components/AppraisalLayout';
import BuyerDashboard from './pages/buyer/BuyerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';

// Buyer pages
import Dashboard from './pages/Dashboard';
import BuyerPipeline from './pages/buyer/Pipeline';
import BuyerOpportunities from './pages/buyer/Opportunities';
import BuyerConversations from './pages/buyer/Conversations';
import BuyerTasks from './pages/buyer/Tasks';
import BuyerAppointments from './pages/buyer/Appointments';
import BuyerVehicles from './pages/buyer/Vehicles';
import BuyerSellers from './pages/buyer/Sellers';

// Manager pages
import ManagerDashboard from './pages/manager/ManagerDashboard';
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
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>

          {/* Buyer Routes - Protected for buyer role with BuyerLayout */}
          <Route path="/buyer" element={
            <ProtectedRoute allowedRoles={['buyer']}>
              <BuyerLayout />
            </ProtectedRoute>
          }>
            <Route index element={<BuyerDashboard />} />
            <Route path="pipeline" element={<BuyerPipeline />} />
            <Route path="opportunities" element={<BuyerOpportunities />} />
            <Route path="conversations" element={<BuyerConversations />} />
            <Route path="tasks" element={<BuyerTasks />} />
            <Route path="appointments" element={<BuyerAppointments />} />
            <Route path="vehicles" element={<BuyerVehicles />} />
            <Route path="sellers" element={<BuyerSellers />} />
          </Route>

          {/* Manager Routes - Protected for manager role with ManagerLayout */}
          <Route path="/manager" element={
            <ProtectedRoute allowedRoles={['manager']}>
              <ManagerLayout />
            </ProtectedRoute>
          }>
            <Route index element={<ManagerDashboard />} />
            <Route path="reports" element={<ManagerReports />} />
            <Route path="team" element={<ManagerTeam />} />
            <Route path="templates" element={<ManagerTemplates />} />
            <Route path="settings" element={<ManagerSettings />} />
            <Route path="integrations" element={<ManagerIntegrations />} />
            <Route path="billing" element={<ManagerBilling />} />
          </Route>

          {/* Appraisal Routes - Protected for appraisal role with AppraisalLayout */}
          <Route path="/appraisal" element={
            <ProtectedRoute allowedRoles={['appraisal']}>
              <AppraisalLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AppraisalDashboard />} />
            <Route path="appraisals" element={<AppraisalAppraisals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
