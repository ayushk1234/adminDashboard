import logo from './logo.svg';
import {
  createBrowserRouter,BrowserRouter ,Router,Route,Routes,
  RouterProvider,

} from "react-router-dom";
// import './App.css';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'

function App() {
  return ( 
    <div  >
      
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    {/* lama dev */}

    {
      /* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header> */
    } 
    </div>
  );
}

export default App;