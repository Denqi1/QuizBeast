import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { HomePage } from '@/pages/Home';
import { DifficultyPage } from '@/pages/Difficulty';
import { GamePage } from '@/pages/Game';
import { CategoryPage } from '@/pages/Category';
import { ResultPage } from '@/pages/Result';
import { Page404 } from '@/pages/404';

import { routePaths } from '@/shared/lib/reactRouter';

const routesMap = {
  home: {
    path: routePaths.home,
    component: <HomePage />,
  },
  category: {
    path: routePaths.category,
    component: <CategoryPage />,
  },
  difficulty: {
    path: routePaths.difficulty,
    component: <DifficultyPage />,
  },
  game: {
    path: routePaths.game,
    component: <GamePage />,
  },
  result: {
    path: routePaths.result,
    component: <ResultPage />,
  },
  notFound: {
    path: routePaths.notFound,
    component: <Page404 />,
  },
};

const createRoutes = () => {
  return Object.entries(routesMap).map(([key, value]) => {
    const { component, path } = value;

    return <Route key={key} path={path} element={component} />;
  });
};

const routes = createRoutesFromElements(createRoutes());
const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
