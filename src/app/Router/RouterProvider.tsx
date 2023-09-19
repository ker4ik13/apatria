import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
// Pages
import MainPage from "@/pages/MainPage";
import Preloader from "@/shared/ui/Preloader";
import PredResultPage from "@/pages/PredResultPage";
// import DocsPage from "@/pages/DocsPage";
// import DnaPage from "@/pages/DnaPage";
// import TestPage from "@/widgets/TestPage";
// import TestResultPage from "@/pages/TestResultPage";
// import MicResultPage from "@/pages/MicResultPage";
// import PhotoPage from "@/pages/PhotoPage";
// Lazy
const DocsPage = lazy(() => import("@/pages/DocsPage"));
const DnaPage = lazy(() => import("@/pages/DnaPage"));
const TestPage = lazy(() => import("@/widgets/TestPage"));
const MicResultPage = lazy(() => import("@/pages/MicResultPage"));
const TestResultPage = lazy(() => import("@/pages/TestResultPage"));
const PhotoPage = lazy(() => import("@/pages/PhotoPage"));

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/:scrollTo' element={<MainPage />} />
        <Route
          path='/docs/:id'
          element={
            <Suspense fallback={<Preloader />}>
              <DocsPage />
            </Suspense>
          }
        />
        <Route
          path='/dna/:id'
          element={
            <Suspense fallback={<Preloader />}>
              <DnaPage />
            </Suspense>
          }
        />
        <Route
          path='/test/:id'
          element={
            <Suspense fallback={<Preloader />}>
              <TestPage />
            </Suspense>
          }
        />
        <Route
          path='/test-result/'
          element={
            <Suspense fallback={<Preloader />}>
              <TestResultPage />
            </Suspense>
          }
        />
        <Route
          path='/mic-result/'
          element={
            <Suspense fallback={<Preloader />}>
              <MicResultPage />
            </Suspense>
          }
        />
        <Route
          path='/photo/:id'
          element={
            <Suspense fallback={<Preloader />}>
              <PhotoPage />
            </Suspense>
          }
        />
        <Route
          path='/predresult'
          element={<PredResultPage link='/test-result/' />}
        />
      </Routes>
    </BrowserRouter>
  );
};
