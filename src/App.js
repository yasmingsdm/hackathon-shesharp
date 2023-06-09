import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header/>
      <section className='main'>
        <Sidebar/>
        <h1>Main</h1>
        {/* <Main/> */}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
