import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="#">
            <div className="logo-img"></div>
          </Link>
          <div className="header-text">
            <h2>
              <span>kit</span> - keep in touch
            </h2>
            <h3>Знакомаства вслепую</h3>
          </div>
        </div>
        <div className="header-right">
          <div className="links-container">
            <div>
              <Link to="#">
                <h5>Мой профиль</h5>
              </Link>
            </div>
            <BsDot style={{ fontSize: "25px", color: "#5e278e" }} />
            <div>
              <Link to="#">
                <h5>Анкеты китов</h5>
              </Link>
            </div>
            <BsDot style={{ fontSize: "25px", color: "#5e278e" }} />
            <div>
              <Link to="#">
                <h5>Расписание для встреч</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
