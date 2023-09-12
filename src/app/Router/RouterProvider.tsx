import { Route, Routes, BrowserRouter } from "react-router-dom";
// Lazy
import MainPage from "@/pages/MainPage";
import DocsPage from "@/pages/DocsPage";
import DnaPage from "@/pages/DnaPage";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/docs/:id' element={<DocsPage />} />
        <Route path='/dna/:id' element={<DnaPage />} />
      </Routes>
    </BrowserRouter>
  );
};
