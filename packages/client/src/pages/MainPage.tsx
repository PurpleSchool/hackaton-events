import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userModel } from "../entities";
import { Header, SideBar } from "../widgets";
import { BillsList } from "../features/bill";

export default function MainPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (
  //     userModel.useName() === null ||
  //     typeof localStorage.getItem("token") !== "string"
  //   ) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div className="wrapper">
      <SideBar />
      <div className="content_container">
        <Header />
        <BillsList />
      </div>
    </div>
  );
}
