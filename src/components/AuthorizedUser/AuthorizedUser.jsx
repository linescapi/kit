import { Link } from "react-router-dom";

const AuthorizedUser = () => {
  return (
    <div className="background-color">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div className="user-form">
          <Link to="#">
            <div className="edit-form">
              <p>Изменить анкету</p>
            </div>
            <div className="audio-rec">
              <audio src="" controls style={{ display: "none" }}></audio>
            </div>
          </Link>
        </div>

        <div className="main-info-for-user">
          <div className="main-info-top">
            <div className="user-status">
              <h4>Статус:</h4>
              <div className="status-button">
                <button>
                  <h5>Онлайн</h5>
                </button>
              </div>
            </div>
            <div className="days-left">
              <p>
                У тебя осталось <span>15</span> дней в игре
              </p>
            </div>
          </div>
          <div className="recommended-kits">
            <div className="title">
              <p className="choosed-you">
                Тебя выбрало <span>5</span> человек
              </p>
              <p className="you-choosed">
                Ты выбрал(а) <span>5</span> человек
              </p>
            </div>
            <div className="kits-container">
              <div className="kits-container-row">
                <div className="kits-container-item"></div>
                <div className="kits-container-item"></div>
                <div className="kits-container-item"></div>
              </div>
              <div className="kits-container-row">
                <div className="kits-container-item"></div>
                <div className="kits-container-item"></div>
                <div className="kits-container-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedUser;
