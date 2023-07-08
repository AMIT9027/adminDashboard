import AddCourses from "./pages/AddCourses";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList";
import DocumentList from "./pages/documentList";
import VideoList from "./pages/videoList";
import CourseList from "./pages/courseList";
import GraphPage from "./pages/GraphPage";
import Login from "./pages/Login";
import OrderList from "./pages/OrderList";

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
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/metrics" element={<GraphPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
