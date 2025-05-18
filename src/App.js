import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Collective from "./pages/Collective";
import History from "./pages/History";
import Write from "./pages/Write";
import Share from "./pages/Share";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/collective" element={<Collective />} />
        <Route path="/history" element={<History />} />
        <Route path="/write" element={<Write />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </Router>
  );
}

export default App;
