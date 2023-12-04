import React from "react";
import { Route, Routes } from "react-router-dom";
import { QuestionProvider } from "./contexts/QuestionContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import HomeUser from "./pages/UserPage/HomeUser";
import Survey from "./pages/UserPage/Survey";
import LegalPage from "./pages/UserPage/LegalPage";
import Login from "./pages/Form/Login";
import DashboardAnswer from "./pages/Administrateur/DashboardAnswer";
import DashboardAdmin from "./pages/Administrateur/DashboardAdmin";
import SignUp from "./pages/Form/SignUp";
import ScoreOne from "./components/Score/ScoreOne";
import ScoreTwo from "./components/Score/ScoreTwo";
import ScoreThree from "./components/Score/ScoreThree";
import SurveyPage from "./components/AdminPage/SurveyPage";
import "./App.css";
import AdminSetting from "./components/AdminPage/AdminSetting";
// import EligibleScore from "./components/Score/EligibleScore";
// import UnknownScore from "./components/Score/UnknownScore";
// import NotEligibleScore from "./components/Score/NotEligibleScore";
// import SignUp from "./pages/Form/SignUp";
// import Dashboard from "./pages/Administrateur/Dashboard";
// import Register from "./pages/Form/Register";
// import SignUp from "./pages/Form/SignUp";
// import SignUp from "./pages/Form/SignUp";
// import Legal from "./pages/Legal";
// import Register from "./pages/Register";
// import LoginForm from "./pages/LoginForm";
// import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <AuthContextProvider>
      <QuestionProvider>
        <div className="App">
          <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomeUser />} />
            <Route path="/categories/:categoryId" element={<Survey />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/resultat/inconnu" element={<ScoreThree />} />
            <Route path="/resultat/non" element={<ScoreTwo />} />
            <Route path="/resultat/oui" element={<ScoreOne />} />
            <Route path="/result/:userId" element={<DashboardAnswer />} />
            <Route path="/dashboard" element={<DashboardAdmin />} />
            <Route path="/dashboard/form" element={<SurveyPage />} />
            <Route path="/dashboard" element={<DashboardAdmin />} />
            <Route path="/dashboard/admin" element={<AdminSetting />} />
          </Routes>
        </div>
      </QuestionProvider>
    </AuthContextProvider>
  );
}

export default App;
