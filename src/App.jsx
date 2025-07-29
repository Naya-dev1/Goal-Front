import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ongoing from "./pages/Ongoing";
import Completed from "./pages/Completed";
import NavBar from "./components/NavBar";
import CreateGoal from "./pages/CreateGoal";
import AllGoals from "./pages/AllGoals";
import Progress from "./pages/Progress";
import CoverPage from "./pages/CoverPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/create" element={<CreateGoal />} />
          <Route path="/all" element={<AllGoals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
