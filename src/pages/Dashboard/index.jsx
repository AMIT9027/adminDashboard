import Analytics from "../../views/Analytics";
import CalendarSection from "../../views/Calendar";
import ChartSection from "../../views/ChartSection";
import TableAnalytics from "../../views/Tables";
import { Container, DashboardWrap } from "../../styles/Dashboard";
import ModalSection from "../../components/Modal";
import FaqModal from "../../components/FaqModal";
import AddCourses from "../AddCourses";
const Dashboard = () => {
  return (
    <Container>
      <DashboardWrap>
        <Analytics />
        <ChartSection />
        <TableAnalytics />
        <CalendarSection />
        <ModalSection />
        <FaqModal />
      </DashboardWrap>
    </Container>
  );
};

export default Dashboard;
