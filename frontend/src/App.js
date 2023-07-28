import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
