import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
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
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            
            {/* Buyer Routes - Protected for buyer role */}
            <Route path="buyer" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerDashboard />
              </ProtectedRoute>
            } />
            <Route path="buyer/pipeline" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerPipeline />
              </ProtectedRoute>
            } />
            <Route path="buyer/opportunities" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerOpportunities />
              </ProtectedRoute>
            } />
            <Route path="buyer/conversations" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerConversations />
              </ProtectedRoute>
            } />
            <Route path="buyer/tasks" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerTasks />
              </ProtectedRoute>
            } />
            <Route path="buyer/appointments" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerAppointments />
              </ProtectedRoute>
            } />
            <Route path="buyer/vehicles" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerVehicles />
              </ProtectedRoute>
            } />
            <Route path="buyer/sellers" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerSellers />
              </ProtectedRoute>
            } />
            
            {/* Manager Routes - Protected for manager role */}
            <Route path="manager" element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerDashboard />
              </ProtectedRoute>
            } />
            <Route path="manager/reports" element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerReports />
              </ProtectedRoute>
            } />
            <Route path="manager/team" element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerTeam />
              </ProtectedRoute>
            } />
            <Route path="manager/templates" element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerTemplates />
              </ProtectedRoute>
            } />
            <Route path="manager/settings" element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerSettings />
              </ProtectedRoute>
            } />
            <Route path="manager/integrations" element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerIntegrations />
              </ProtectedRoute>
            } />
            <Route path="manager/billing" element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerBilling />
              </ProtectedRoute>
            } />
            
            {/* Appraisal Routes - Protected for appraisal role */}
            <Route path="appraisal" element={
              <ProtectedRoute allowedRoles={['appraisal']}>
                <AppraisalDashboard />
              </ProtectedRoute>
            } />
            <Route path="appraisal/appraisals" element={
              <ProtectedRoute allowedRoles={['appraisal']}>
                <AppraisalAppraisals />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
