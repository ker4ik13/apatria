import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { lazy } from "react";
// Pages
import MainPage from "@/pages/MainPage";
import DocsPage from "@/pages/DocsPage";
import DnaPage from "@/pages/DnaPage";
import TestPage from "@/widgets/TestPage";
import TestResultPage from "@/pages/TestResultPage";
// Lazy
// const DocsPage = lazy(() => import("@/pages/DocsPage"));
// const DnaPage = lazy(() => import("@/pages/DnaPage"));
// const TestPage = lazy(() => import("@/widgets/TestPage"));
// const TestResultPage = lazy(() => import("@/pages/TestResultPage"));

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/docs/:id' element={<DocsPage />} />
        <Route path='/dna/:id' element={<DnaPage />} />
        <Route path='/test/:id' element={<TestPage />} />
        <Route path='/test-result/' element={<TestResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};
