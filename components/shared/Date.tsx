
import { mooli } from "@/fonts";

const Moment = () => {
  // const [seconds, setSeconds] = useState<number>(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSeconds((prevSeconds) => prevSeconds + 1);
  //   }, 1000);

  //   return () => clearInterval(intervalId); // Cleanup on component unmount
  // }, []);

  let date = new Date();
  let min: number | string = date.getMinutes();
  let hour: number | string = date.getHours();
  let sec: number | string = date.getSeconds();
  let session = "AM";
  let day = "";
  let today = date.getDay();
  let myDay: number | string = date.getDate();
  let myMonth = date.getMonth();
  let exactMonth = "";
  let myYear = date.getFullYear();

  if (hour == 0) {
    hour = 12;
  }
  if (hour >= 12) {
    hour = hour - 12;
    session = "PM";
  }

  switch (today) {
    case 0:
      day = "Sunday";
      break;

    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thursday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;

    default:
      day = "No day";
      break;
  }

  switch (myMonth) {
    case 0:
      exactMonth = "January";
      break;
    case 1:
      exactMonth = "February";
      break;
    case 2:
      exactMonth = "March";
      break;
    case 3:
      exactMonth = "April";
      break;
    case 4:
      exactMonth = "May";
      break;
    case 5:
      exactMonth = "June";
      break;
    case 6:
      exactMonth = "July";
      break;
    case 7:
      exactMonth = "August";
      break;
    case 8:
      exactMonth = "September";
      break;
    case 9:
      exactMonth = "October";
      break;
    case 10:
      exactMonth = "November";
      break;
    case 11:
      exactMonth = "December";
      break;

    default:
      break;
  }

  if (myDay == 1 || myDay == 21 || myDay == 31) {
    myDay = `${myDay}st`;
  } else if (myDay == 2 || myDay == 22) {
    myDay = `${myDay}nd`;
  } else if (myDay == 3 || myDay == 23) {
    myDay = `${myDay}rd`;
  } else {
    myDay = `${myDay}th`;
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let fullDate = `Today is ${day}, ${myDay} ${exactMonth}, ${myYear}. The time is: ${hour}:${min}${session}`;
  return (
    <h1 className={`${mooli.className} text-white font-bold text-xl`}>
      {fullDate}
    </h1>
  );
};

export default Moment;
