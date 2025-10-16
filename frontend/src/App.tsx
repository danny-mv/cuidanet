import { useState } from "react";
import "./styles/App.css";
import Registro from "./components/Registro";
import Login from "./components/Login";

function App() {
  const [currentPage, setCurrentPage] = useState<'registro' | 'login'>('registro');

  const navigateToLogin = () => {
    setCurrentPage('login');
  };

  const navigateToRegistro = () => {
    setCurrentPage('registro');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      {currentPage === 'registro' && <Registro onNavigateToLogin={navigateToLogin} />}
      {currentPage === 'login' && <Login onNavigateToRegistro={navigateToRegistro} />}
    </div>
  );
}

export default App;
