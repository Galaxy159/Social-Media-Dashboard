import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import arrowDown from "../images/icon-down.svg";
import arrowUp from "../images/icon-up.svg";
import OverviewItem from "./OverviewItem";

export default function Overview() {
  const overviewItems = [
    {
      type: "Likes",
      social: facebook,
      stats: "52",
      arrow: arrowDown,
      percentage: "2",
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
    },
    {
      type: "Total Views",
      social: youtube,
      stats: "1407",
      arrow: arrowDown,
      percentage: "12",
    },
  ];
  return (
    <>
      <div className="overview">
        <h2 className="overview__headline">Overview - Today</h2>
        {overviewItems.map((item, index) => (
          <OverviewItem
            key={index}
            type={item.type}
            social={item.social}
            stats={item.stats}
            arrow={item.arrow}
            percentage={item.percentage}
          />
        ))}
      </div>
    </>
  );
}
