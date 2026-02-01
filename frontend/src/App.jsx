import Landing from "./pages/Landing";
import Auth from './pages/Auth';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';


export default function App() {
        <Landing />

  return( 

       <Routes>


      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
