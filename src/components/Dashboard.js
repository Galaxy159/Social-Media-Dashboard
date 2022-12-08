import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import arrowDown from "../images/icon-down.svg";
import arrowUp from "../images/icon-up.svg";
import DashboardCard from "./DashboardCard";

export default function Dashboard({ isDark }) {
  const dashboardCards = [
    {
      social: facebook,
      name: "@nathanf",
      stats: "1987",
      type: "FOLLOWERS",
      arrow: arrowUp,
      today: "12",
      borderTop: "#198ff5",
    },
    {
      social: twitter,
      name: "@nathanf",
      stats: "1044",
      type: "FOLLOWERS",
      arrow: arrowUp,
      today: "99",
      borderTop: "#1ca0f2",
    },
    {
      social: instagram,
      name: "@realnathanf",
      stats: "11k",
      type: "FOLLOWERS",
      arrow: arrowUp,
      today: "1099",
      borderTop: "#fdc468",
    },
    {
      social: youtube,
      name: "Nathan F.",
      stats: "8239",
      type: "SUBSCRIBERS",
      arrow: arrowDown,
      today: "144",
      borderTop: "#c4032a",
      negative: true,
    },
  ];

  return (
    <>
      <div className="dashboard">
        {dashboardCards.map((card, index) => (
          <DashboardCard
            key={index}
            social={card.social}
            name={card.name}
            stats={card.stats}
            type={card.type}
            arrow={card.arrow}
            today={card.today}
            borderTop={card.borderTop}
            negative={card.negative}
            isDark={isDark}
          />
        ))}
      </div>
    </>
  );
}
