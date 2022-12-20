import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SignupStepThree } from "../../Services/obAuth";
import Ob_Footer from "../Ob_Footer";
import Ob_Header from "../Ob_Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function Step3() {
  const [zip, setZip] = useState("");
  const [location, setLocation] = useState("");
  const [allCountry, setAllCountry] = useState([]);
  const [filCountry, setFilCountry] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [data, setData] = useState("");
  const [showRender, setShowRender] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Learnet Sign Up"
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    setToken(userAllData.token);
    setName(userAllData.data.firstName + " " + userAllData.data.lastName);
  }, []);
  function setAddress(e) {
    e.preventDefault()
    let zipLength = zip.toString().length
    const data = {
      country: countryName,
      zipCode: zip,
      location: location,
    };
    try {
      if (countryName.length > 0 && zipLength <= 6 && zipLength >= 4 && location != "") {
        SignupStepThree(data, token)
          .then((res) => {
            let isSuccess = res.success;
            if (isSuccess) {
              navigate("/employement");
            }
          })
          .catch();
      } //else if (countryName.length <= 0) {
      //   console.log("hello")
      //   toast.error("Please Enter Country");
      else if (zip === "") {
        toast.error("Please Enter Zip code");
      } else if (zipLength > 6 || zipLength < 4) {
        toast.error("Please Enter Correct Zip Code");
      } // else if (location === "") {
      // toast.error("Please Enter Location");
      // }
    } catch (error) {
    }
  }
  const matchData = (e) => {
    setCountryName(e.target.value);
    if (e.target.value.length > 2) {
      let a = e.target.value;
      var filtered = allCountry.filter(country => country.includes(e.target.value));
      setFilCountry(filtered);

    } else {
      setFilCountry([]);
    }
  };

  useEffect(() => {
    console.log(token)
    if (token !== "") {
      async function countries() {
        let res = await fetch(
          "http://learnet.acolabz.com/backend/v1/user/new-user/address/country",
          {
            method: "get",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        );
        let counteryData = await res.json();
        let b = counteryData.data.data;
        console.log(b)
        for (let i = 0; i < b.length; i++) {
          let temp = allCountry;
          temp.push(b[i].name);
          setAllCountry(temp);
        }
        console.log(allCountry)
        console.log(allCountry, "-------country")
      }
      countries();
    }
  }, [token]);



  //creating function to load ip address from the API
  const getData = async () => {
    await axios.get('https://ipapi.co/json/').then((res) => {
      console.log(res.data);
      //  const coun= JSON.parse(localStorage.getItem('IP',res.data.ip))

      localStorage.setItem('IP_ADDRESS', res.data.ip)
      // setCountry(res.data.country_name)

      setCountryName(res.data.country_name)
      setLocation(res.data.city)
      setShowRender(true)
      console.log(showRender)
      localStorage.setItem("Country", res.data.country_name)
      //  console.log(res.data.city,"---------country")

      //  console.log(res.data.city)
      //  console.log(res.data.country_name)

    });
  }
  console.log(country, "-------")
  useEffect(() => {
    getData()
  }, [])

  if (showRender) {
    console.log(city);
  }

  const addingCountry = (val) => {
    setData(val);
    setFilCountry([]);
  };




  return (
    <>
      <Ob_Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {
        showRender &&
        <section className="main_body">
          <div className="inner_container">
            <div className="">
              <div className="title_wrap">
                <h2 className="ob_title text-center">
                  Welcome, <b>{name}!</b>
                </h2>
                <p className="ob_para mt30">
                  Let’s get you started with your profile so you can connect with other professionals to learn something or help them learn what you are good at.
                </p>
              </div>
              <div className="form_box">
                <form className="input_form">
                  <div className="form-group relative" >
                    <label htmlFor="exampleInputEmail1">Country/Region*</label>

                    <input
                      type="search"
                      className="form-control"
                      onChange={matchData}
                      // onChange={(e)=>{setCountryName(e.target.value)}}
                      placeholder=""
                      list="countries"
                      value={countryName}
                    />
                    <div id="search-box" className="d-block searchlist">
                      {filCountry.map((val, key) => {
                        return (
                          <>
                            <p
                              key={key}
                              style={{ cursor: "pointer", color: "black" }}
                              onClick={(e) => { setCountryName(val); addingCountry(val) }}
                            >
                              {val}
                            </p>
                            {/* <a ><i class="fa fa-plus"></i> Add Topic</a> */}
                          </>
                        );
                      })
                      }

                    </div>

                  </div>


                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Postal/Zip code*</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setZip(e.target.value)}
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Location within this area*
                    </label>
                    <input
                      type="text"
                      value={location}
                      className="form-control"
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder=""
                    />
                    {/* <div>
                      <GooglePlacesAutocomplete 
                      apiKey=""
                      />
                    </div> */}
                  </div>
                  <a
                    //to={"/employement"}
                    onClick={setAddress}
                    className="btn btn-primary radius btnlg"
                  >
                    Continue
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      }
      <Ob_Footer />
    </>
  );
}

export default Step3;
