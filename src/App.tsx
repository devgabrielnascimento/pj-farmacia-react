import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <div className='min-h-[80vh]'>
    <Home/>
    </div>
    <Footer/>
    </>
);
}
export default App;