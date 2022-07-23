import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login";
import AuthorizedUser from "../AuthorizedUser/AuthorizedUser";
import UserSchedule from "../UserSchedule/UserSchedule";
import KitsForms from "../KitsForms/KitsForms";

const MainPage = () => {
  return (
    <>
      <Header />
      {/* <Login /> */}
      {/* <AuthorizedUser /> */}
      {/* <UserSchedule /> */}
      <KitsForms />
      <Footer />
    </>
  );
};

export default MainPage;
