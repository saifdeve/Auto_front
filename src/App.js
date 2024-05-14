import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <main className='min-h-[calc(100vh-90px)]'>
        {/* `Outlet` est le point de rendu pour les composants associés aux routes */}
        <Outlet/>
      </main>
  );
}

export default App;
