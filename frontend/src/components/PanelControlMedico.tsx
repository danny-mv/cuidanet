import { useState } from 'react';

interface Appointment {
  id: number;
  patientName: string;
  patientImage: string;
  description: string;
  time: string;
}

interface Teleconsult {
  id: number;
  patientName: string;
  patientImage: string;
  description: string;
  time: string;
  isActive: boolean;
}

const PanelControlMedico = () => {
  const [selectedDate, setSelectedDate] = useState(5);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // 0-11 (Julio = 6)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Nombres de los meses
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Datos mock de citas
  const appointments: Appointment[] = [
    {
      id: 1,
      patientName: 'Elena Ramirez',
      patientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt3jhMX0QDaK5zoiIhphLkFGnPaFbIY6vD8QSctOuSrCkDM8_x2hj-SvjQupZRYPl9mwlRoSuCJvL9xULKLUumfV_6VWO2_y6ooPZQUi22KB-Fhey9skURcLRNHdHwttVc5TWWl64qRdNjmFjooIlfVn7zyi2XjwHQTISN2-vmMVqDRp8hUIKw6ibZIaWPofIMc8629RarYEf6BUZk4kTLKnJ8phZbtQS1poNnnMU4PyG7X5gqlzuXNdimHgzNTQ62X2PllEiwQA',
      description: 'Consulta de seguimiento con Elena Ramirez',
      time: '10:00 AM - 10:30 AM'
    },
    {
      id: 2,
      patientName: 'Carlos Mendoza',
      patientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6MbfTatVVpp8hgZbld5p8iD0UPIFWyZv0radCN0q-ffa4NECugHCRJCln4m9BLwax93CFOgRhsqgiTQKEsIhmFDWGOIjv_drq4cmmbKF4MLcM6CUmUTcVpOZ8tSo-gkCDb7KpdUNxB329obwIjFXoIDadWT92jrJxUNansOZH9cbwf09-hSNtVHbmh9hs50H_Uikcm7UJthCA49VWyzi7TGrn-19ik4Pa4VVIRbKLB9u3m1xPL-CNltAeP4ez0ASZohVQEHCasQ',
      description: 'Consulta inicial con Carlos Mendoza',
      time: '11:00 AM - 11:45 AM'
    },
    {
      id: 3,
      patientName: 'Sofía Vargas',
      patientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOwwtdvlkOQqrX9LesUjpWzLBa5tT5hURg7IWCqsDNQHVeqAMc0P5s_g0vq54Nm_mFiX_43ctLaVh2BEZe0HRCM6PZTw93JO5ke4GlXZkQ67g6i-3y0wdKYuNFX3_Y3QLj8e0sXXVUWEZSMR1f_qZ5r43YOz5_jyvxDEUH_m_nDrlubYEtsWYkdjV3KK-kw19NozM0bqY3xHs9xZjVDOfsDCp735GdiTVHE7BFEAM7HneCNy7GPU8QbyLtfGA-j4aZ1dRQJSxRg',
      description: 'Revisión de resultados con Sofía Vargas',
      time: '12:00 PM - 12:30 PM'
    }
  ];

  // Datos mock de teleconsultas
  const teleconsults: Teleconsult[] = [
    {
      id: 1,
      patientName: 'Elena Ramirez',
      patientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVJ9iqQWTLm3s7ozs1jiczb6PBLpQf3-5XTW7vVQpKG_bos_avIDAWrniUpve1fPd66aVA1ymwHAIR6XJjmJKqfhAZ9Pd5hSRFSbhrelxhyhHlcj0gtzdwtCoQNazb0zw3sH6MLixeDmwXX9c98ro-xUnDbOMglrLJopMqeMuAgYqFMVmqnrv8FO-8JjfvV9p2gpQaawYpydbMGoa9J7aGsPvlFbjhCCJyIfjdGeflAF1Uoz-d8bFSnVBbEgWm9kZVS6ctNGUlQg',
      description: 'Iniciar teleconsulta con Elena Ramirez',
      time: 'Próxima cita en 15 minutos',
      isActive: true
    },
    {
      id: 2,
      patientName: 'Carlos Mendoza',
      patientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcwP5yTXF4YN4l-F9csm0mcCA_50dKra8gAbs93fi-VsOJ3IWoOPcpWu7FFSvuhwKPn_85aSdPpTvS0egqKB28S4d_ccuIHzOHJ8HtyGdS3Eg_OxLhWupxNmt85azzLKHWPh7dqbRfo5pY0SnlNX3CgZYI3H0lAQxPwc1C0gwKpPZHd_ixhYpjzak6j5CWeVxVb8ngYZCmsE4U1NEad24QUfGDjAa9kDi5_e5yQ4p765yskcZoy25kH-hYWFmBZZfZvGp7szX_8Q',
      description: 'Iniciar teleconsulta con Carlos Mendoza',
      time: 'Próxima cita en 1 hora',
      isActive: false
    }
  ];

  // Funciones para manejar interacciones
  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  const handleMonthNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const handleAppointmentAction = (appointmentId: number) => {
    console.log('Appointment action for:', appointmentId);
  };

  const handleStartTeleconsult = (teleconsultId: number) => {
    console.log('Starting teleconsult:', teleconsultId);
  };

  // Función para obtener días en un mes
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Función para obtener el día de la semana del primer día del mes
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  return (
    <div className="flex h-screen flex-col bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="text-primary size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path 
                clipRule="evenodd" 
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" 
                fill="currentColor" 
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">HealthConnect</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Inicio</a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Pacientes</a>
          <a className="text-primary font-semibold" href="#">Citas</a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Teleconsultas</a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Informes</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <img 
            alt="User Avatar" 
            className="size-10 rounded-full" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ16fgHNIw40YxMv9jIxKBgD_oFyRnnyYEOcyVhSdZFOIQOZDeDJmYWAVghxM6CeBi0EQVEuCO6Va-ihwiLZg4D37BjMW75Zus18lJaiEHGP0zrJ1LlWyUXFaY31vanP3452dd9GDgCBM_zRsYDdY-UtOndVdy7tAgrfkPioXRNzj_iTvRbtnXm5vHaCUvR-_3BBAbQ32YHPKr0QnHxTh76s7GxylrJNwfRHTNaq5cKA1HWVW2XYR2Lw28T48xuH8LEa2xlNn4Ww"
          />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendario */}
          <div className="lg:col-span-1 bg-white dark:bg-background-dark rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50"
                onClick={() => handleMonthNavigation('prev')}
              >
                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">chevron_left</span>
              </button>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                {monthNames[currentMonth]} {currentYear}
              </h3>
              <button 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50"
                onClick={() => handleMonthNavigation('next')}
              >
                <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">chevron_right</span>
              </button>
            </div>
            <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
              <div className="font-medium text-gray-500 dark:text-gray-400">D</div>
              <div className="font-medium text-gray-500 dark:text-gray-400">L</div>
              <div className="font-medium text-gray-500 dark:text-gray-400">M</div>
              <div className="font-medium text-gray-500 dark:text-gray-400">M</div>
              <div className="font-medium text-gray-500 dark:text-gray-400">J</div>
              <div className="font-medium text-gray-500 dark:text-gray-400">V</div>
              <div className="font-medium text-gray-500 dark:text-gray-400">S</div>
              
              {/* Espacios vacíos para el primer día del mes */}
              {[...Array(getFirstDayOfMonth(currentMonth, currentYear))].map((_, index) => (
                <div key={`empty-${index}`} className="h-10 w-10"></div>
              ))}
              
              {/* Días del mes */}
              {[...Array(getDaysInMonth(currentMonth, currentYear))].map((_, index) => {
                const day = index + 1;
                const isSelected = selectedDate === day;
                
                return (
                  <button 
                    key={day}
                    className={`h-10 w-10 flex items-center justify-center rounded-full ${
                      isSelected 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                    }`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel de citas y teleconsultas */}
          <div className="lg:col-span-2 space-y-8">
            {/* Próximas Citas */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Próximas Citas</h2>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center gap-4 bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm">
                    <img 
                      alt={appointment.patientName} 
                      className="h-14 w-14 rounded-full object-cover" 
                      src={appointment.patientImage}
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 dark:text-gray-100">{appointment.description}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.time}</p>
                    </div>
                    <button 
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                      onClick={() => handleAppointmentAction(appointment.id)}
                    >
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Teleconsultas */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Teleconsultas</h2>
              <div className="space-y-4">
                {teleconsults.map((teleconsult) => (
                  <div key={teleconsult.id} className="flex flex-col md:flex-row items-stretch gap-4 bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm">
                    <div className="flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <p className="font-bold text-lg text-gray-800 dark:text-gray-100">{teleconsult.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{teleconsult.time}</p>
                      </div>
                      <button 
                        className={`self-start flex items-center justify-center gap-2 rounded-lg h-10 px-5 font-semibold text-sm transition-colors ${
                          teleconsult.isActive 
                            ? 'bg-primary text-white hover:bg-primary/90' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                        onClick={() => handleStartTeleconsult(teleconsult.id)}
                      >
                        <span className="material-symbols-outlined text-base">videocam</span>
                        <span>Iniciar</span>
                      </button>
                    </div>
                    <div 
                      className="w-full md:w-1/3 aspect-video bg-cover bg-center rounded-lg" 
                      style={{ backgroundImage: `url("${teleconsult.patientImage}")` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PanelControlMedico;