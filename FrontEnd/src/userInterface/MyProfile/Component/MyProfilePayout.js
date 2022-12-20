import React from "react";
import { useState ,useEffect} from "react";
import { toast } from "react-toastify";
import { MyProfilePayments } from "../../../Services/MyProfileAuth";

export const MyProfilePayout = () => { 
 
  let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  let userData = JSON.parse(localStorage.getItem("userData"));
  const linkedinId=userData.data.linkedinId

  const[paypal,setpaypal]=useState("");
  const[velmo,setvelmo]=useState("");
  const[token,setToken]=useState("");


  useEffect(()=>{
    setToken(userData.token)
   },[]); 

 const AddPayments =()=>{
  const data={
    paypal,
    velmo
  }
  // if(paypal == null)
  // {
  //   return toast.error("Please Add Paypal")
  // }
  // else if(velmo == null)
  // {
  //   return toast.error("Please Add velmo")
  // }
 
 
 
 
  MyProfilePayments(data,token,linkedinId).then((res)=>{
     if(res.success ===true)
     {
      console.log(res.data.data)
      setpaypal(res.data.data.paypal)
      setvelmo(res.data.data.velmo)

     }
     })
    
 }

    return (
    <>
      <div className="col-sm-6 col-lg-12 mt-4">
        <div className="col-md-6 col-lg-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between border-0">
              <h5 className="card-title mb-0">Accounts For Payouts</h5>
            </div>
            <div className="card-body position-relative">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="PayPal mb-1 text-green">Pay Pal</label>
                  <input
                    type="text"
                    className="form-control"
                    id="PayPal"
                    aria-describedby="pay"
                    placeholder=""
                    value={paypal}
                    onChange={(e)=>setpaypal(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="Velmo mb-1 text-green">Velmo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Velmo"
                    placeholder=""
                    value={velmo}
                    onChange={(e)=>setvelmo(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn  w-100 bg-purple  btn-purple mt-3"
                  onClick={AddPayments}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
