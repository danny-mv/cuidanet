import { useState } from 'react';

interface ChatMessage {
  id: number;
  sender: 'doctor' | 'patient';
  name: string;
  message: string;
  avatar: string;
}

const Teleconsulta = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'history'>('chat');
  const [message, setMessage] = useState('');
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // Datos mock del chat
  const chatMessages: ChatMessage[] = [
    {
      id: 1,
      sender: 'doctor',
      name: 'Dr. Maria Rodriguez',
      message: 'Hola, Sofia. ¿Cómo te sientes hoy?',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBQLjtg-4NuqGmv9y7gpUjlTEeEGfeOiD04ATY3P0c8qzpNqfwDutEagztkHtctM9uN5x4xNOQE4QrBLaNvermQTOWnYPdo40HVbihnXa9AGoxlcypEtV53KVZPQuLfc7T5MPspggNzaYuSdApelGFr0axChDG_4o1RtO0XC9zISTgSyy1Sxev_7AVNNbdLUsFY2CaV-ViyXBeBbyWwMv7F8vjHxObGjCwNnBo67o_WdFceSQfoU49IveUaWXO4i8ZInK5gP5uvQ'
    },
    {
      id: 2,
      sender: 'patient',
      name: 'Sofia Ramirez',
      message: 'Hola, doctora. Me siento un poco mejor, gracias.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN4Ud2gOEn_kSZBkhSjOnwrHhzo5FAtQNRAUg5VCGApxHymxzONX0lKPxa4w5n7iSe1EJvzTH6Qdh6Vbwf3igoWDmq0YdZL71dWgTRnTO09PkYwLNGAaHWarzziVOotCYWrjfnWEGEyvhCQWoR2WbTYP9dsSFs_4NaVuJbrjP38paVQtYrprP-bHVxzX6g8UjV4WsOpozLf-HZ_NbD6XtUTzAW1mrfqGkivLfnQEmfDv4ri8eDAzU-Hz9Y55bS6WxfKKWXtOyR5w'
    },
    {
      id: 3,
      sender: 'doctor',
      name: 'Dr. Maria Rodriguez',
      message: 'Eso es genial. ¿Has estado tomando la medicación como te indiqué?',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWCw8M8i8KTMag1zqH8-xXni9YlNwwENCXyt-C-pkNJL6vZlghctU_jQekd8VhPmpHWQJ7LwIEzoCK2eg0QEoKNCbMsr24okrIHzkMyiz8wygDohlnKAlXRabUSxLWGckRv0AfZlcJzgyJHO5hX9WjQKe6WYoLbItA0y-W-kCmpuY5XvpgeJP1qBb9H8xwfdHBmrTSrehZ87TFPBMnXOEFzh93cx2mFcY_PgI78lPokpE5onMNpoLV4r8rvX9RBvj2FLHSq03ABQ'
    },
    {
      id: 4,
      sender: 'patient',
      name: 'Sofia Ramirez',
      message: 'Sí, doctora. He sido muy cuidadosa con eso.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaE35Rm_f4kN4KGWAK26erbtWQMrnBU4oGrpvPaYHX0jp_O4z0YpAMSYOHVqhudt0KJ1iNYse-Bu-u2AqI1s7cgX15nuq7VD0CYqyMzfUBILVZUraiqmFFTI8pWhGBN5r2RNvXjX_QQXsB8OzKR0Um-0ePk-XEhc1qtbOs9PKmDzfZn47VO9diSwISHrZb7WYTH8PKxNVvSo9M45E13zSWqSIjityOcNeOpOwRn1vT_t0dPEjkSnlJAmYCkqGWk7e-0A4WID62jQ'
    },
    {
      id: 5,
      sender: 'doctor',
      name: 'Dr. Maria Rodriguez',
      message: 'Excelente. Vamos a revisar tus síntomas y ajustar el tratamiento si es necesario.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaoFIhAiexv366KSStNh-lmiQbgfbxKkLzH4PC-VlM-IvdtQrGg6LgudTKSGjghozNnAy8Z92X_nhKN4pOdDNco0F_7XmCBu0ML9qcNHYopadcb0gg5TGiPjt-IYnJx4fne28Uei0uP8aNmehCuOmIkc2mP2zkT6udb1NRrpU9c13dPD7ANu7BQUSe3_J544zQFYDxE5MY0p4n4Mosgd0mnXIw42FS_LUqYtBDuZC8qjrvyDAi95MQlPPMAVrER_vf8z0pwNK_-Q'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Aquí se enviaría el mensaje
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleToggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleEndCall = () => {
    // Aquí se terminaría la llamada
    console.log('Ending call');
  };

  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 dark:border-gray-800 px-6">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">HealthConnect</h2>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Inicio</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Citas</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Pacientes</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Informes</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
          </button>
          <div 
            className="h-10 w-10 rounded-full bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsnvZzxv30ac49FupZj0X6EKQyI4Ioyt6itCm6PS4cQDHqmXmgRGdTr6kxT9GMbp_4nGGatxewV5xkxPFxPoUKOxnZBbYRm0qo8ondmwJzuPTyUGviDvJAjwlRkeOxJidBwdFvAXhug7iI3sJzSrfVVfJStsmufz2LWvS5Q8XosJH6LQJdhYj3b3OnswyC5yWfAXYiONZe0pI-Ijip21WUWtx4aZJhWlDmbrlm4X3pZaVri4NPYBhu_B92l0gCkOQ581DIBgDmmQ")' }}
          ></div>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden">
        {/* Área de video principal */}
        <div className="flex flex-1 flex-col p-4 md:p-6">
          <div className="flex flex-1 flex-col gap-4">
            {/* Video del paciente */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ 
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpxo9gW9YZkmWNcKdgt1QhrVJFTvasz07oFcBkdsorHzjeN6AKZ9g4ME5zaUqsuJhiSa7XmatClqVOXV3e6IrvHWpS_yONSx9DfEBpjb9tcc-C_F_rIRVXdxRlsmNLwBsr2V430WKarWBpghPPYoTzqjZNOR0Nzc3X3ha22ti3zOWmCOsRJ6G7678vvJk-C97pgvhcmmeE5dOFPdzHzJ8wueuQAh5G2_9v-uZaBiU8k3HzynKbHPCNu5r2UP7CzADkCHK_JT_slw")' 
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70">
                  <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Controles de la teleconsulta */}
            <div className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 p-2 dark:bg-gray-800/50">
              <button 
                className={`flex flex-col items-center gap-1 rounded p-2 ${
                  isVideoOn ? 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700' : 'text-red-600 bg-red-100 dark:bg-red-900/30'
                }`}
                onClick={handleToggleVideo}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  isVideoOn ? 'bg-gray-200 dark:bg-gray-700' : 'bg-red-200 dark:bg-red-800'
                }`}>
                  <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
                  </svg>
                </div>
                <span className="text-xs font-medium">Video</span>
              </button>
              
              <button 
                className={`flex flex-col items-center gap-1 rounded p-2 ${
                  !isMuted ? 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700' : 'text-red-600 bg-red-100 dark:bg-red-900/30'
                }`}
                onClick={handleToggleMute}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  !isMuted ? 'bg-gray-200 dark:bg-gray-700' : 'bg-red-200 dark:bg-red-800'
                }`}>
                  <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></path>
                  </svg>
                </div>
                <span className="text-xs font-medium">{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>
              
              <button 
                className="flex flex-col items-center gap-1 rounded p-2 text-white bg-red-600 hover:bg-red-700"
                onClick={handleEndCall}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
                  <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80A40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                  </svg>
                </div>
                <span className="text-xs font-medium">End Call</span>
              </button>
              
              <button className="flex flex-col items-center gap-1 rounded p-2 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
                  </svg>
                </div>
                <span className="text-xs font-medium">Chat</span>
              </button>
              
              <button className="flex flex-col items-center gap-1 rounded p-2 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                  <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
                  </svg>
                </div>
                <span className="text-xs font-medium">More</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Panel lateral de chat */}
        <aside className="flex w-96 flex-col border-l border-gray-200 bg-background-light dark:border-gray-800 dark:bg-background-dark">
          {/* Tabs del chat */}
          <div className="border-b border-gray-200 dark:border-gray-800">
            <div className="flex">
              <button 
                className={`flex-1 border-b-2 py-3 text-center text-sm font-bold ${
                  activeTab === 'chat' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('chat')}
              >
                Chat
              </button>
              <button 
                className={`flex-1 border-b-2 py-3 text-center text-sm font-bold ${
                  activeTab === 'history' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('history')}
              >
                Historial
              </button>
            </div>
          </div>
          
          {/* Lista de mensajes */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {chatMessages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex items-start gap-3 ${
                  msg.sender === 'patient' ? 'justify-end' : ''
                }`}
              >
                {msg.sender === 'doctor' && (
                  <div 
                    className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center" 
                    style={{ backgroundImage: `url("${msg.avatar}")` }}
                  ></div>
                )}
                
                <div className={`flex flex-col gap-1 ${
                  msg.sender === 'patient' ? 'items-end' : 'items-start'
                }`}>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{msg.name}</p>
                  <div className={`rounded-lg p-3 text-sm ${
                    msg.sender === 'patient' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}>
                    <p>{msg.message}</p>
                  </div>
                </div>
                
                {msg.sender === 'patient' && (
                  <div 
                    className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center" 
                    style={{ backgroundImage: `url("${msg.avatar}")` }}
                  ></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Input de mensaje */}
          <div className="border-t border-gray-200 p-4 dark:border-gray-800">
            <div className="relative">
              <input 
                className="w-full rounded-lg border-gray-300 bg-gray-100 py-3 pl-4 pr-12 text-sm text-gray-800 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400" 
                placeholder="Escribe un mensaje..." 
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                className="absolute inset-y-0 right-0 flex items-center justify-center rounded-r-lg bg-primary px-4 text-white hover:bg-primary/90"
                onClick={handleSendMessage}
              >
                <svg fill="currentColor" height="16px" viewBox="0 0 256 256" width="16px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224,48a8,8,0,0,0-8,8V93.55a8,8,0,0,0,3,6.25l-40,32a8,8,0,0,0,0,12.4l40,32a8,8,0,0,0,5,1.75,8,8,0,0,0,8-8V192a8,8,0,0,0-16,0v-8.83l-30.2-24.16,30.2-24.17V128A8,8,0,0,0,232,120V56A8,8,0,0,0,224,48ZM32,48a8,8,0,0,0-8,8v97.55a8,8,0,0,0,3,6.25l40,32a8,8,0,1,0,10-12.4L46.8,154.24,77.2,129.83a8,8,0,1,0-10.4-11.66L32,143.17V56A8,8,0,0,0,32,48Zm96,32a8,8,0,0,0-8,8v88a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Teleconsulta;