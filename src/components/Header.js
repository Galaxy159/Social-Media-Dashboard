export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <h1 className="header__headline">Social Media Dashboard</h1>
          <p className="header__text">Followers: 23,004</p>
        </div>
        <div className="header__darkmode">
          <p className="header__darkmode--text">Dark Mode</p>
          <label className="header__darkmode--switch">
            <input type="checkbox" />
            <span className="header__darkmode--switch-slider"></span>
          </label>
        </div>
      </header>
    </>
  );
}
