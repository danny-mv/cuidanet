import React, { useState } from 'react';

const CrearCitaNueva = () => {
  const [specialty, setSpecialty] = useState('Cardiología');
  const [doctor, setDoctor] = useState('Dr. Juan Pérez');
  const [appointmentType, setAppointmentType] = useState('Presencial');
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedTime, setSelectedTime] = useState('');
  
  // Estado para navegación de calendario
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // 0-11
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [nextMonth, setNextMonth] = useState((new Date().getMonth() + 1) % 12);
  const [nextYear, setNextYear] = useState(new Date().getMonth() === 11 ? new Date().getFullYear() + 1 : new Date().getFullYear());

  // Nombres de los meses
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Función para obtener días en un mes
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Función para obtener el día de la semana del primer día del mes (0 = domingo)
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Función para verificar si una fecha es válida para citas (no pasada)
  const isDateAvailable = (day: number, month: number, year: number) => {
    const today = new Date();
    const dateToCheck = new Date(year, month, day);
    return dateToCheck >= today;
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecialty(e.target.value);
  };

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDoctor(e.target.value);
  };

  const handleAppointmentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAppointmentType(e.target.value);
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    // Limpiar horario seleccionado al cambiar fecha
    setSelectedTime('');
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleNavigateMonth = (direction: 'prev' | 'next', calendar: 'first' | 'second') => {
    // Limpiar fecha seleccionada al navegar
    setSelectedDate(0);
    setSelectedTime('');

    if (calendar === 'first') {
      let newMonth = currentMonth;
      let newYear = currentYear;
      
      if (direction === 'prev') {
        if (currentMonth === 0) {
          newMonth = 11;
          newYear = currentYear - 1;
        } else {
          newMonth = currentMonth - 1;
        }
      } else {
        if (currentMonth === 11) {
          newMonth = 0;
          newYear = currentYear + 1;
        } else {
          newMonth = currentMonth + 1;
        }
      }
      
      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
      
      // Actualizar el segundo calendario para mostrar el mes siguiente
      if (newMonth === 11) {
        setNextMonth(0);
        setNextYear(newYear + 1);
      } else {
        setNextMonth(newMonth + 1);
        setNextYear(newYear);
      }
    } else {
      let newMonth = nextMonth;
      let newYear = nextYear;
      
      if (direction === 'prev') {
        if (nextMonth === 0) {
          newMonth = 11;
          newYear = nextYear - 1;
        } else {
          newMonth = nextMonth - 1;
        }
      } else {
        if (nextMonth === 11) {
          newMonth = 0;
          newYear = nextYear + 1;
        } else {
          newMonth = nextMonth + 1;
        }
      }
      
      setNextMonth(newMonth);
      setNextYear(newYear);
      
      // Actualizar el primer calendario para mostrar el mes anterior
      if (newMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(newYear - 1);
      } else {
        setCurrentMonth(newMonth - 1);
        setCurrentYear(newYear);
      }
    }
  };

  const handleScheduleAppointment = () => {
    if (!selectedDate || !selectedTime) {
      alert('Por favor selecciona una fecha y horario');
      return;
    }

    console.log('Scheduling appointment:', {
      specialty,
      doctor,
      appointmentType,
      date: `${selectedDate} de ${monthNames[currentMonth]} ${currentYear}`,
      time: selectedTime,
      fullDate: new Date(currentYear, currentMonth, selectedDate)
    });

    alert(`Cita programada para el ${selectedDate} de ${monthNames[currentMonth]} ${currentYear} a las ${selectedTime} con ${doctor}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
      <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-20 border-b border-primary/20 dark:border-primary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Inicio</a>
              <a className="text-sm font-bold text-primary dark:text-primary" href="#">Citas</a>
              <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Mensajes</a>
              <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Perfil</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqHOMAoFplHPBzJF2g17hJaVEJjb13aIH8Ba-r9FzaDaX7pCTp8aYrIGuDHl0nNOh_6MnfyDUmqyT8ZRp9WKaCZ0QdiUdMB3mpzalXYur3YMKPdp4VU16AwWBjDxpj3ujH47iU1SNWgJ8jg-sAv-vboeHAYL9pPfOY8B1ehBpH_APDfHmdJXbrnG46z1shtB1iTZ10GzqTniIlg5uWJtbFuu-VXKt-oO10K9rrnSg9aoDow87dV_2OxLYrbzeu-GHHJL020SPmJA")'
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Programar una cita</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Complete los siguientes pasos para encontrar un horario disponible.</p>
          </div>
          <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-sm border border-primary/20 dark:border-primary/30 p-6 md:p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="specialty">Especialidad</label>
                <select 
                  className="form-select w-full h-12 px-4 bg-background-light dark:bg-background-dark border border-primary/30 dark:border-primary/40 rounded-lg text-gray-900 dark:text-white focus:ring-primary focus:border-primary" 
                  id="specialty" 
                  name="specialty"
                  value={specialty}
                  onChange={handleSpecialtyChange}
                >
                  <option>Cardiología</option>
                  <option>Dermatología</option>
                  <option>Medicina General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="doctor">Médico</label>
                <select 
                  className="form-select w-full h-12 px-4 bg-background-light dark:bg-background-dark border border-primary/30 dark:border-primary/40 rounded-lg text-gray-900 dark:text-white focus:ring-primary focus:border-primary" 
                  id="doctor" 
                  name="doctor"
                  value={doctor}
                  onChange={handleDoctorChange}
                >
                  <option>Dr. Juan Pérez</option>
                  <option>Dra. Ana García</option>
                  <option>Dr. Carlos Sánchez</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="appointment_type">Tipo de cita</label>
                <select 
                  className="form-select w-full h-12 px-4 bg-background-light dark:bg-background-dark border border-primary/30 dark:border-primary/40 rounded-lg text-gray-900 dark:text-white focus:ring-primary focus:border-primary" 
                  id="appointment_type" 
                  name="appointment_type"
                  value={appointmentType}
                  onChange={handleAppointmentTypeChange}
                >
                  <option>Presencial</option>
                  <option>Virtual</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark/50">
                <div className="flex items-center justify-between mb-4">
                  <button 
                    className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 text-gray-600 dark:text-gray-400"
                    onClick={() => handleNavigateMonth('prev', 'first')}
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {monthNames[currentMonth]} {currentYear}
                  </h3>
                  <button 
                    className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 text-gray-600 dark:text-gray-400"
                    onClick={() => handleNavigateMonth('next', 'first')}
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">D</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">L</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">M</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">X</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">J</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">V</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">S</div>
                  
                  {/* Espacios vacíos para el primer día del mes */}
                  {[...Array(getFirstDayOfMonth(currentMonth, currentYear))].map((_, index) => (
                    <div key={`empty-${index}`} className="size-10"></div>
                  ))}
                  
                  {/* Días del mes */}
                  {[...Array(getDaysInMonth(currentMonth, currentYear))].map((_, index) => {
                    const day = index + 1;
                    const isSelected = selectedDate === day;
                    const isAvailable = isDateAvailable(day, currentMonth, currentYear);
                    
                    return (
                      <div 
                        key={day}
                        className={`size-10 flex items-center justify-center rounded-full ${
                          !isAvailable 
                            ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                            : isSelected 
                              ? 'bg-primary text-white cursor-pointer' 
                              : 'text-gray-700 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-primary/30 cursor-pointer'
                        }`}
                        onClick={() => isAvailable && handleDateClick(day)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-background-light dark:bg-background-dark/50">
                <div className="flex items-center justify-between mb-4">
                  <button 
                    className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 text-gray-600 dark:text-gray-400"
                    onClick={() => handleNavigateMonth('prev', 'second')}
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {monthNames[nextMonth]} {nextYear}
                  </h3>
                  <button 
                    className="p-2 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 text-gray-600 dark:text-gray-400"
                    onClick={() => handleNavigateMonth('next', 'second')}
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">D</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">L</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">M</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">X</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">J</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">V</div>
                  <div className="font-bold text-gray-500 dark:text-gray-400 py-2">S</div>
                  
                  {/* Espacios vacíos para el primer día del mes */}
                  {[...Array(getFirstDayOfMonth(nextMonth, nextYear))].map((_, index) => (
                    <div key={`empty-${index}`} className="size-10"></div>
                  ))}
                  
                  {/* Días del mes */}
                  {[...Array(getDaysInMonth(nextMonth, nextYear))].map((_, index) => {
                    const day = index + 1;
                    const isSelected = selectedDate === day;
                    const isAvailable = isDateAvailable(day, nextMonth, nextYear);
                    
                    return (
                      <div 
                        key={day}
                        className={`size-10 flex items-center justify-center rounded-full ${
                          !isAvailable 
                            ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                            : isSelected 
                              ? 'bg-primary text-white cursor-pointer' 
                              : 'text-gray-700 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-primary/30 cursor-pointer'
                        }`}
                        onClick={() => isAvailable && handleDateClick(day)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {selectedDate ? (
                  <>
                    Horarios disponibles para{' '}
                    <span className="text-primary">
                      {selectedDate} de {monthNames[currentMonth]} {currentYear}
                    </span>
                  </>
                ) : (
                  'Selecciona una fecha para ver horarios disponibles'
                )}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'].map((time) => (
                  <button 
                    key={time}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedTime === time
                        ? 'bg-primary text-white'
                        : 'bg-primary/20 dark:bg-primary/30 text-primary dark:text-primary hover:bg-primary hover:text-white dark:hover:text-white'
                    }`}
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-primary/20 dark:border-primary/30">
              <button 
                className="w-full h-12 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
                onClick={handleScheduleAppointment}
              >
                Programar Cita
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CrearCitaNueva;