import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages
import MainPage from '@/pages/MainPage';
import PredResultPage from '@/pages/PredResultPage';
import Preloader from '@/shared/ui/Preloader';
// Lazy
const DocsPage = lazy(() => import('@/pages/DocsPage'));
const DnaPage = lazy(() => import('@/pages/DnaPage'));
const TestPage = lazy(() => import('@/widgets/TestPage'));
const MicResultPage = lazy(() => import('@/pages/MicResultPage'));
const TestResultPage = lazy(() => import('@/pages/TestResultPage'));
const TestPage2 = lazy(() => import('@/widgets/TestPage2'));

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
					path='/test2/:id'
					element={
						<Suspense fallback={<Preloader />}>
							<TestPage2 />
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
					path='/predresult'
					element={<PredResultPage link='/test-result/' />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
