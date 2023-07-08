import Analytics from "../../views/Analytics";
import CalendarSection from "../../views/Calendar";
import ChartSection from "../../views/ChartSection";
import TableAnalytics from "../../views/Tables";
import { Container, DashboardWrap } from "../../styles/Dashboard";
<<<<<<< HEAD
import ModalSection from "../../components/Modal";
=======
>>>>>>> 865cbc288d66617cabb6946845bd9c49629eba5a
const Dashboard = () => {
  return (
    <Container>
      <DashboardWrap>
        <Analytics />
        <ChartSection />
        <TableAnalytics />
        <CalendarSection />
<<<<<<< HEAD
        <ModalSection />
=======
>>>>>>> 865cbc288d66617cabb6946845bd9c49629eba5a
      </DashboardWrap>
    </Container>
  );
};

export default Dashboard;
