import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import MarketplaceSearches from './pages/buyer/MarketplaceSearches';
import FollowUps from './pages/buyer/FollowUps';
import Performance from './pages/buyer/Performance';
import BuyerSettings from './pages/buyer/Settings';

// Manager pages
import ManagerDashboard from './pages/manager/ManagerDashboard';
import ManagerReports from './pages/manager/Reports';
import ManagerTeam from './pages/manager/Team';
import ManagerTemplates from './pages/manager/Templates';
import ManagerSettings from './pages/manager/Settings';
import ManagerIntegrations from './pages/manager/Integrations';
import ManagerBilling from './pages/manager/Billing';
import TeamBoard from './pages/manager/TeamBoard';
import StuckWork from './pages/manager/StuckWork';
import AllOpportunities from './pages/manager/AllOpportunities';
import Assignments from './pages/manager/Assignments';
import Buyers from './pages/manager/Buyers';
import Appraisers from './pages/manager/Appraisers';

// Appraisal pages
import AppraisalDashboard from './pages/appraisal/Dashboard';
import AppraisalAppraisals from './pages/appraisal/Appraisals';
import Requested from './pages/appraisal/Requested';
import NeedsInfo from './pages/appraisal/NeedsInfo';
import Approved from './pages/appraisal/Approved';
import Rejected from './pages/appraisal/Rejected';
import VehiclePackets from './pages/appraisal/VehiclePackets';
import ValuationHistory from './pages/appraisal/ValuationHistory';
import Metrics from './pages/appraisal/Metrics';
import AppraisalSettings from './pages/appraisal/Settings';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Buyer Routes - Protected for buyer role with BuyerLayout */}
          <Route path="/buyer" element={
            <ProtectedRoute allowedRoles={['buyer']}>
              <BuyerLayout />
            </ProtectedRoute>
          }>
            <Route index element={<BuyerDashboard />} />
            <Route path="marketplace-searches" element={<MarketplaceSearches />} />
            <Route path="pipeline" element={<BuyerPipeline />} />
            <Route path="opportunities" element={<BuyerOpportunities />} />
            <Route path="follow-ups" element={<FollowUps />} />
            <Route path="templates" element={<BuyerTasks />} />
            <Route path="appointments" element={<BuyerAppointments />} />
            <Route path="performance" element={<Performance />} />
            <Route path="settings" element={<BuyerSettings />} />
            <Route path="conversations" element={<BuyerConversations />} />
            <Route path="tasks" element={<BuyerTasks />} />
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
            <Route path="team-board" element={<TeamBoard />} />
            <Route path="pipeline" element={<ManagerTeam />} />
            <Route path="stuck-work" element={<StuckWork />} />
            <Route path="all-opportunities" element={<AllOpportunities />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="reports" element={<ManagerReports />} />
            <Route path="buyers" element={<Buyers />} />
            <Route path="appraisers" element={<Appraisers />} />
            <Route path="templates" element={<ManagerTemplates />} />
            <Route path="settings" element={<ManagerSettings />} />
            <Route path="team" element={<ManagerTeam />} />
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
            <Route path="requested" element={<Requested />} />
            <Route path="needs-info" element={<NeedsInfo />} />
            <Route path="approved" element={<Approved />} />
            <Route path="rejected" element={<Rejected />} />
            <Route path="vehicle-packets" element={<VehiclePackets />} />
            <Route path="valuation-history" element={<ValuationHistory />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path="settings" element={<AppraisalSettings />} />
            <Route path="appraisals" element={<AppraisalAppraisals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
