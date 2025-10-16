import React, { useState } from 'react';

const Facturacion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-subtle-light dark:border-subtle-dark px-10 py-3">
          <div className="flex items-center gap-4">
            <div className="text-primary size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold">HealthConnect</h2>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Inicio</a>
            <a className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Citas</a>
            <a className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Pacientes</a>
            <a className="text-primary font-bold" href="#">Facturación</a>
            <a className="text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Informes</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative">
              <span className="material-symbols-outlined text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors">notifications</span>
              <span className="absolute top-0 right-0 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2jXrR0jP8KTMwXiTC1wfcSqLc-oDw0KzZJ-ju-fjGaveyKV0jWqMnwPmf2D6v_gGFdoyNH3leCpwHLEwsZJoBMtNw2UTVaIuovx4TmMgg6QHoL6SzehPNNyrzsMGjjeU82NN_3vaUdszIw3oKhi2wqNAhbB3GdedZP98k4ojNnOKBdU_I0RCpuBhpGbzdtNldVrD-EaQW2ABhD_rfcEJQ8ii0J93MgoitQpR66VMSfh25rQEF5hyzWUPA2Ft6HLVsv_mb_kmmw")' }}></div>
          </div>
        </header>
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold">Facturación</h1>
                <p className="text-muted-light dark:text-muted-dark mt-1">Genera facturas, gestiona pagos y consulta el historial de transacciones.</p>
              </div>
              <button 
                className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:opacity-90 transition-opacity"
                onClick={() => console.log('Crear nueva factura')}
              >
                <span className="material-symbols-outlined text-base">add</span>
                <span className="truncate">Crear Nueva Factura</span>
              </button>
            </div>
            <div className="bg-white dark:bg-subtle-dark rounded-lg shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">search</span>
                  <input 
                    className="w-full h-10 pl-10 pr-4 rounded-lg bg-background-light dark:bg-background-dark border border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary focus:border-primary transition" 
                    placeholder="Buscar por ID de factura o nombre del paciente" 
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center justify-center gap-1.5 rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    <span>Estado:</span>
                    <span className="font-bold">{statusFilter}</span>
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                  </button>
                  <button className="flex items-center justify-center gap-1.5 rounded-lg h-10 px-4 bg-subtle-light dark:bg-background-dark border border-subtle-light dark:border-subtle-dark text-foreground-light dark:text-foreground-dark text-sm font-medium hover:bg-subtle-light/80 dark:hover:bg-background-dark/80 transition-colors">
                    <span>Fecha</span>
                    <span className="material-symbols-outlined text-lg">expand_more</span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-light dark:text-muted-dark uppercase bg-background-light dark:bg-background-dark">
                    <tr>
                      <th className="px-6 py-3" scope="col">ID Factura</th>
                      <th className="px-6 py-3" scope="col">Fecha</th>
                      <th className="px-6 py-3" scope="col">Paciente</th>
                      <th className="px-6 py-3" scope="col">Servicio</th>
                      <th className="px-6 py-3 text-right" scope="col">Importe</th>
                      <th className="px-6 py-3 text-center" scope="col">Estado</th>
                      <th className="px-6 py-3 text-right" scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-subtle-light dark:border-subtle-dark hover:bg-background-light dark:hover:bg-subtle-dark/50 transition-colors">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">#INV-20240715-001</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">15/07/2024</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Sofía Rodríguez</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Consulta de cardiología</td>
                      <td className="px-6 py-4 text-right text-muted-light dark:text-muted-dark">120 €</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Pagada</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a className="font-medium text-primary hover:underline" href="#">Ver</a>
                      </td>
                    </tr>
                    <tr className="border-b border-subtle-light dark:border-subtle-dark hover:bg-background-light dark:hover:bg-subtle-dark/50 transition-colors">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">#INV-20240715-002</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">15/07/2024</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Carlos López</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Terapia física</td>
                      <td className="px-6 py-4 text-right text-muted-light dark:text-muted-dark">80 €</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">Pendiente</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a className="font-medium text-primary hover:underline" href="#">Ver</a>
                      </td>
                    </tr>
                    <tr className="border-b border-subtle-light dark:border-subtle-dark hover:bg-background-light dark:hover:bg-subtle-dark/50 transition-colors">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">#INV-20240714-003</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">14/07/2024</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Ana García</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Dermatología</td>
                      <td className="px-6 py-4 text-right text-muted-light dark:text-muted-dark">150 €</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Pagada</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a className="font-medium text-primary hover:underline" href="#">Ver</a>
                      </td>
                    </tr>
                    <tr className="border-b border-subtle-light dark:border-subtle-dark hover:bg-background-light dark:hover:bg-subtle-dark/50 transition-colors">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">#INV-20240714-004</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">14/07/2024</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Javier Martínez</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Psicología</td>
                      <td className="px-6 py-4 text-right text-muted-light dark:text-muted-dark">100 €</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">Pendiente</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a className="font-medium text-primary hover:underline" href="#">Ver</a>
                      </td>
                    </tr>
                    <tr className="hover:bg-background-light dark:hover:bg-subtle-dark/50 transition-colors">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">#INV-20240713-005</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">13/07/2024</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Elena Sánchez</td>
                      <td className="px-6 py-4 text-muted-light dark:text-muted-dark">Nutrición</td>
                      <td className="px-6 py-4 text-right text-muted-light dark:text-muted-dark">60 €</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Pagada</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a className="font-medium text-primary hover:underline" href="#">Ver</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <nav aria-label="Table navigation" className="flex items-center justify-between pt-4">
                <span className="text-sm font-normal text-muted-light dark:text-muted-dark">
                  Mostrando <span className="font-semibold text-foreground-light dark:text-foreground-dark">1-5</span> de <span className="font-semibold text-foreground-light dark:text-foreground-dark">100</span>
                </span>
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <a className="flex items-center justify-center h-8 w-8 ml-0 leading-tight text-muted-light dark:text-muted-dark bg-white dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark rounded-l-lg hover:bg-background-light dark:hover:bg-subtle-dark/80 transition-colors" href="#">
                      <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </a>
                  </li>
                  <li>
                    <a aria-current="page" className="flex items-center justify-center h-8 w-8 leading-tight text-white bg-primary border border-primary hover:opacity-90 transition-opacity" href="#">1</a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center h-8 w-8 leading-tight text-muted-light dark:text-muted-dark bg-white dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark hover:bg-background-light dark:hover:bg-subtle-dark/80 transition-colors" href="#">2</a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center h-8 w-8 leading-tight text-muted-light dark:text-muted-dark bg-white dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark hover:bg-background-light dark:hover:bg-subtle-dark/80 transition-colors" href="#">3</a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center h-8 w-8 leading-tight text-muted-light dark:text-muted-dark bg-white dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark rounded-r-lg hover:bg-background-light dark:hover:bg-subtle-dark/80 transition-colors" href="#">
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Facturacion;