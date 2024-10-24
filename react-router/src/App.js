import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import NavBar from './Component/NavBar';
import MainComponent from "./admin_template/IndexComponent.js";
import "./admin_template/assets/css/Custom.css";
import "./admin_template/assets/css/dashboard.css";
import "./admin_template/assets/js/dashboard.js";
import SidebarComponent from "./admin_template/layouts/SidebarComponent.js";
import NavbarComponent from "./admin_template/layouts/NavbarComponent.js";
import FooterComponent from "./admin_template/layouts/FooterComponent.js";
import IndexComponent from "./admin_template/IndexComponent.js";
import UsersComponent from "./admin_template/users/UsersComponent.js";
// import 'bootstrap/dist/css/bootstrap.css';
import ProfileComponent from "./admin_template/users/ProfileComponent.js";
import AboutComponent from "./admin_template/users/AboutComponent.js";
import EducationComponent from "./admin_template/users/EducationComponent.js";
import JobComponent from "./admin_template/users/JobComponent.js";
import PostComponent from "./admin_template/posts/PostComponent.js";
import PostForm from "./admin_template/posts/PostForm.js";
import PostData from './admin_template/posts/PostData.js';
// import { Counter } from "./components/practice/redux/Counter.js";


function App() {
  return (
    <>
      {/* <div>
        <BrowserRouter>
          <h1>Hello React router</h1>
          <NavBar />
          <Routes>
            
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div> */}

      <BrowserRouter>
        {/* <HashRouter> */}
        <div className="wrapper">
          <SidebarComponent />
          <div className="main">
            <NavbarComponent />
            <main className="content">
              <Routes>
                <Route path="/" element={<IndexComponent />} />
                <Route>
                  <Route path="/users" element={<UsersComponent />} />
                  <Route path="/users/profile/:id/:subject" element={<ProfileComponent />} />
                  <Route path="/users/about" element={<AboutComponent />} >
                    <Route path="/users/about/education" element={<EducationComponent />} />
                    <Route path="/users/about/job" element={<JobComponent />} />
                  </Route>
                  <Route path="/posts" element={<PostComponent />} />
                  <Route path='/posts/postdata/:id' element={<PostData />} />
                  <Route path="/create-post" element={<PostForm />} />
                  {/* <Route path="/counter" element={<Counter />} /> */}
                </Route>
              </Routes>
            </main>
            <FooterComponent />
          </div>
        </div>
        {/* </HashRouter> */}
      </BrowserRouter >
    </>
  );
}

export default App;
