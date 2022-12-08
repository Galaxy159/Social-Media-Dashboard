import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import arrowDown from "../images/icon-down.svg";
import arrowUp from "../images/icon-up.svg";
import OverviewCard from "./OverviewCard";

export default function Overview({ isDark }) {
  const overviewCards = [
    {
      type: "Page Views",
      social: facebook,
      stats: "87",
      arrow: arrowUp,
      percentage: "3",
    },
    {
      type: "Likes",
      social: facebook,
      stats: "52",
      arrow: arrowDown,
      percentage: "2",
      negative: true,
    },
    {
      type: "Likes",
      social: instagram,
      stats: "5462",
      arrow: arrowUp,
      percentage: "2257",
    },
    {
      type: "Profile Views",
      social: instagram,
      stats: "52k",
      arrow: arrowUp,
      percentage: "31375",
    },
    {
      type: "Retweets",
      social: twitter,
      stats: "117",
      arrow: arrowUp,
      percentage: "303",
    },
    {
      type: "Likes",
      social: twitter,
      stats: "507",
      arrow: arrowUp,
      percentage: "553",
    },
    {
      type: "likes",
      social: youtube,
      stats: "107",
      arrow: arrowDown,
      percentage: "19",
      negative: true,
    },
    {
      type: "Total Views",
      social: youtube,
      stats: "1407",
      arrow: arrowDown,
      percentage: "12",
      negative: true,
    },
  ];
  return (
    <>
      <div className="overview">
        <h2 className={`overview__headline ${isDark && "darkmode__headline"}`}>
          Overview - Today
        </h2>
        <div className="overview__container">
          {overviewCards.map((card, index) => (
            <OverviewCard
              key={index}
              type={card.type}
              social={card.social}
              stats={card.stats}
              arrow={card.arrow}
              percentage={card.percentage}
              negative={card.negative}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </>
  );
}
