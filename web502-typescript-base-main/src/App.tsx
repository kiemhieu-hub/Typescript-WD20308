import { Routes, Route } from "react-router-dom";
import  MainLayout from "./layouts/MainLayout";


import ListPage from "./pages/List";
import AddPage from "./pages/Add";


function App() {
  return (

    
    <Routes>
      {/* Layout chung */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<ListPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:id" element={<AddPage />} />
      </Route>
    </Routes>
  );
}

export default App;
