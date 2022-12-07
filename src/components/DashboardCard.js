export default function DashboarCard({
  social,
  arrow,
  name,
  stats,
  type,
  today,
  borderTop,
  posneg,
  negative,
}) {
  return (
    <>
      <div
        className="dashboard__card"
        style={{ borderTop: `4px solid ${borderTop}` }}
      >
        <div className="dashboard__card--header">
          <div className="dashboard__card--header-icon">
            <img
              src={social}
              alt="Social icon"
              className="dashboard__card--header-icon-img"
            />
          </div>
          <div className="dashboard__card--header-name">{name}</div>
        </div>
        <p className="dashboard__card--stats">{stats}</p>
        <p className="dashboard__card--type">{type}</p>
        <div className="dashboard__card--new">
          <div className="dashboard__card--new-arrow">
            <img
              className="dashboard__card--new-arrow-img"
              src={arrow}
              alt="Arrow"
            />
          </div>
          <p
            className={`dashboard__card--new-text ${
              negative && "negative-stats"
            }`}
            style={{ color: posneg }}
          >
            {today} Today
          </p>
        </div>
      </div>
    </>
  );
}
