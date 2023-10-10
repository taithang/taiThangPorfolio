import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WorkPage from "./Pages/WorkPage";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/ContactPage";
import WorkPageDetail from "./Pages/WorkPageDetail";
import dashBoard from "./assets/Cashflow-dashboard-example.png";
import illustration from "./assets/illustrations.png";
import component from "./assets/component.png";
import typography from "./assets/typography.png";
import dashBoard2 from "./assets/dashboard2.png";
import illustration2 from "./assets/illustration2.jpg";
import component2 from "./assets/components2.png";
import typography2 from "./assets/typography2.png";

const worksArray = [
  {
    id: 1,
    title: "Designing Dashboards",
    year: "2020",
    type: "Dashboard",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: dashBoard,
    picture2: dashBoard2,
  },
  {
    id: 2,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    type: "Illustration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: illustration,
    picture2: illustration2,
  },
  {
    id: 3,
    title: "36 Days of Malayalam type",
    year: "2018",
    type: "Typography",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: typography,
    picture2: typography2,
  },
  {
    id: 4,
    title: "Components",
    year: "2018",
    type: "Components, Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: component,
    picture2: component2,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage worksArray={worksArray} />} />
          <Route path="/works" element={<WorkPage worksArray={worksArray} />} />
          <Route path="works/:id" element={<WorkPageDetail />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
