import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './files/home';
import About from './files/about';
import Events from './files/events';
import Header from './files/header'
import Footer from './files/footer';
import Alumni from './files/alumni';
import Staff from './files/staff';
import Gallery from './files/gallery';
import History from './files/history';
import Resources from './files/resources';
import People from './files/people';
import Contact from './files/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/> 
           <Route path='/events' element={<Events />}/>
           <Route path='/alumni' element={<Alumni />}/>
           <Route path='/staff' element={<Staff />}/>
           <Route path='/history' element={<History/>}/>
           <Route path='/gallery' element={<Gallery />}/>
           <Route path='/resources' element={<Resources />}/>
           <Route path='/people' element={<People />}/>
          <Route path='/contact' element={<Contact />}/> 
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;