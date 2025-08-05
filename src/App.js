import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from "react-router-dom";import SignUp from './component/auth/SignUp';
import SignIn from './component/auth/SignIn';
import AboutUS from './component/staticPages/AboutUs';
import Home from './component/Home';
import CoursesOffered from './component/CoursesOffered';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesOffered />} />



        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
