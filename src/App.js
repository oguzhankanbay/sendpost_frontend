
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignup';
import Homepage from './pages/Homepage';
import LanguageSelector from './components/LanguageSelector';
import Topbar from './components/Topbar';
import UserPage from './pages/UserPage'
function App() {
  return (
   <div>
    <Topbar/>
  <Routes> 
    <Route path="/" element={<Homepage/>} />
    <Route path="/login" element={<UserLogin/>}/>
    <Route path="/signup" element={<UserSignUp/>}/>
    <Route path="/user/:username" element={<UserPage/>}/>
 </Routes>
 <LanguageSelector/>
   </div> 
  );
}

export default App;
