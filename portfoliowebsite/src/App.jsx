import Home from './pages/Home';
import './App.css';
import ParticlesComponent from './components/particles';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <>
        <ParticlesComponent />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
