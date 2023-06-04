import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

// Components
// import Home from "./components/Home";
// import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AudioCallScreen from "./components/AudioCall";
import VideoCallScreen from "./components/VideoCall";
// import Register from "./components/Register";

// Private Route component
// const PrivateRoute = ({
//   path,
//   element: Element,
//   authenticated,
//   handleLogout,
// }) => {
//   return authenticated ? (
//     <Element handleLogout={handleLogout} />
//   ) : (
//     <Navigate to="/login" replace state={{ from: path }} />
//   );
// };
const App = () => {
  // const [authenticated, setAuthenticated] = useState(true);

  // // Function to handle login
  // const handleLogin = () => {
  //   setAuthenticated(true);
  // };

  // // Function to handle logout
  // const handleLogout = () => {
  //   setAuthenticated(false);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/call/audio" element={<AudioCallScreen />} />
        <Route path="/call/video" element={<VideoCallScreen />} />

        {/* <Route
            path="/login"
            element={
              <Login handleLogin={handleLogin} authenticated={authenticated} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute
                element={Dashboard}
                authenticated={authenticated}
                handleLogout={handleLogout}
              />
            }
          /> */}
      </Routes>
    </Router>
  );
};

export default App;
