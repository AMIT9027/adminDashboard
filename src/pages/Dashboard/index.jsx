import Analytics from "../../views/Analytics";
import CalendarSection from "../../views/Calendar";
import ChartSection from "../../views/ChartSection";
import TableAnalytics from "../../views/Tables";
import { Container, DashboardWrap } from "../../styles/Dashboard";
const Dashboard = () => {
  return (
    <Container>
      <DashboardWrap>
        <Analytics />
        <ChartSection />
        <TableAnalytics />
        <CalendarSection />
      </DashboardWrap>
    </Container>
  );
};

export default Dashboard;
