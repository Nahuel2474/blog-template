import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-poppins">
      <BrowserRouter basename="/blog-template/">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/posts" element={<Posts />} />
          </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
