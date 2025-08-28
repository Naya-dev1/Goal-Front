import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ongoing from "./pages/Ongoing";
import Completed from "./pages/Completed";
import NavBar from "./components/NavBar";
import CreateGoal from "./pages/CreateGoal";
import AllGoals from "./pages/AllGoals";
import Progress from "./pages/Progress";
import CoverPage from "./pages/CoverPage";
import { Toaster } from "react-hot-toast";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" />
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/progress/:id" element={<Progress />} />
          <Route path="/create" element={<CreateGoal />} />
          <Route path="/all" element={<AllGoals />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://goal-back-t29s.onrender.com
