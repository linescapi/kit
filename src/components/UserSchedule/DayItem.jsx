import TimeItem from "./TimeItem";
import { HiPlus } from "react-icons/hi";

const DayItem = ({ dayName, theDate }) => {
  let dayNameTitle;

  switch (dayName) {
    case "monday":
      dayNameTitle = "понедельник";
      break;
    case "tuesday":
      dayNameTitle = "вторник";
      break;
    case "wednesday":
      dayNameTitle = "среда";
      break;
    case "thursday":
      dayNameTitle = "четверг";
      break;
    case "friday":
      dayNameTitle = "пятница";
      break;
    case "saturday":
      dayNameTitle = "суббота";
      break;
    case "sunday":
      dayNameTitle = "воскресенье";
      break;
    default:
      dayNameTitle = "день недели";
      break;
  }

  return (
    <div className={`day-item ${dayName}`}>
      <div className="day-item-header">
        <h5>{`${dayNameTitle}, ${theDate}`}</h5>
        <div className="add-new-mitting">
          <HiPlus style={{ fontSize: "26px", color: "#5e278ebf" }} />
        </div>
      </div>
      <TimeItem />
    </div>
  );
};

export default DayItem;
