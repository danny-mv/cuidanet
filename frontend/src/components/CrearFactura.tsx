import React, { useState } from 'react';

const CrearFactura = () => {
  const [formData, setFormData] = useState({
    patient: '',
    service: '',
    quantity: '',
    date: '',
    paymentDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos de la factura:', formData);
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="flex flex-col min-h-screen">
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-primary">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M19.7375 10.8131C20.179 10.7181 20.3431 10.7795 20.3791 10.7967C20.3938 10.8275 20.4274 10.9285 20.4041 11.1668C20.3704 11.5128 20.2251 12.0023 19.9286 12.6151C19.3399 13.8315 18.2543 15.3315 16.7929 16.7929C15.3315 18.2542 13.8316 19.3399 12.6151 19.9286C12.0023 20.2251 11.5127 20.3704 11.1668 20.4041C10.9285 20.4273 10.8275 20.3938 10.7967 20.379C10.7794 20.3431 10.7181 20.179 10.8131 19.7375C10.9281 19.2027 11.2344 18.4829 11.7519 17.6408C12.3787 16.6209 13.2748 15.4872 14.381 14.381C15.4872 13.2748 16.6209 12.3787 17.6408 11.7519C18.4829 11.2344 19.2027 10.9281 19.7375 10.8131ZM2.20594 14.6201L9.37986 21.794C9.94065 22.3548 10.7013 22.459 11.3608 22.3947C12.0293 22.3295 12.7574 22.0815 13.4862 21.729C14.9526 21.0194 16.6309 19.7834 18.2071 18.2071C19.7834 16.6309 21.0194 14.9526 21.729 13.4861C22.0815 12.7574 22.3295 12.0292 22.3947 11.3608C22.459 10.7013 22.3548 9.94066 21.794 9.37987L14.6201 2.20594C13.9263 1.51214 12.9383 1.51287 12.143 1.68388C11.304 1.86432 10.3667 2.2921 9.41981 2.87401C8.2489 3.59358 7.00593 4.59176 5.79289 5.79289C4.59177 7.00592 3.59358 8.24889 2.87401 9.41981C2.2921 10.3667 1.86433 11.3041 1.68389 12.143C1.51287 12.9383 1.51214 13.9263 2.20594 14.6201Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">HealthConnect</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Inicio</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Citas</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Pacientes</a>
              <a className="text-sm font-bold text-primary dark:text-primary" href="#">Facturas</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined">
                  notifications
                </span>
              </button>
              <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7akUhGu9OGADu1ljmU0ity_Q3Mqpgp1WxtqrWntSrklujjUbwIqFCPaNjvqyU4VcQeg1pmoP1tpWRq9g4tQ_D2P9hA4LKzbjLv_PRJeo5esEq_5fq1yZO5dGsL100HewUvtLcFZPWiJG37U8DSnaiLhrmBVjDnwaX5WZOJdmERWjDjxUtbuuv37EU26PngwETLZXH7uEtoFczuhjTpohhbpJv1EsbRbaSHd5wsyfZpN-HSMHnDx8xAILAtnnkSyI7SKObpqGXRg')" }}></div>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <div className="container mx-auto px-6 py-8">
            <div className="max-w-xl mx-auto bg-white dark:bg-background-dark rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nueva Factura</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="patient">Paciente</label>
                  <select 
                    className="form-select w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-900 rounded-lg focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" 
                    id="patient" 
                    name="patient"
                    value={formData.patient}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccionar paciente</option>
                    <option value="Juan Pérez">Juan Pérez</option>
                    <option value="María López">María López</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="service">Servicio</label>
                  <input 
                    className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-900 rounded-lg focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" 
                    id="service" 
                    name="service" 
                    placeholder="Buscar servicio" 
                    type="text"
                    value={formData.service}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="quantity">Cantidad</label>
                    <input 
                      className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-900 rounded-lg focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" 
                      id="quantity" 
                      name="quantity" 
                      placeholder="1" 
                      type="number"
                      value={formData.quantity}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="date">Fecha</label>
                    <input 
                      className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-900 rounded-lg focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" 
                      id="date" 
                      name="date" 
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="paymentDetails">Detalles de pago</label>
                  <textarea 
                    className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-900 rounded-lg focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" 
                    id="paymentDetails" 
                    name="paymentDetails" 
                    placeholder="Detalles de pago" 
                    rows={4}
                    value={formData.paymentDetails}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="flex justify-end gap-4 pt-4">
                  <button 
                    className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600" 
                    type="button"
                    onClick={() => console.log('Guardar factura')}
                  >
                    Guardar
                  </button>
                  <button 
                    className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-opacity-90" 
                    type="submit"
                  >
                    Enviar Factura
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CrearFactura;