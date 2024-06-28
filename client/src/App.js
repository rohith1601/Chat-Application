import {BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat/>} />
          <Route path="/join" element={<Join/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
