import React from 'react'
import ReactDOM from 'react-dom/client'
import SignIn from './components/signIn.jsx'
import { Categories } from './components/categories.jsx'
import ValidatedPhone from './components/validatedPhone.jsx'
import PublicRoutes from './components/publicRoute.jsx'
import PrivateRoutes from './components/privateRoute.jsx'

import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Posts } from './components/posts.jsx'
import { Users } from './components/users.jsx'
import { FetchTest } from './components/fetchTest.jsx'
import { Tags } from './components/tags.jsx'
import { Home } from './components/home.jsx'

const router = createBrowserRouter([
  {
    path: "/posts/viewer",
    element: <div>Post Viewer</div>,
  },
  {
    path: "/login",
    element: <SignIn></SignIn>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/users",
    element: <Users>User</Users>,
  },
  {
    path: "/categories",
    element: <Categories></Categories>
  },
  {
    path: "/posts",
    element: <Posts></Posts>
  },
  {
    path: "/tags",
    element: <Tags>Tags</Tags>
  },
  {
    path: "/fetch/test",
    element: <FetchTest>Tags</FetchTest>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
