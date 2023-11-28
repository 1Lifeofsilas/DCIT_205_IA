import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './files/home';
import About from './files/about';
// import Faculty from './pages/faculty';
import Events from './files/events';
// import Social from './pages/social';
// import Research from './pages/research';
// import Programmers from './pages/programmers';
// import TechTeam from './pages/techteam';
// import Tips from './pages/tips';
// import Contact from './pages/contact';
import Header from './files/header'
import Footer from './files/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/> 
           <Route path='/events' element={<Events />}/>
            {/* 
           <Route path='/faculty' element={<Faculty />}/>
           <Route path='/research-groups' element={<Research />}/>
           <Route path='/programmers' element={<Programmers />}/>
           <Route path='/tech-team' element={<TechTeam />}/>
           <Route path='/social' element={<Social />}/>
           <Route path='/tips' element={<Tips />}/>
           <Route path='/contact' element={<Contact />}/> */}
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;