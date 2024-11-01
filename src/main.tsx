import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider, useSelector } from 'react-redux'
import { store } from './stores/store.ts'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthWrapper } from './components/wrappers/authWrapper'
import ModulesTemplate from './components/templates/ModulesTemplate.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    index: true,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/modules",
        element: <ModulesTemplate />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </Provider>
  </StrictMode>,
)