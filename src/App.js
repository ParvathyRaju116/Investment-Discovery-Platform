import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./CommonComponents/Home";
import InnovatorAuth from "./Innovator/Innovator_Auth/InnovatorAuth";
import InnovatorProfile from "./Innovator/InnovatorProfile/InnovatorProfile";
import InnovatorProfileEdit from "./Innovator/InnovatorProfile/InnovatorProfileEdit";
import InnovatorProjects from "./Innovator/InnovatorProjects/InnovatorProjects";
import ProjectView from "./Innovator/InnovatorProjects/ProjectView";
import InvestorProjects from "./Investor/InvestorProjects/InvestorProjects";
import InvestorProjectView from "./Investor/InvestorProjects/InvestorProjectView";
import InnovatorMessages from "./Innovator/InnovatorMessages/InnovatorMessages";
import InnovatorHome from "./Innovator/InnovatorHome/InnovatorHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<InnovatorAuth />}></Route>
        <Route path="/projectview/:id" element={<ProjectView />} />
        <Route path="/allProjects" element={<InvestorProjects />}></Route>

        {/* Innovator */}
        <Route path="/innovator/profile" element={<InnovatorProfile />}></Route>
        <Route
          path="/innovator/profile-edit"
          element={<InnovatorProfileEdit />}
        ></Route>
        <Route
          path="/innovator/projects"
          element={<InnovatorProjects />}
        ></Route>
        <Route
          path="/innovator/messages"
          element={<InnovatorMessages />}
        ></Route>
        <Route path="/innovator/home" element={<InnovatorHome />}></Route>
        {/* Investor */}
        <Route
          path="/investor/project/id"
          element={<InvestorProjectView />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
