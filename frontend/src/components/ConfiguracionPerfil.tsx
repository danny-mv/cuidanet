import { useState } from 'react';

const ConfiguracionPerfil = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    nombreMostrar: '',
    especialidad: '',
    acercaDe: '',
    email: '',
    telefono: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del perfil:', formData);
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-background-light dark:bg-background-dark p-6 hidden lg:flex flex-col justify-between border-r border-gray-200 dark:border-gray-700">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <img alt="Dra. Sofia Ramirez" className="w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIusAOtnAJ_7ofkWW_Ck4tk3lcbY8Q5WD0lJ-Gus9DcrQjEE2VGLJNlaF98X0qOxMvaCLgk6ZktOU2SoIVJ4QB7ZJib2AEmzPEAH-AL6k-vSHpK7a582xQFR9UZSO360vEjoiqXqZtMTvWVRsGfY6wqN7gwdyr36pXaYY0UWiABKbTTYo9MzfZbCihEqcnCbj-VF7UpqzQB8skUilF7tOOYZHyIMth-e3_agJWsmn72a6r12UKw6JzfFigY3PTGV3AsAyratXShg"/>
            <div>
              <h1 className="font-bold text-lg text-gray-900 dark:text-white">Dra. Sofia Ramirez</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Medicina General</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-bold" href="#">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
              <span>Inicio</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-colors" href="#">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136A23.76,23.76,0,0,1,171.16,150.45Z"></path>
              </svg>
              <span>Citas</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-colors" href="#">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
              <span>Pacientes</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-colors" href="#">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
              </svg>
              <span>Mensajes</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-colors" href="#">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path>
              </svg>
              <span>Facturación</span>
            </a>
          </nav>
        </div>
      </aside>
      
      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Ajustes</h1>
          </header>
          
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
            <nav className="flex gap-8 -mb-px">
              <a className="py-4 px-1 border-b-2 border-primary text-primary font-semibold" href="#">Perfil</a>
              <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 font-semibold" href="#">Notificaciones</a>
              <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 font-semibold" href="#">Privacidad y seguridad</a>
              <a className="py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300 font-semibold" href="#">Preferencias</a>
            </nav>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información personal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="nombre">Nombre</label>
                  <input 
                    className="form-input w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-primary text-gray-900 dark:text-white" 
                    id="nombre" 
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="apellido">Apellido</label>
                  <input 
                    className="form-input w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-primary text-gray-900 dark:text-white" 
                    id="apellido" 
                    name="apellido"
                    type="text"
                    value={formData.apellido}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="nombreMostrar">Nombre para mostrar</label>
                  <input 
                    className="form-input w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-primary text-gray-900 dark:text-white" 
                    id="nombreMostrar" 
                    name="nombreMostrar"
                    type="text"
                    value={formData.nombreMostrar}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="especialidad">Especialidad</label>
                  <input 
                    className="form-input w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-primary text-gray-900 dark:text-white" 
                    id="especialidad" 
                    name="especialidad"
                    type="text"
                    value={formData.especialidad}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="acercaDe">Acerca de mí</label>
                  <textarea 
                    className="form-textarea w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-primary text-gray-900 dark:text-white" 
                    id="acercaDe" 
                    name="acercaDe"
                    rows={4}
                    value={formData.acercaDe}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de contacto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Correo electrónico</label>
                  <input 
                    className="form-input w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-primary text-gray-900 dark:text-white" 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="telefono">Número de teléfono</label>
                  <input 
                    className="form-input w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-primary text-gray-900 dark:text-white" 
                    id="telefono" 
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>
            
            <div className="flex justify-end pt-4">
              <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors" type="submit">
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ConfiguracionPerfil;