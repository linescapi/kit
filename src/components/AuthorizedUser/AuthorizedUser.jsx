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
        <Link to="#">
          <div className="user-form">
            <div className="edit-form">
              <p>Изменить анкету</p>
            </div>
            <div className="audio-rec">
              <audio src="" controls style={{ display: "none" }}></audio>
            </div>
          </div>
        </Link>
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
              <p>
                Тебя выбрало <span>5</span> человек
              </p>
            </div>
            <div className="kits-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedUser;
