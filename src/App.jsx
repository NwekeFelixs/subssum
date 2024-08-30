import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import AirtimeToCash from "./pages/AirtimeToCash";
import Help from "./pages/Help";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="airtimetocash" element={<AirtimeToCash />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="support" element={<Help />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
