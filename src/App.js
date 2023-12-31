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
import Sidebar from "./components/Sidebar";
import { AppContainer } from "./styles/Commen";
import FaqList from "./pages/FaqList";
import WorkWith from "./pages/workWith";
import CourseDetailsList from "./pages/course-details-list";

function App() {
  return (
    <>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <>
                  <div>
                    <Sidebar />
                  </div>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/user-list" element={<UserList />} />
                    <Route path="/course-list" element={<CourseList />} />
                    <Route path="/client-list" element={<WorkWith />} />
                    <Route path="/course" element={<AddCourses />} />
                    <Route
                      path="/course-detail-list"
                      element={<CourseDetailsList />}
                    />
                    <Route path="/video-list" element={<VideoList />} />
                    <Route path="/document-list" element={<DocumentList />} />
                    <Route path="/order-list" element={<OrderList />} />
                    <Route path="/metrics" element={<GraphPage />} />
                    <Route path="/faq-list" element={<FaqList />} />
                  </Routes>
                </>
              }
            />
          </Routes>
        </Router>
      </AppContainer>
    </>
  );
}

export default App;
