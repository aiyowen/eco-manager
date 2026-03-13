
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ParkService from './pages/ParkService'
import EnterpriseService from './pages/EnterpriseService'
import DataCenter from './pages/DataCenter'
import SystemManagement from './pages/SystemManagement'
import Compliance from './pages/Compliance'
import RiskControl from './pages/RiskControl'
import CarbonManagement from './pages/CarbonManagement'
import CostReduction from './pages/CostReduction'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="park-service" element={<ParkService />} />
        <Route path="enterprise-service" element={<EnterpriseService />} />
        <Route path="data-center" element={<DataCenter />} />
        <Route path="system-management" element={<SystemManagement />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="risk-control" element={<RiskControl />} />
        <Route path="carbon-management" element={<CarbonManagement />} />
        <Route path="cost-reduction" element={<CostReduction />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App