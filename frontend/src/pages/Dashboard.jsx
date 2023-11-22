import Headeradmin from "../components/HeaderAdmin";
import FilterBar from "../components/FilterBar";
import FooterAdmin from "../components/FooterAdmin";
import User from "../components/User";
import "../styles/Dashboard.css";

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
