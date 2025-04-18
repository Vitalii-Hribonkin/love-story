import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import FourthPage from "./pages/FourthPage/FourthPage";
import FifthPage from "./pages/FifthPage/FifthPage";
import Envelopes from "./components/Envelopes/Envelopes";
import ScaredPage from "./pages/Scared/ScaredPage";
import BravePage from "./pages/BravePage/BravePage";

export default function App() {
  return (
    <Router>
      <Envelopes/>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/fifth" element={<FifthPage />} />
        <Route path="/scared" element={<ScaredPage />} />
        <Route path="/brave" element={<BravePage/>}/>
      </Routes>
    </Router>
  );
}
