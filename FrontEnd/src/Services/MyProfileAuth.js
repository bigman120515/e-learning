
import { toast } from "react-toastify";
const API_Base_Url='https://learnet.acolabz.com/backend'

export const MyProfileBioUpdate = async (reqdata, token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/profile/bio`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
        // 'Authorization': 'Bearer ' + this.state.AccessToken
      },
      body: JSON.stringify(reqdata),
    });
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
  
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};
//update job title
export const MyProfileJobTitleUpdate = async (reqdata, token) => {
  
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/update-jobtitle`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token
      },
      body: JSON.stringify(reqdata)
    });
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

//update job Address
export const MyProfileAddressUpdate = async (reqdata, token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/update-address`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token
      },
      body: JSON.stringify(reqdata)
    });
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

// Adding Skills
export const MyProfileAddSkills = async (reqdata, token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/add-skills`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
        // 'Authorization': 'Bearer ' + this.state.AccessToken
      },
      body: JSON.stringify(reqdata),
    });
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

// Update Skills
export const MyProfileUpdateSkill = async (reqdata, token,id) => {
 //alert(id,"-id")
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/update-skill/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
        // 'Authorization': 'Bearer ' + this.state.AccessToken
      },
      body: JSON.stringify(reqdata),
    });
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

// add Experiance
export const MyProfileAddExperiance = async (reqdata, token) => {
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/profile/add-experience`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
    );
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

// Update Experiance
export const MyProfileUpdateExperiance = async (reqdata, token,id) => {
  
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/update-experience/${id}`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
    );
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};



// Adding Education
export const MyProfileAddEducation = async (reqdata, token) => {
  console.log(token);
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/education`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
    );
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};
// Updating Education
export const MyProfileUpdateEducation = async (reqdata, token,id) => {
//  alert(id)
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/education/update/${id}`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
      );
      if (response.status === 401) {
        toast.error("Your Session has been expired, Please login again.");
        return window.setTimeout(function () {
          localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

// Adding Certification
export const MyProfileAddCertification = async (reqdata, token) => {
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/certificates`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
    );
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

//Update Certification
export const MyProfileUpdateCertification = async (reqdata, token,id) => {
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/certificates/update/${id}`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
      );
      if (response.status === 401) {
        toast.error("Your Session has been expired, Please login again.");
        return window.setTimeout(function () {
          localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

// Adding Language
export const MyProfileAddLanguage = async (reqdata, token) => {
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/add-language`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
    );
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

// Edit/Update Language
export const MyProfileUpdateLanguage = async (reqdata, token,id) => {
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/update-language/${id}`,
      {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
    );
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

export const MyProfileAddPricing = async (reqdata, token,linkedinId) => {
  console.log(token);

  console.log(linkedinId)
   
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/${linkedinId}/pricing`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
    );
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};


export const getAllPricing = async (linkedinId) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/${linkedinId}/pricing`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
        }
      }   
    );
   
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
   
    const result = await response.json();
    console.log("result",result);
    
    if (response.status === 200) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
   } catch (error) {
    //toast.error("Something went wrong , Please try again later.");
   }
};

export const MyProfileDeletePricing = async (id) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/pricing/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
        }
      }   
    );
   
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
   
    const result = await response.json();
    console.log("result",result);
    
    if (response.status === 200) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
   } catch (error) {
    //toast.error("Something went wrong , Please try again later.");
   }
};

export const MyProfilePayments = async (reqdata, token,linkedinId) => {
  console.log(token);

  console.log(linkedinId)
   
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/${linkedinId}/add-paymentmethod`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(reqdata),
      }
    );
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};


// Code for post feeds 

export const getAllPostFeed = async (linkedinId) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)


  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/${linkedinId}/user-posts`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
        }
      }   
    );
   
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
   
    const result = await response.json();
    console.log("result ---- post feeds",result);
    
    if (response.status === 200) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
   } catch (error) {
    toast.error("Something went wrong , Please try again later.");
   }
};

export const MyProfileDeleteSkill = async (id) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)

  console.log(id,"------id")
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/delete-skill/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
        }
      }   
    );
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
   
    const result = await response.json();
    console.log("result",result);
    
    if (response.status === 200) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
   } catch (error) {
    //toast.error("Something went wrong , Please try again later.");
   }
};

export const MyProfileDeleteExperience = async (id) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)

  console.log(id,"------id")
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/delete-experience/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
        }
      }   
    );
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
   
    const result = await response.json();
    console.log("result",result);
    
    if (response.status === 200) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
   } catch (error) {
    //toast.error("Something went wrong , Please try again later.");
   }
};

export const MyProfileDeleteEducation = async (id) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)

  console.log(id,"------id")
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/education/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
        }
      }   
    );
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
   
    const result = await response.json();
    console.log("result",result);
    
    if (response.status === 200) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
   } catch (error) {
    //toast.error("Something went wrong , Please try again later.");
   }
};


export const MyProfileDeleteCertification = async (id) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)

  console.log(id,"------id")
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/certificates/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
        }
      }   
    );
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
   
    const result = await response.json();
    console.log("result",result);
    
    if (response.status === 200) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
   } catch (error) {
    //toast.error("Something went wrong , Please try again later.");
   }
};


export const MyProfileDeleteLanguage = async (id) => {
 
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)
   
  console.log(id,"------id")
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/delete-language/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
        }
      }   
    );
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
   
    const result = await response.json();
    console.log("result",result);
    
    if (response.status === 200) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
   } catch (error) {
    //toast.error("Something went wrong , Please try again later.");
   }
};

// Code For Update the Mentee Topic

export const MyProfileForMentee = async (reqdata, token) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/new-user/mentee-topics`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": user.token
      },
      body: JSON.stringify(reqdata)
    });
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};


export const MyProfileUpdate = async (token,reqdata,id) => {
 
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)
 // alert(id)

  try {
    const response = await fetch(`${API_Base_Url}/v1/user/${id}/basic`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": user.token
      },
      body: JSON.stringify(reqdata)
    });
    
    if (response.status === 401) {
      toast.error("Your Session has been expired, Please login again.");
      return window.setTimeout(function () {
        localStorage.clear();
      }, 1000);
    }
    const result = await response.json();
    
    if (response.ok) {
      return result;
    } else if (response.status === 400) {
      toast.error(result.errors[0]);
    } else {
    }
  } catch (error) {
    toast.error("Something went wrong , Please try again later.");
  }
};

