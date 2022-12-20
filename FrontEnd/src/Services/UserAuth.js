import { toast } from "react-toastify";
import axios from "axios";
// const API_Base_Url = 'https://learnet.acolabz.com/backend'
const API_Base_Url = "http://localhost:3001";

// user profile getting
export const userProfile = async (token) => {

  try {
    const response = await fetch(`${API_Base_Url}/v1/user/view/profile`, {
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

// create new post start here
// post photo
export const uploadPost = async (formdata) => {

  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(formdata)
  console.log(user.token, "----token")
  try {
    const headers = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        authorization: user.token
      }
    }
    console.log("hello")
    const response = await axios.post(`https://learnet.acolabz.com/backend/v1/uploads?for=Post`, formdata, headers).then((response) => {
      return response
    }
    ).catch(error => {
      if (error.response.status === 400) {
        if (error.response.data.success === false)
          return toast.error(error.response.data.message)
      }
      else if (error.response.status === 401) {
        return toast.error("You are not authorized")
      }
      else if (error.response.status === 404) {
        return toast.error("Url not found")
      }
      else if (error.response.status === 500) {
        return toast.error("Internal server error please try after sometime")
      }
    });
    return response.data
  } catch (error) {
    return toast.error('Something went wrong , Please check your internet connection.')
  }
};
// Post All the Data
export const PostImage = async (reqdata, linkedinId) => {

  let user = JSON.parse(localStorage.getItem("userData"));
  // alert(linkedinId)
  console.log(reqdata)
  console.log(user.token)

  try {
    // const formData = new FormData();
    // formData.append("file", reqdata, reqdata.name);
    const response = await fetch(
      `${API_Base_Url}/v1/user/${linkedinId}/new-post`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: user.token
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


// Get all posts
export const getAllPost = async (linkedinId) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/${linkedinId}/posts`,
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
    console.log("result", result);

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

// Get Search Result
export const search = async (value) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  // alert(value)
  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/search/skill?keyword=${value}`,
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
    console.log('ada-------------------', result)
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

// Get Post Coments
export const AllComments = async () => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)

  try {
    const response = await fetch(`${API_Base_Url}/v1/user/all/comments`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": user.token
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


// Get Post Coments
export const PostComments = async () => {
  try {
    const response = await fetch(`${API_Base_Url}/v1/user/all/comments`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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

//  Add Coments
export const AddComments = async (reqdata, linkedinId) => {
  // alert(linkedinId)
  console.log(reqdata)
  let user = JSON.parse(localStorage.getItem("userData"));

  try {
    const response = await fetch(`${API_Base_Url}/v1/user/${linkedinId}/post/new-comment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": user.token
      },
      body: JSON.stringify(reqdata),
    });

    console.log(response, "---response")
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

//Like 
export const AddLike = async (post) => {
  // alert(post)

  let user = JSON.parse(localStorage.getItem("userData"));

  try {
    const response = await fetch(`${API_Base_Url}/v1/user/postLike/${post}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": user.token
      },
      // body: JSON.stringify(reqdata),
    });

    console.log(response, "---response")
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
// Add Reply

export const AddReply = async (linkedinId) => {
  // alert(linkedinId)

  let user = JSON.parse(localStorage.getItem("userData"));

  try {
    const response = await fetch(`${API_Base_Url}/v1/user/add-reply/${linkedinId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authorization": user.token
      },
      // body: JSON.stringify(reqdata),
    });

    console.log(response, "---response")
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

// All Learner

export const getAllLearner = async (token) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.token)

  try {
    const response = await fetch(
      `${API_Base_Url}/v1/user/profile/load/${user.data._id}`,
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
    console.log("result", result);

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

