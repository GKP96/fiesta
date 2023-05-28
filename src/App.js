import Navabar from './components/mainPage';
import ActingDrama from './components/actingDrama';
import LiteratureDebate from './components/literatureDebate';
import FineArts from './components/fineArts';
import MusicDance from './components/musicDance';
import {Routes, Route} from "react-router-dom";
import Tech from './components/tech';
import Footer from './components/footer';
import Gallery from './components/gallery';
import Header from './components/header';
import Members from './components/coordinator/members';
import SponseredBy from './components/sponseredBy';
import EventsReg from './components/eventsReg';
import UserIdReg from './components/UserIdReg';
import Details from './components/f_details';
import Animation from './components/animation';
import Facility from './components/coordinator/facility';
import Core from './components/coordinator/core';
import Senior from './components/coordinator/senior';
import Junior from './components/coordinator/junior'
import Video from './components/video';
import './App.css';

function App() {

  return (
    <div className="App">
    
     <Routes>
          <Route path='/' element = {<div><Animation/></div>}></Route>
</Routes>


          <Routes>
          <Route path='/mainPage' element = {<div><Header/><Navabar/><SponseredBy/><Video/><Footer/></div>}></Route>                            
          <Route path='/acting-drama' element={<div><Header/><ActingDrama/><Footer/></div>}></Route>
          <Route path='/literature-debate' element={<div><Header/><LiteratureDebate/><Footer/></div>}></Route>
          <Route path='/music-dance' element={<div><Header/><MusicDance/><Footer/></div>}></Route>
          <Route path='/fine-arts' element={<div><Header/><FineArts/><Footer/></div>}></Route>
          <Route path='/tech-team' element={<div><Header/><Tech/><Footer/></div>}></Route>
          <Route path='/members' element={<div><Header/><Members/><Footer/></div>}></Route>
          <Route path='/gallery' element={<div><Header/><Gallery/><Footer/></div>}> </Route>
          <Route path='/event-reg' element={<div><Header/><EventsReg/></div>}> </Route>
          <Route path='/userId-reg' element={<div><Header/><UserIdReg/><Footer/></div>}> </Route>
          <Route path='/details' element={<div><Header/><Details/><Footer/></div>}> </Route>
          <Route path='/facilityCoordinator' element={<div><Header/><Facility/><Footer/></div>}></Route>
          <Route path='/coreCoordinator' element={<div><Header/><Core/><Footer/></div>}></Route>
          <Route path='/seniorCoordinator' element={<div><Header/><Senior/><Footer/></div>}></Route>
          <Route path='/juniorCoordinator' element={<div><Header/><Junior/><Footer/></div>}></Route>
          </Routes>

      
    </div>
  );
}

export default App;
