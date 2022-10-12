import QuestionType from "./pages/QuestionType";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Review from "./pages/Review";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createquestion" exact element={<QuestionType />} />
        <Route path="/quiz/:quizId" exact element={<Review />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/quiz" exact element={<Dashboard />} />
        <Route path="/settings" exact element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
