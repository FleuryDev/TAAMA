import  {
  Fragment,
  useEffect,
} from 'react';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

import BlogShow from './components/Blog/Index/BlogShow';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Home/Contact';
import Home from './components/Home/Home';
import Dashboard from './Dashboard/Dashboard';
import NewArticle from './Dashboard/pages/Blog/New';
import Messages from './Dashboard/pages/Messages';
import PostsIndex from './Dashboard/pages/PostsIndex';
import Setting from './Dashboard/pages/Setting';
import Configuration from './Dashboard/pages/setting/Configuration';
import Data from './Dashboard/pages/setting/Data';
import Profile from './Dashboard/pages/setting/Profile';
import Themes from './Dashboard/pages/setting/Themes';
// @ts-ignore
import CUSTOMTHEMES from './Dashboard/pages/setting/Themes/custom_theme.json';
import Theme from './Dashboard/pages/setting/Themes/Themes';
import Tasks from './Dashboard/pages/Tasks';
import Users from './Dashboard/pages/Users';
import WritterApp from './Dashboard/pages/Writters/Index';
import BdLayout from "./components/BD/Layout";
import Bd from "./components/BD";
import UserDashboard from "./components/user/Dashboard/UserDashboard";
import View from "./components/user/Dashboard/View";
import BdList from "./components/user/Dashboard/BD/BdList";
import Favorites from "./components/user/Dashboard/Favorites";
import UserMessages from "./components/user/Dashboard/Messages";
import BDViewList from "./components/user/Dashboard/BD/BDViewList";
import viewPage from "./components/user/Dashboard/BD/viewPage";
import ViewPage from "./components/user/Dashboard/BD/viewPage";
import PaiementPage from "./components/paiements/PaiementPage";
import PaiementIndex from "./components/paiements/PaiementIndex";

const links = [
  { uri: '/Home', name: 'Acueil', className: 'active', icon: 'home' },
  { uri: '/about', name: 'À propos', className: null, icon: 'info' },
  { uri: '/bandes-desinees', name: 'BD', className: null, icon: 'manga' },
  { uri: '/contact', name: 'Contact', className: null, icon: 'contact_support' }
]


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',

        element: <Home />
      }, {
        path: 'Home',

        element: <Home />
      },
      {
        path: 'about',
        element: <div>About</div>
      },
      {
        path: 'contact',
        element: <Contact />
      },

    ]
  },
  {
    path: '/bandes-desinees',
    element: <BdLayout links={links}  />,

    children: [
      {
        path: '',
        element: <Bd />
      }
      , {
        path: ':slug',
        element: <BlogShow />
      }
    ]

  },
  {
    path: '/admin/dashboard/',
    element: <Dashboard />,
    children: [
      {
        path: 'index',
        element: <PostsIndex />
      },
      {
        path: 'posts/',
        element: <PostsIndex />,
        children: [

        ]

      },
      {
        path: 'messages',

        element: <Messages />
      },
      {
        path: 'tasks',
        element: <Tasks />
      },
      {
        path: 'settings',
        element: <Setting />,
        children: [
          {
            path: 'data',
            element: <Data />
          },
          {
            path: 'configuration',
            element: <Configuration />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'themes',
            element: <Themes />
          }
        ]
      },
      {
        path: 'users',
        element: <Users />
      }
    ]
  },
  {
    path: '/article/editor',
    element: <WritterApp />,
    children: [
      {
        path: 'new',
        element: <NewArticle />
      }
    ]

  },
  {
    path:'/dashboard',
    element : <UserDashboard/>,
    children :[
      {
        path:'',
        element: <View/>
      },
      {
        path:'accueil',
        element: <View/>
      },
      {
        path: 'bd',
          element: '',
          children: [
              {
                  path :'',
                  element:<BDViewList/>
              },
              {
                  path:':slug',
                  element : <ViewPage/>
              },
            { path:'get',
              element: '',
              children:
              [{
                path:':slug',
                element: <PaiementIndex/>
              }]
            }
          ]
      },
      {
        path: 'favorites',
        element: <Favorites/>
      },
      {
        path:'messages',
        element: <UserMessages/>
      }

    ]
  }

]);


function App() {
  useEffect(() => {
    Theme.loader(CUSTOMTHEMES)
  }, []);
  return <RouterProvider router={router} />
}

function Layout() {

  return <Fragment>
    <Header AppName="My App" navigation={links}  />

    <main className='pt-20  min-h-[30vh] bg-[url(/bg2.png)] bg-fixed'>
      <Outlet
      />
    </main>
    <Footer />
  </Fragment>
}

export default App
