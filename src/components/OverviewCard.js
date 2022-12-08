export default function OverviewCard({
  social,
  arrow,
  stats,
  type,
  percentage,
  negative,
  isDark,
}) {
  return (
    <>
      <div className={`overview__card ${isDark && "darkmode__cardbg"}`}>
        <p className="overview__card--type">{type}</p>
        <div className="overview__card--social">
          <img
            src={social}
            alt="Social icon"
            className="overview__card--social-img"
          />
        </div>
        <p
          className={`overview__card--stats ${isDark && "darkmode__headline"}`}
        >
          {stats}
        </p>
        <div className="overview__card--percentage">
          <div className="overview__card--percentage-arrow">
            <img
              src={arrow}
              alt="Arrow"
              className="overview__card--percentage-arrow-img"
            />
          </div>
          <p
            className={`overview__card--percentage-number ${
              negative && "negative-stats"
            }`}
          >
            {percentage}%
          </p>
        </div>
      </div>
    </>
  );
}
