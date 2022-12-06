import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import arrowDown from "../images/icon-down.svg";
import arrowUp from "../images/icon-up.svg";
import DashboardItem from "./DashboardItem";

export default function Dashboard() {
  const dashboardItems = [
    {
      social: facebook,
      name: "@nathanf",
      stats: "1987",
      type: "FOLLOWERS",
      arrow: arrowUp,
      today: "12",
    },
    {
      social: twitter,
      name: "@nathanf",
      stats: "1044",
      type: "FOLLOWERS",
      arrow: arrowUp,
      today: "99",
    },
    {
      social: instagram,
      name: "@realnathanf",
      stats: "11k",
      type: "FOLLOWERS",
      arrow: arrowUp,
      today: "1099",
    },
    {
      social: youtube,
      name: "Nathan F.",
      stats: "8239",
      type: "SUBSCRIBERS",
      arrow: arrowDown,
      today: "144",
    },
  ];

  return (
    <>
      <div className="dashboard">
        {dashboardItems.map((item, index) => (
          <DashboardItem
            key={index}
            social={item.social}
            name={item.name}
            stats={item.stats}
            type={item.type}
            arrow={item.arrow}
            today={item.today}
          />
        ))}
      </div>
    </>
  );
}
