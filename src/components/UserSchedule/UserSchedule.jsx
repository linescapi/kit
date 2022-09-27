import AddTime from "./AddTime";
import DayItem from "./DayItem";

const UserSchedule = () => {
  let currDate = new Date();
  let theYear = Number(currDate.getFullYear());
  let leapYear = 2024; //2028 2032

  let daysArr = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let monthsArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ];
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let theDay = Number(currDate.getDay());
  let dayName;

  let theDate = Number(currDate.getDate());
  let nameOfTheDay = daysArr[theDay];

  if (theYear === leapYear) {
    daysInMonth[1] = 29;
  }

  switch (theDay) {
    case 0:
      nameOfTheDay = "sunday";
      break;
    case 1:
      nameOfTheDay = "monday";
      break;
    case 2:
      nameOfTheDay = "tuesday";
      break;
    case 3:
      nameOfTheDay = "wednesday";
      break;
    case 4:
      nameOfTheDay = "thursday";
      break;
    case 5:
      nameOfTheDay = "friday";
      break;
    case 6:
      nameOfTheDay = "sunday";
      break;
    default:
      nameOfTheDay = "not found";
      break;
  }

  return (
    <div className="background-color">
      <div className="container">
        {/* <AddTime /> */}
        <div className="days-container">
          <div className="days-row days-row-1">
            <DayItem dayName={nameOfTheDay} theDate={theDate} />
            <DayItem dayName={daysArr[theDay + 1]} theDate={theDate + 1} />
            <DayItem dayName={daysArr[theDay + 2]} theDate={theDate + 2} />
          </div>
          <div className="days-row days-row-2">
            <DayItem dayName={"thursday"} theDate={theDate + 3} />
            <DayItem dayName={"friday"} theDate={theDate + 4} />
            <DayItem dayName={"saturday"} theDate={theDate + 5} />
          </div>
          <div className="days-row days-row-3">
            <DayItem dayName={"sunday"} theDate={theDate + 6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSchedule;
