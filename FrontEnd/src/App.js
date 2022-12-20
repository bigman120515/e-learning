import React, { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./On_Bording/UserLogin";
import { MyProfile } from "./userInterface/MyProfile/MyProfile";
import { Setting } from "./userInterface/Setting/Setting";
import { UserHome } from "./userInterface/UserHome/UserHome";
import UserProfile from "./userInterface/userProfile/UserProfile";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking"
import Mentor from "./Pages/Component/Booking/Mentor"
import Dummy from "./On_Bording/steps/Dummy"
import Step1 from "./On_Bording/steps/Step1"
import Step2 from "./On_Bording/steps/Step2"
import Step3 from "./On_Bording/steps/Step3"
import Step4 from "./On_Bording/steps/Step4"
import Step4_1 from "./On_Bording/steps/Step4_1"
import Step5 from "./On_Bording/steps/Step5"
import Step6 from "./On_Bording/steps/Step6"
import Step7 from "./On_Bording/steps/Step7"
import Step8 from "./On_Bording/steps/Step8"
import Step9 from "./On_Bording/steps/Step9"
import Confirmation from "./User/Confirmation/Confirmation"
import DateTime from "./User/DateTime/DateTime"
import Article from "./Pages/Article/Article"
import ArticleList from "./Pages/ArticleList/ArticleList";
import ArticleDetails from "./Pages/Component/ArticleDetails/ArticleDetails";
import NoArticle from "./Pages/Component/Noarticle/NoArticle";
import Support from "./Pages/Component/sopport/Support";
import TermCondition from "./Pages/Component/TermCondition/TermCondition";
import SearchResult from "./userInterface/common-component/SearchResult"
import MyPost from "./userInterface/MyProfile/Component/MyPost";
import MyFavourite from "./userInterface/MyProfile/Component/MyFavourite";
import MyMedia from "./userInterface/MyProfile/Component/MyMedia";
import MyVideos from "./userInterface/MyProfile/Component/MyVideos";
import PrivacyPolicy from "./Pages/Component/PrivacyPolicy/PrivacyPolicy";
import FaqDetails from "./Pages/Component/Faq/FaqDetails";
import { Session } from "./Pages/Session/Session";
import GroupSessionDetails from "./Pages/groupsessiondetails/GroupSessionDetails";
import GruopSession from "./Pages/GroupSession/GruopSession";
import MySession from "./Pages/mysession/MySession";
import MessageLearner from "./Pages/Messages/MessageLearner";

import MessageMentor from "./Pages/Messages/MessageMentor";
import Notification from "./Pages/Notification/Notification";
import Learner from "./ProfileForLearner/Learner";


function App() {
  return (

    <Routes>
      <Route path="" element={<Home />} />
      <Route path="Booking" element={<Booking />} />
      <Route path="Mentor" element={<Mentor />} />
      <Route path="signup" element={<Step1 />} />
      <Route path="dummy" element={<Dummy />} />
      <Route path="email" element={<Step2 />} />
      <Route path="address" element={<Step3 />} />
      <Route path="employement" element={<Step4 />} />
      <Route path="education" element={<Step4_1 />} />
      <Route path="otp-varification" element={<Step5 />} />
      <Route path="mentee-topics" element={<Step6 />} />
      <Route path="mentor-topics" element={<Step7 />} />
      <Route path="add-connection" element={<Step8 />} />
      <Route path="add-connection-mentor" element={<Step9 />} />
      <Route path="datetime" element={<DateTime />} />
      <Route path="confirm" element={<Confirmation />} />
      <Route path="userlogin" element={<Login />} />
      <Route path="userprofile" element={<UserProfile />} />
      <Route path="mypost" element={<MyPost />} />
      <Route path="myfavourite" element={<MyFavourite />} />
      <Route path="mymedia" element={<MyMedia />} />
      <Route path="myvideo" element={<MyVideos />} />
      <Route path="Home-page" element={<UserHome />} />
      <Route path="setting" element={<Setting />} />
      <Route path="session" element={<Session />} />
      <Route path="groupsession" element={<GruopSession />} />
      <Route path="mysession" element={<MySession />} />
      <Route path="messagelearner" element={<MessageLearner />} />
      <Route path="messagementor" element={<MessageMentor />} />
      <Route path="notification" element={<Notification />} />
      <Route path="groupsessiondetails" element={<GroupSessionDetails />} />
      {/* <Route path="myprofile" element={<UserProfile />} /> */}
      <Route path="myprofile" element={<MyProfile />} />
      <Route path="article" element={<Article />} />
      <Route path="articleList" element={<ArticleList />} />
      <Route path="noArticle" element={<NoArticle />} />
      <Route path="support" element={<Support />} />
      <Route path="term-and-condtion" element={<TermCondition />} />
      <Route path="faqs" element={<FaqDetails />} />
      <Route path="articledetails" element={<ArticleDetails />} />
      <Route path="search-Result" element={<SearchResult />} />
      <Route path="Learner" element={<Learner />} />
    </Routes>
  );
}

export default App;
