import React, { useState } from 'react';

const GestionCitasPacientes = () => {
  const [formData, setFormData] = useState({
    specialty: 'Cardiología',
    doctor: 'Dr. Ricardo García',
    location: 'Clínica Central',
    searchTerm: ''
  });
  
  const [currentMonth, setCurrentMonth] = useState('Julio 2024');
  const [selectedDate, setSelectedDate] = useState(5);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Búsqueda:', formData);
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
  };

  const handleAppointment = (doctorName: string) => {
    console.log('Agendar cita con:', doctorName);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-10 py-4 border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-foreground-light dark:text-foreground-dark">
              <div className="text-primary size-8">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h1 className="text-xl font-bold">HealthConnect</h1>
            </div>
            <nav className="flex items-center gap-8">
              <a className="text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors" href="#">Inicio</a>
              <a className="text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors" href="#">Servicios</a>
              <a className="text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors" href="#">Doctores</a>
              <a className="text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors" href="#">Contacto</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <form className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-light dark:text-muted-dark">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input 
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-subtle-light dark:bg-subtle-dark border-transparent focus:border-primary focus:ring-primary placeholder-muted-light dark:placeholder-muted-dark text-foreground-light dark:text-foreground-dark" 
                placeholder="Buscar..." 
                type="search"
                name="searchTerm"
                value={formData.searchTerm}
                onChange={handleInputChange}
              />
            </form>
            <button className="p-2 rounded-full hover:bg-subtle-light dark:hover:bg-subtle-dark text-muted-light dark:text-muted-dark transition-colors">
              <svg className="size-6" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </button>
            <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzbUYMeb7o6WxmFvivuJhgjrgiiL2Y5YhXfdObr0m_56tMHgCDANwoVLMhFrNxoroSdrVru6Lqsog2ikqmwmVG--BAT-pIX4ueZxmBamnirRs-Tj4e7i-QgyENYrJwagbQE5HhYCukUAnIkpvvjRkmy0z-h7xNx2VNN3RHij2utls15W_zstbyvf95NaDwBp0yom0EMDtXw4MZVna-i3Vlfkxnp5nihFWnRrMoqtsHIR0ADMyz_JtM61nPQ30iBu6Kn1QooopxWg")' }}></div>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1 bg-background-light dark:bg-subtle-dark/50 rounded-lg p-6 space-y-6 self-start">
              <div className="border-b border-border-light dark:border-border-dark">
                <div className="flex">
                  <a className="flex-1 py-3 text-center text-sm font-bold text-primary border-b-2 border-primary" href="#">Buscar Disponibilidad</a>
                  <a className="flex-1 py-3 text-center text-sm font-bold text-muted-light dark:text-muted-dark hover:text-primary transition-colors" href="#">Mis Citas</a>
                </div>
              </div>
              <form className="space-y-4" onSubmit={handleSearch}>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="specialty">Especialidad</label>
                  <select 
                    className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary text-foreground-light dark:text-foreground-dark" 
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                  >
                    <option value="Cardiología">Cardiología</option>
                    <option value="Dermatología">Dermatología</option>
                    <option value="Pediatría">Pediatría</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="doctor">Doctor</label>
                  <select 
                    className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary text-foreground-light dark:text-foreground-dark" 
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                  >
                    <option value="Dr. Ricardo García">Dr. Ricardo García</option>
                    <option value="Dra. Sofía Martínez">Dra. Sofía Martínez</option>
                    <option value="Dr. Alejandro López">Dr. Alejandro López</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="location">Ubicación</label>
                  <select 
                    className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-subtle-dark focus:border-primary focus:ring-primary text-foreground-light dark:text-foreground-dark" 
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  >
                    <option value="Clínica Central">Clínica Central</option>
                    <option value="Hospital del Sur">Hospital del Sur</option>
                  </select>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between">
                    <button 
                      className="p-2 rounded-full hover:bg-subtle-light dark:hover:bg-subtle-dark/80 transition-colors" 
                      type="button"
                      onClick={() => setCurrentMonth('Junio 2024')}
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                      </svg>
                    </button>
                    <p className="text-sm font-bold">{currentMonth}</p>
                    <button 
                      className="p-2 rounded-full hover:bg-subtle-light dark:hover:bg-subtle-dark/80 transition-colors" 
                      type="button"
                      onClick={() => setCurrentMonth('Agosto 2024')}
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-light dark:text-muted-dark">
                    <span>D</span><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-sm">
                    <span className="col-start-3 p-2">1</span>
                    <span className="p-2">2</span>
                    <span className="p-2">3</span>
                    <span className="p-2">4</span>
                    <button 
                      className={`p-2 rounded-full ${selectedDate === 5 ? 'bg-primary text-white' : 'hover:bg-subtle-light dark:hover:bg-subtle-dark/80'}`}
                      onClick={() => handleDateSelect(5)}
                    >
                      5
                    </button>
                    <span className="p-2">6</span>
                    <span className="p-2">7</span>
                    <span className="p-2">8</span>
                    <span className="p-2">9</span>
                    <span className="p-2">10</span>
                    <span className="p-2">11</span>
                    <span className="p-2">12</span>
                    <span className="p-2">13</span>
                    <span className="p-2">14</span>
                    <span className="p-2">15</span>
                    <span className="p-2">16</span>
                    <span className="p-2">17</span>
                    <span className="p-2">18</span>
                    <span className="p-2">19</span>
                    <span className="p-2">20</span>
                    <span className="p-2">21</span>
                    <span className="p-2">22</span>
                    <span className="p-2">23</span>
                    <span className="p-2">24</span>
                    <span className="p-2">25</span>
                    <span className="p-2">26</span>
                    <span className="p-2">27</span>
                    <span className="p-2">28</span>
                    <span className="p-2">29</span>
                    <span className="p-2">30</span>
                    <span className="p-2">31</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-all" type="submit">Buscar</button>
              </form>
            </aside>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Resultados de Búsqueda</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background-light dark:bg-subtle-dark/50 rounded-lg border border-border-light dark:border-border-dark">
                  <div className="flex items-center gap-4">
                    <img alt="Dr. Ricardo García" className="size-14 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1AobO0-YEbPMraeEUc7dOcw9CEpim_GX3pwrY9CuhTmBj1m7lN0ziEu2ltb15cU20lh1KVQRHfezRFcbB06Bh3_b0CDhEb4ELBf26GltriaAiwiKziUk0_yAnwqL5N31ZVbc0MUcYOe_Mz5uW6dcfmIjRoAFHZ4fDF38KQlUHDCVTEm-Xp8ynzZB6UlIzxvNxLZFRlPQ_xbk6wVA1_5qxtjP4jZVAte_ExB7GN0xXPWWMh-rbRDAS8fxMlXZufCk2wFlXtUWoWQ"/>
                    <div>
                      <h3 className="font-bold text-lg">Dr. Ricardo García</h3>
                      <p className="text-sm text-muted-light dark:text-muted-dark">Cardiología</p>
                    </div>
                  </div>
                  <button 
                    className="bg-primary/20 dark:bg-primary/30 text-primary font-bold py-2 px-6 rounded-lg text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                    onClick={() => handleAppointment('Dr. Ricardo García')}
                  >
                    Agendar
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background-light dark:bg-subtle-dark/50 rounded-lg border border-border-light dark:border-border-dark">
                  <div className="flex items-center gap-4">
                    <img alt="Dra. Sofía Martínez" className="size-14 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDesORFPm2_TXcoxKU2AYdBuQkE8p5dwvN1maTYdUgFfHGoBUa4z4H1y6qdUdBNikx7nk1Qpmnl3D0pti9BpbemsWigPCv3_83imqIaRRCKkaWrvW3cgcIxprzMzRwSC35UKQRhyuC-l8gwlNXn01A4T3b4gvp4gX7fUB3lef8dp10RgE5B3f1ZPcB4khIjx4iDm7DyGRIdhbeE0SdQltKZ_O2LsmpUECbBEfRPLGYBnrHZoqqg4u_dx08ePDFwZdRjPNYJ2vgavA"/>
                    <div>
                      <h3 className="font-bold text-lg">Dra. Sofía Martínez</h3>
                      <p className="text-sm text-muted-light dark:text-muted-dark">Dermatología</p>
                    </div>
                  </div>
                  <button 
                    className="bg-primary/20 dark:bg-primary/30 text-primary font-bold py-2 px-6 rounded-lg text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                    onClick={() => handleAppointment('Dra. Sofía Martínez')}
                  >
                    Agendar
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background-light dark:bg-subtle-dark/50 rounded-lg border border-border-light dark:border-border-dark">
                  <div className="flex items-center gap-4">
                    <img alt="Dr. Alejandro López" className="size-14 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiHR47zs_zefC-oH5E_9Y_plhxlK8p27lqMnSXgYArRx8V-S8mU1m1NW296EzOML7VeLyyJus2JNus86kkJ3nS2E-nGNgYC28L_M49Zv5lR4ivFc6Q1JKI2_0K4baWzTD9elZOiBNFnomYzFZkwbOf7m2QutCaKUmOiKX4S-hUAZvrL6bkBm6MsflkFW-J1srSmQABjNbFV2peLWZyB_McjGYnKsqga_b-eAf_y6mvaS8coT19shSljv5ook2JVpFwv564Z57LHg"/>
                    <div>
                      <h3 className="font-bold text-lg">Dr. Alejandro López</h3>
                      <p className="text-sm text-muted-light dark:text-muted-dark">Pediatría</p>
                    </div>
                  </div>
                  <button 
                    className="bg-primary/20 dark:bg-primary/30 text-primary font-bold py-2 px-6 rounded-lg text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                    onClick={() => handleAppointment('Dr. Alejandro López')}
                  >
                    Agendar
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background-light dark:bg-subtle-dark/50 rounded-lg border border-border-light dark:border-border-dark">
                  <div className="flex items-center gap-4">
                    <img alt="Dra. Elena Sánchez" className="size-14 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuConFuj9Jg53ttVd6IpwMLsqw9hYGwPYr73zWKtEwI9VWlnuBtrShFb9S_mmYRijNTohYNmMmtPal2lSiYTIIYWWa1y1NiUtHCV7s94oO4DEUQzcNY1iHQWaCA4XxnajVrMiLjO_3n-UKhoQ5dski2QWYi0KiLfmvJgBipsDq9KwpQ2TBbnnEog4D7G9dTAqNU8v9L-XHYV8vpGv25KvNa64vuVlesUan42tYlabuLZUcLCad5BWmnc7-FHJX0eD33wbGKJzEPN0A"/>
                    <div>
                      <h3 className="font-bold text-lg">Dra. Elena Sánchez</h3>
                      <p className="text-sm text-muted-light dark:text-muted-dark">Neurología</p>
                    </div>
                  </div>
                  <button 
                    className="bg-primary/20 dark:bg-primary/30 text-primary font-bold py-2 px-6 rounded-lg text-sm hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                    onClick={() => handleAppointment('Dra. Elena Sánchez')}
                  >
                    Agendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GestionCitasPacientes;