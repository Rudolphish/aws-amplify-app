import "./App.css";
import BlogPage from "./Components/Pages/BlogPage";
import Homepage from "./Components/Pages/Homepage";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
