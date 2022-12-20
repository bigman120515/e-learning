import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './step.css'
function Dummy() {
  const [success, setSuccess] = useState();
  const [authorize, setAuthorize] = useState();
  const [isVerified,setIsVerified]=useState()
  const navigate = useNavigate();
  useEffect(() => {
    const params1 = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    },[]);
    let value = params1.code;
    console.log(value,params1)
    if (value !== null) {
      const code = value;
      console.log(code)
      const h = async () => {
        var hell = await fetch(
          `https://learnet.acolabz.com/backend/v1/user/connect-linkedin?code=${code}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // 'Authorization': 'Bearer ' + this.state.AccessToken
            }
          }
        );
        const res = await hell.json();
        console.log(res)
        console.log('hello')
        setAuthorize(res);
        setSuccess(res.success);
        setIsVerified(res.data.data.isVerified)
      };
      h();
    }
  }, []);
  // if(isVerified){
  //   let allData = JSON.stringify(authorize.data);
  //   localStorage.setItem("userData", allData);
  //   navigate("/Home-page");
  // }
  // else if (success) {
  //   if(authorize.data.data.completedStep==1){
  //     let allData = JSON.stringify(authorize.data);
  //   localStorage.setItem("userData", allData);
  //   navigate("/email");
  //   }else if(authorize.data.data.completedStep==2){
  //     let allData = JSON.stringify(authorize.data);
  //   localStorage.setItem("userData", allData);
  //   navigate("/address");
  //   }else if(authorize.data.data.completedStep==3){
  //     let allData = JSON.stringify(authorize.data);
  //   localStorage.setItem("userData", allData);
  //   navigate("/employement");
  //   }
  //   else{
  //     let allData = JSON.stringify(authorize.data);
  //   localStorage.setItem("userData", allData);
  //   navigate("/email");
  //   }
  // } else {
  //   navigate("/signup");
  // }

  return (
    <>
      <div className="backgroundColor-dummy">
        <div className="loading-dummy">
          <p>Please wait</p>
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Dummy;
