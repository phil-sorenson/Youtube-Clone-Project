// YoutubePage -- contains descendants from SearchResults & VideoPage

// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { KEY } from "./localKey";

// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YoutubePage from "./pages/YoutubePage/YoutubePage";
// import SearchResults from "./pages/SearchResultsPage/SearchResults";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoPage from "./pages/VideoPage/VideoPage";

// import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  return (
    <div>
      <Navbar />
      {/* <SearchResults /> */}
      <VideoPage /> 
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <YoutubePage />
            </PrivateRoute>
          }
        />
        <Route path= '/videopage/:videoId/' element={<VideoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
