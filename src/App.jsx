import './App.css';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Main } from './components/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
};

export default App;
