import Headeradmin from "../../components/Header/HeaderAdmin";
import FilterBar from "../../components/AdminPage/FilterBar";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import User from "../../components/AdminPage/User";
import "../../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Headeradmin />
      <FilterBar />
      <User />
      <FooterAdmin />
    </div>
  );
}

export default Dashboard;
