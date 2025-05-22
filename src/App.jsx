import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext/authContext';
import { Home } from './pages/home';
import { ProtectedRoute } from './components/auth/protectedRoute';
import { Register } from './components/auth/register';
import { LogInComponent } from './components/auth/login';
import Dashboard from './pages/dashboard';
import CreateSoftwarePage from './pages/createSoftwarePage';
import { AdminOnly } from './components/software/adminOnly';
import SoftwareListPage from './pages/softwareListPage';
import RequestAccessPage from './pages/createRequestPage';
import MyRequestsPage from './pages/requestAccessPage';
import ManagerRequestsPage from './pages/managerRequestPage';

function App() {

  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<LogInComponent/>} />
          <Route path="/create-software" element={<AdminOnly><CreateSoftwarePage/></AdminOnly> } />
          <Route path="/software" element={<SoftwareListPage/>} />
          <Route path="/request-access" element={<ProtectedRoute> <RequestAccessPage/> </ProtectedRoute>} />
          <Route path="/my-requests" element={<ProtectedRoute> <MyRequestsPage/> </ProtectedRoute>} />
           <Route path="/manage-requests" element={<ProtectedRoute> <ManagerRequestsPage/> </ProtectedRoute>} />
          <Route path="/unauthorized" element={<h1>You are not allowed</h1>} />
        </Routes>
      </AuthContextProvider>
    </QueryClientProvider>
    </>
  )
};

export default App
