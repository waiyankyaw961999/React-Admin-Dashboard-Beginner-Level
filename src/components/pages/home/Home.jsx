import "./home.css";
import FeatureInfo from "../../featuredinfo/Featuredinfo";
import Chart from "../../chart/Chart";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

import { userData } from "../../data";
export default function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
