import { useState } from 'react';
import { addUser, getUsers } from '../lib/dummy-data';

interface RegistroProps {
  onNavigateToLogin: () => void;
}

const Registro = ({ onNavigateToLogin }: RegistroProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    userType: 'paciente' as 'paciente' | 'profesional'
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = getUsers();
    if (users.find(user => user.email === formData.email)) {
      alert('El correo electrónico ya está en uso.');
      return;
    }
    addUser(formData);
    setRegistrationSuccess(true);
  };

  const handleLoginNavigation = () => {
    onNavigateToLogin();
  };

  if (registrationSuccess) {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden text-slate-800 dark:text-slate-200">
        <div className="flex h-full grow flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">¡Registro exitoso!</h2>
          <p className="mb-4">Ahora puedes iniciar sesión con tu nueva cuenta.</p>
          <button onClick={handleLoginNavigation} className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors cursor-pointer">
            Ir a Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden text-slate-800 dark:text-slate-200">
      <div className="flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200/80 dark:border-slate-800/80 px-10 py-4">
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h1 className="text-xl font-bold">HealthConnect</h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a className="hover:text-primary transition-colors" href="#">Inicio</a>
              <a className="hover:text-primary transition-colors" href="#">Servicios</a>
              <a className="hover:text-primary transition-colors" href="#">Contacto</a>
            </nav>
            <button onClick={handleLoginNavigation} className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors cursor-pointer">
              <span>Iniciar Sesión</span>
            </button>
          </div>
        </header>
        <main className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Crear una cuenta</h2>
              <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
                ¿Ya tienes una cuenta?
                <button onClick={handleLoginNavigation} className="font-medium text-primary hover:text-primary/90 underline cursor-pointer bg-transparent border-none p-0 inline"> Inicia sesión </button>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4 rounded-lg">
                <div>
                  <label className="sr-only" htmlFor="register-fullName">Nombre completo</label>
                  <input 
                    className="relative block w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-3 py-3 placeholder-slate-500 dark:placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                    id="register-fullName" 
                    name="fullName" 
                    placeholder="Nombre completo" 
                    required 
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="register-email">Correo electrónico</label>
                  <input 
                    autoComplete="email" 
                    className="relative block w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-3 py-3 placeholder-slate-500 dark:placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                    id="register-email" 
                    name="email" 
                    placeholder="Correo electrónico" 
                    required 
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="register-password">Contraseña</label>
                  <input 
                    autoComplete="current-password" 
                    className="relative block w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-3 py-3 placeholder-slate-500 dark:placeholder-slate-400 text-slate-900 dark:text-white focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" 
                    id="register-password" 
                    name="password" 
                    placeholder="Contraseña" 
                    required 
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <fieldset>
                <legend className="sr-only">Tipo de usuario</legend>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input 
                      className="peer hidden" 
                      id="register-paciente" 
                      name="userType" 
                      type="radio" 
                      value="paciente"
                      checked={formData.userType === 'paciente'}
                      onChange={handleInputChange}
                    />
                    <label className="flex cursor-pointer items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 p-3 text-slate-700 dark:text-slate-300 ring-2 ring-transparent transition-all peer-checked:ring-primary peer-checked:text-primary" htmlFor="register-paciente">
                      <p className="font-medium">Paciente</p>
                    </label>
                  </div>
                  <div className="flex-1">
                    <input 
                      className="peer hidden" 
                      id="register-profesional" 
                      name="userType" 
                      type="radio" 
                      value="profesional"
                      checked={formData.userType === 'profesional'}
                      onChange={handleInputChange}
                    />
                    <label className="flex cursor-pointer items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 p-3 text-slate-700 dark:text-slate-300 ring-2 ring-transparent transition-all peer-checked:ring-primary peer-checked:text-primary" htmlFor="register-profesional">
                      <p className="font-medium">Profesional</p>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div>
                <button className="group relative flex w-full justify-center rounded-lg border border-transparent bg-primary py-3 px-4 text-sm font-bold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="submit">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Registro;