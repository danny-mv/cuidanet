import { useState } from 'react';

interface LoginProps {
  onNavigateToRegistro: () => void;
}

const Login = ({ onNavigateToRegistro }: LoginProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del login:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-gray-200 dark:border-gray-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="text-primary h-6 w-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h1 className="text-xl font-bold">HealthConnect</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Inicio</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Servicios</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Contacto</a>
            </nav>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Iniciar sesión
              </button>
              <button 
                onClick={onNavigateToRegistro}
                className="hidden sm:block px-4 py-2 text-sm font-bold bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600/50 transition-colors"
              >
                Regístrate
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">Bienvenido de nuevo</h2>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 shadow-xl rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium" htmlFor="email">Correo electrónico o nombre de usuario</label>
                <input 
                  autoComplete="email" 
                  className="mt-2 form-input appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
                  id="email" 
                  name="email" 
                  required 
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="password">Contraseña</label>
                <input 
                  autoComplete="current-password" 
                  className="mt-2 form-input appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
                  id="password" 
                  name="password" 
                  required 
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 rounded-sm bg-gray-200 dark:bg-gray-700" 
                    id="rememberMe" 
                    name="rememberMe" 
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label className="ml-2 block text-sm" htmlFor="rememberMe">Recuérdame</label>
                </div>
                <div className="text-sm">
                  <a className="font-medium text-primary hover:text-primary/90" href="#">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
              <div>
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;