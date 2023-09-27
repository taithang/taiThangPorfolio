import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkPage from "./Pages/WorkPage";
import Contact from "./Pages/ContactPage";
import "./App.css";
import WorkPageDetail from "./Pages/WorkPageDetail";
import { useState } from "react";
import dashBoard from "./assets/Cashflow-dashboard-example.png";
import illustration from "./assets/illustration.png";
import typography from "./assets/typography.png";
import components from "./assets/components.png";
const worksArray = [
  {
    id: 1,
    title: "Designing Dashboards",
    year: "2020",
    type: "Dashboard",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: dashBoard,
  },
  {
    id: 2,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    type: "Illustration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: illustration,
  },
  {
    id: 3,
    title: "36 Days of Malayalam type",
    year: "2018",
    type: "Typography",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: typography,
  },
  {
    id: 4,
    title: "Components",
    year: "2018",
    type: "Components, Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint cupiditate omnis, ullam illum consectetur dolore error doloremque quasi labore sit quidem, laudantium excepturi, facere eius ab similique consequuntur a?",
    picture: components,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage worksArray={worksArray} />} />
          <Route path="/works" element={<WorkPage worksArray={worksArray} />} />
          <Route
            path="works/:id"
            element={<WorkPageDetail worksArray={worksArray} />}
          />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
