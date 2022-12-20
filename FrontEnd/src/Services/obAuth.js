import { toast } from "react-toastify";

const API_Base_Url = 'https://learnet.acolabz.com/backend'
// const API_Base_Url = 'http://evzy.acolabz.com'
// const API_Base_Url='http://localhost:3001'

// onboarding step 2 UPDATE Email
export const SignupStepTwo = async (reqdata, token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/new-user/email`, {
      method: "PUT",
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

// Step 3 post Address
export const SignupStepThree = async (reqdata, token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/new-user/address`, {
      method: "PUT",
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

// Step 4 Employment Details
export const SignupStepFour = async (reqdata, token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/new-user/job-info`, {
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

// Step 4.1 college Details
export const SignupStepFourone = async (reqdata, token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/new-user/college-info`, {
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

// Step 4.1 OTP  college Details
export const SignupStepFourOTP = async (token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/send-mail`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
        // 'Authorization': 'Bearer ' + this.state.AccessToken
      },
      body: JSON.stringify(),
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

// OTP Varification
export const SignupStepFive = async (reqdata,token) => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/verification`, {
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
    // alert("Something went wrong , Please try again later.");
  }
};

// Step 6 Mentee Topics
export const SignupStepSix = async (reqdata,token) => {
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/new-user/mentee-topics`,
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


// Skills List
export const SignupStepSkillsLists = async () => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/skills`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "authorization": user.token
         
        },
        body: JSON.stringify(),
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



// Step 7 Mentor topics
export const SignupStepSeven = async (reqdata,token) => {
  try {
    // let linkedinId = 84512165;
    const response = await fetch(
      `${API_Base_Url}/v1/user/new-user/mentor-topics`,
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

// mentee List
export const SignupStepMenteeList = async (token) => {
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/new-user/mentee-list`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(),
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


// Step 8 Add mentee connection
export const SignupStepEight = async (reqdata,token) => {
  try {
    // let linkedinId = 84512165;
    const response = await fetch(
      `${API_Base_Url}/v1/user/new-user/add-connections`,
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


// mentee List
export const SignupStepMentorList = async (token) => {
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/new-user/mentor-list`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
          // 'Authorization': 'Bearer ' + this.state.AccessToken
        },
        body: JSON.stringify(),
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



// Login fetch API on boarding
export const UserLogin = async (reqdata,token) => {
  try {
    // let linkedinId = 84512165;
    const response = await fetch(
      `${API_Base_Url}/v1/user/84512165/mentee-topics`,
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
