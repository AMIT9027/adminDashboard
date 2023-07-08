import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList";
import DocumentList from "./pages/documentList";
import VideoList from "./pages/videoList";
import CourseList from "./pages/courseList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/video-list" element={<VideoList />} />
          <Route path="/document-list" element={<DocumentList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
