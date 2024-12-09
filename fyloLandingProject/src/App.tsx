import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import MergComponents from './components/organisms/mergComponents/MergComponents'
import Features from './components/atoms/features/Features';
import Team from './components/atoms/team/Team';
import SignIn from './components/atoms/signIn/SignIn';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MergComponents/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
