import React, { useState } from 'react';

const HistorialClinico = () => {
  const [activeTab, setActiveTab] = useState('historial');
  const [visibleRecords, setVisibleRecords] = useState(8);

  const medicalRecords = [
    { id: 1, title: 'Consulta con el Dr. Martínez', date: '20 de octubre de 2023' },
    { id: 2, title: 'Vacunación contra la gripe', date: '15 de septiembre de 2023' },
    { id: 3, title: 'Consulta con el Dr. García', date: '5 de agosto de 2023' },
    { id: 4, title: 'Análisis de sangre', date: '10 de julio de 2023' },
    { id: 5, title: 'Consulta con el Dr. Martínez', date: '1 de junio de 2023' },
    { id: 6, title: 'Radiografía de tórax', date: '15 de mayo de 2023' },
    { id: 7, title: 'Consulta con el Dr. García', date: '20 de abril de 2023' },
    { id: 8, title: 'Vacunación contra el tétanos', date: '1 de marzo de 2023' },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleRecordClick = (recordId: string) => {
    console.log('Ver detalles del registro:', recordId);
  };

  const loadMoreRecords = () => {
    setVisibleRecords(prev => prev + 4);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <a className="flex items-center gap-2 text-primary" href="#">
                  <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                  <h1 className="text-xl font-bold text-slate-900 dark:text-white">HealthConnect</h1>
                </a>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <a 
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" 
                  href="#"
                  onClick={() => handleTabClick('inicio')}
                >
                  Inicio
                </a>
                <a 
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" 
                  href="#"
                  onClick={() => handleTabClick('citas')}
                >
                  Citas
                </a>
                <a 
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" 
                  href="#"
                  onClick={() => handleTabClick('mensajes')}
                >
                  Mensajes
                </a>
                <a 
                  className="text-sm font-bold text-primary" 
                  href="#"
                  onClick={() => handleTabClick('salud')}
                >
                  Mi salud
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzssn90eAtywuNW1eHvT1lxVUb0HJAJxxQR26wlMmlnq4Anei0f3llNNRfUVUYSNKbdXqfzjPzUyX2cl8jyrh3iCCT6TNP0QQqIysEDssSRvb57hymeNWIWUWdc5bj48_CX_J-eOluo1zE1JTuECPFmMAia59ndswouSz8usWZ7ylw2h48ucEK4O6w_cjbeTySVUTm2K_kcSF3y1D9VOaAXMxcfCakoSI6WTWV4IAxzhMjTp2z4rhKS7YaIgc_LRAQH00RGQV5xA")' }}></div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Mi salud</h2>
            <div className="border-b border-slate-200 dark:border-slate-800 mb-6">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                <a 
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'resumen' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`} 
                  href="#"
                  onClick={() => handleTabClick('resumen')}
                >
                  Resumen
                </a>
                <a 
                  aria-current="page" 
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'historial' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`} 
                  href="#"
                  onClick={() => handleTabClick('historial')}
                >
                  Historial médico
                </a>
                <a 
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'pruebas' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`} 
                  href="#"
                  onClick={() => handleTabClick('pruebas')}
                >
                  Resultados de pruebas
                </a>
                <a 
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'notas' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`} 
                  href="#"
                  onClick={() => handleTabClick('notas')}
                >
                  Notas de consulta
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Historial médico</h3>
              <ul className="divide-y divide-slate-200 dark:divide-slate-800">
                <li className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100">Consulta con el Dr. Martínez</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">20 de octubre de 2023</p>
                  </div>
                  <button onClick={() => handleRecordClick('consulta-martinez-oct')}>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">chevron_right</span>
                  </button>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100">Vacunación contra la gripe</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">15 de septiembre de 2023</p>
                  </div>
                  <button onClick={() => handleRecordClick('vacunacion-gripe')}>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">chevron_right</span>
                  </button>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100">Consulta con el Dr. García</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">5 de agosto de 2023</p>
                  </div>
                  <button onClick={() => handleRecordClick('consulta-garcia')}>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">chevron_right</span>
                  </button>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100">Análisis de sangre</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">10 de julio de 2023</p>
                  </div>
                  <button onClick={() => handleRecordClick('analisis-sangre')}>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">chevron_right</span>
                  </button>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100">Consulta con el Dr. Martínez</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">1 de junio de 2023</p>
                  </div>
                  <button onClick={() => handleRecordClick('consulta-martinez-jun')}>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">chevron_right</span>
                  </button>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100">Radiografía de tórax</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">15 de mayo de 2023</p>
                  </div>
                  <button onClick={() => handleRecordClick('radiografia-torax')}>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">chevron_right</span>
                  </button>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100">Consulta con el Dr. García</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">20 de abril de 2023</p>
                  </div>
                  <button onClick={() => handleRecordClick('consulta-garcia-abr')}>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">chevron_right</span>
                  </button>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-slate-100">Vacunación contra el tétanos</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">1 de marzo de 2023</p>
                  </div>
                  <button onClick={() => handleRecordClick('vacunacion-tetanos')}>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">chevron_right</span>
                  </button>
                </li>
              </ul>
              <div className="flex justify-center pt-4">
                <button 
                  className="bg-primary/20 dark:bg-primary/30 text-primary font-medium px-4 py-2 rounded-lg hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                  onClick={loadMoreRecords}
                >
                  Cargar más
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HistorialClinico;