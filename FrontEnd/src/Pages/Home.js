import React, { lazy, Suspense, useEffect, useState } from "react";
import Hero from "./Component/Home/Hero";
import Navbar from "./Component/Navbar";
import { useNavigate } from "react-router-dom";
const JoinLernet = lazy(() => import("./Component/Home/JoinLernet"))
const UpcommingSession = lazy(() => import("./Component/Home/UpcommingSession"));

const Links = lazy(() => import("./Component/Home/Links"))
const Footer = lazy(() => import("./Component/Footer"))

function Home() {
  const [iscode, setIscode] = useState(false);
  const [success, setSuccess] = useState();
  const [authorize1, setAuthorize] = useState();
  const [isVerified, setIsVerified] = useState()
  const navigate = useNavigate();


  useEffect(() => {
    const params1 = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    }, []);
    let value = params1.code;

    if (value !== null) {
      setIscode(true);
      const code = value;
      console.log(code)
      loadData(code)
    }

  }, []);

  const loadData = async (code) => {
    console.log("hello", code)
    try {
    
      const id = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
      const redirect_url =process.env.REACT_APP_REDIRECT_URL;

      console.log(redirect_url, "redirect");
      //     const redirect_url = "http://localhost:3000/home"; //process.env.REDIRECT_URL;)
   {/*   let redirect_url = 'http://localhost:3000'; //process.env.REDIRECT_URL;
      if(window.location.href.includes('learnet'))
    redirect_url='https://learnet.acolabz.com';*/}
      console.log(redirect_url);
      const response = await fetch(`https://learnet.acolabz.com/backend/v1/user/connect-linkedin?code=${code}&redirect_url=${redirect_url}`,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          
         //   'Authorization': 'Bearer ' + this.state.AccessToken
          }
        }
      );
      console.log("hello")
      const res = await response.json();
      console.log(res)
      console.log('hello')
      const authorize = res
      let issuccess = res.success
      let verified = false


      if(!issuccess) {
        console.log(res.message);
      }
      else {
        issuccess = true;
        verified = res.data.data.isVerified
      }
      
      if (verified) {
        console.log("verified")
        let allData = JSON.stringify(authorize.data);
        localStorage.setItem("userData", allData);
        window.location.replace(`${redirect_url}/#/Home-page`)
        //navigate("/Home-page");
      }
      else if (issuccess) {
        console.log("success")
        if (authorize.data.data.completedStep == 1) {
          let allData = JSON.stringify(authorize.data);
          localStorage.setItem("userData", allData);
          window.location.replace(`${redirect_url}/#/email`)
          //navigate("/email");
        } else if (authorize.data.data.completedStep == 2) {
          let allData = JSON.stringify(authorize.data);
          localStorage.setItem("userData", allData);
          navigate("/address");
        } else if (authorize.data.data.completedStep == 3) {
          let allData = JSON.stringify(authorize.data);
          localStorage.setItem("userData", allData);
          navigate("/employement");
        }
        else {
          let allData = JSON.stringify(authorize.data);
          localStorage.setItem("userData", allData);
          navigate("/email");
        }
      } else {
        navigate("/");
      }
    }
    catch (e) {
      console.log(e)
    }

  }
  // const anchor = document.querySelector('#some-id')
  // anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  return (

    <>
      {
        iscode ?
          <div class="center">Please wait while redirecting....</div>
          :
          <>
            <section class="herobg">
              <Navbar />
              <Hero />
            </section>
            <Suspense fallback={<div>Please Wait...</div>}>
              <JoinLernet />
              <UpcommingSession />
              {/* <Links/>   */}
              <Footer />
            </Suspense>
          </>
      }   </>

  );
}

export default Home;
