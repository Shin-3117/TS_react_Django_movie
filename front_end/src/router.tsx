import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';
import {
  HomePage,
} from './pages';

  
  
  const route = (
  
    <Route>
      <Route path="/" element={<HomePage />} />
    </Route>
  );
  
  const rootRouter = createBrowserRouter(createRoutesFromElements(route));
  export default rootRouter;