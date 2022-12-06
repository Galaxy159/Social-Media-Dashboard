export default function Header({ isDark, setIsDark }) {
  return (
    <>
      <div className={`header__container ${isDark && "darkmode__headerbg"}`}>
        <header className="header">
          <div className="header__content">
            <h1
              className={`header__headline ${isDark && "darkmode__headline"}`}
            >
              Social Media Dashboard
            </h1>
            <p className="header__text">Followers: 23,004</p>
          </div>
          <div className="header__darkmode">
            <p className="header__darkmode--text">Dark Mode</p>
            <label className="header__darkmode--switch">
              <input
                type="checkbox"
                checked={isDark}
                onChange={(e) => setIsDark(e.target.checked)}
              />
              <span className="header__darkmode--switch-slider"></span>
            </label>
          </div>
        </header>
      </div>
    </>
  );
}
