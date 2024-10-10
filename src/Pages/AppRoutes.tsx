import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import FindJobs from "./FindJobs";
import FindTalentPage from "./FindTalentPage";
import CompanyPage from "./CompanyPage";
import JobDescPage from "./JobDescPage";
import ApplyJobPage from "./ApplyJobPage";
import PostJobPage from "./PostJobPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import Footer from "../Components/Footer/Footer";
import FindTalentProfile from './TalentProfile';
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";

const AppRoutes = () => {
    const user = useSelector((state:any)=>state.user);
   return <BrowserRouter>
      <div className='relative'>
      <Header/>
      <Routes>
        <Route path='/find-jobs' element={<FindJobs/>}/>
        <Route path='/find-talent' element={<FindTalentPage/>}/>
        <Route path='/about-company' element={<CompanyPage/>}/>
        <Route path='/jobs' element={<JobDescPage/>}/>
        <Route path='/apply-job' element={<ApplyJobPage/>}/>
        <Route path='/post-job' element={<PostJobPage/>}/>
        <Route path='/posted-job' element={<PostedJobPage/>}/>
        <Route path='/job-history' element={<JobHistoryPage/>}/>
        <Route path='/talent-profile' element={<FindTalentProfile/>}/>
        <Route path='/signup' element={user?<Navigate to="/"/>:<SignUpPage/>}/>
        <Route path='/login' element={user?<Navigate to="/"/>:<SignUpPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
};

export default AppRoutes;

