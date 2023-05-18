import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Home } from "./pages/Home";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/store" element={<Store />} />
        <Route path="/About" element={<About />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
