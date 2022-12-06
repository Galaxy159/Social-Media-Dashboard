export default function DashboardItem({
  social,
  arrow,
  name,
  stats,
  type,
  today,
}) {
  return (
    <>
      <div className="dashboard__item">
        <div className="dashboard__item--header">
          <div className="dashboard__item--header-icon">
            <img
              src={social}
              alt="Social icon"
              className="dashboard__item--header-icon-img"
            />
          </div>
          <div className="dashboard__item--header-name">{name}</div>
        </div>
        <p className="dashboard__item--stats">{stats}</p>
        <p className="dashboard__item--type">{type}</p>
        <div className="dashboard__item--new">
          <div className="dashboard__item--new-arrow">
            <img
              className="dashboard__item--new-arrow-img"
              src={arrow}
              alt="Arrow"
            />
          </div>
          <p className="dashboard__item--new-text">{today} Today</p>
        </div>
      </div>
    </>
  );
}
