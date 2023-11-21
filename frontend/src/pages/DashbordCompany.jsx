import NavDashbordCompany from "../components/NavDashbordCompany";
// eslint-disable-next-line import/no-named-as-default
import PublishOffer from "../components/PublishOffer";

export default function DashbordCompany() {
  return (
    <div className="dashbord_company">
      <NavDashbordCompany />

      <PublishOffer />
    </div>
  );
}
