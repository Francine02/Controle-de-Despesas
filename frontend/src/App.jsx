import { Login } from "./pages/Login"
import { CreateAcount } from "./pages/CreateAcount"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  // Verifica se o token JWT existe no localStorage
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<CreateAcount />} />
        <Route
          path="/expense/all"
          element={isAuthenticated ? <Home /> : <Navigate to="/auth/login" />} //Rota protegida. Verifica se existe um token no localStorage para assim liberar o home ou mandar de volta para o login
        />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  )
}

export default App
