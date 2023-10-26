import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';
import {
  HomePage,
} from './pages';
import Layout from './components/Layout';

  
  
  const route = (
  
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
    </Route>
  );
  
  const rootRouter = createBrowserRouter(createRoutesFromElements(route));
  export default rootRouter;