import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages";
import SignupPage from "./pages/SignupPage";
import DrawingPage from "./pages/drawing/DrawingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/drawing" element={<DrawingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
