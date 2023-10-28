import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sign';
import Home from './pages/Home/Home';
import NavAdmin from './Components/NavAdmin';
import ViewLawyers from './pages/ViewLawyers/ViewLawyers';
import Feedback from './pages/Feeback/Feedback';
import Dashboard from './pages/dashboard/Dashboard';
import Form from './pages/Form/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Sign/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/lawyers" element={<ViewLawyers/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
   </BrowserRouter> 
  // <NavAdmin/>
  );
}

export default App;
