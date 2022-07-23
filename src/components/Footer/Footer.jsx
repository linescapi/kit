import { FaTelegram } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <svg width="0" height="0">
        <linearGradient
          id="instagram-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#FFDC80" offset="0%" />
          <stop stopColor="#FCAF45" offset="12.5%" />
          <stop stopColor="#F77737" offset="25%" />
          <stop stopColor="#F56040" offset="37.5%" />
          <stop stopColor="#FD1D1D" offset="50%" />
          <stop stopColor="#E1306C" offset="62.5%" />
          <stop stopColor="#833AB4" offset="75%" />
          <stop stopColor="#5851DB" offset="87.5%" />
          <stop stopColor="#405DE6" offset="100%" />
        </linearGradient>
      </svg>

      <div className="footer-container">
        <div className="kit-social-media-links">
          <Link to="#">
            <FaTelegram style={{ fontSize: "40px", color: "#229ED9" }} />
          </Link>
          <Link to="#">
            <GrInstagram
              style={{
                fontSize: "36px",
                fill: "url(#instagram-gradient)",
                borderRadius: "11px",
              }}
            />
          </Link>
        </div>
        <div className="other-links">
          <div>
            <Link to="#">
              <p>Оставить отзыв</p>
            </Link>
          </div>
          <div>
            <Link to="#">
              <p>Написать о проблеме</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
