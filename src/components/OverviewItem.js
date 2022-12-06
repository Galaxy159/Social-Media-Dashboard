export default function OverviewItem({
  social,
  arrow,
  stats,
  type,
  percentage,
}) {
  return (
    <>
      <div className="overview__item">
        <p className="overview__item--type">{type}</p>
        <div className="overview__item--social">
          <img
            src={social}
            alt="Social icon"
            className="overview__item--social-img"
          />
        </div>
        <p className="overview__item--stats">{stats}</p>
        <div className="overview__item--percentage">
          <div className="overview__item--percentage-arrow">
            <img
              src={arrow}
              alt="Arrow"
              className="overview__item--percentage-arrow-img"
            />
          </div>
          <p className="overview__item--percentage-number">{percentage}%</p>
        </div>
      </div>
    </>
  );
}
