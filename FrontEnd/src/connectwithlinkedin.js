import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
// import request from 'request'


const ConnectwithLinkedin = () => {
    const id = "77qayykjfarn2r"
    const redirect_url = "http://learnet.acolabz.com"
    const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${id}b&redirect_uri=${redirect_url}&state=123456&scope=r_liteprofile%20r_emailaddress`



    const params1 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let value = params1.code;
    console.log(params1);
    if (value !== null) {

        const code = value;

        // const params = {
        //     grant_type: "authorization_code",
        //     code: code,
        //     client_id: "86o3ul9ctsgtnb",
        //     client_secret: "ziMef6r4OGqVT6Yq",
        //     redirect_uri: "http://localhost:3000/",
        // };
        // const options = {
        //     method: "POST",
        //     headers: { "Content-Type": "x-www-form-urlencoded" },
        //     // params: params,
        //     body: JSON.stringify(params),
        // };
       
            const h=async()=>{
                var hell=await fetch(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${value}&redirect_uri=${redirect_url}&client_id=86o3ul9ctsgtnb&client_secret=ziMef6r4OGqVT6Yq`,
                {
                    method: 'POST',
                    mode:'no-cors',
                    "Access-Control-Allow-Origin": "*"
                }
                )
                const r=await hell.json();
                console.log(r)
            }
            h();
        // fetch("https://www.linkedin.com/oauth/v2/accessToken",
        //     {
        //         // method: "POST",
        //         method: "POST",
        //         headers: { "Content-Type": "x-www-form-urlencoded" },
        //         // params: params,
        //         body: JSON.stringify({
        //             "grant_type": "authorization_code",
        //             "code": `${value}`,
        //             "client_id": "86o3ul9ctsgtnb",
        //             "client_secret": "ziMef6r4OGqVT6Yq",
        //             "redirect_uri": "http://localhost:3000/",
        //         }),
        //         // body: JSON.stringify(params),
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((response, err) => {
        //         // Do something with response.
        //         console.log(response)



        //         // response = JSON.parse(response);
        //         const { access_token } = response;

        //         console.log("Upload successful!  Server responded with:", access_token);
        //         async function getdata() {

        //             var res1 = await fetch("https://api.linkedin.com/v2/me", {
        //                 headers: { Authorization: `Bearer ${access_token}` },
        //             });
        //             var email = await fetch("https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))", {
        //                 headers: { Authorization: `Bearer ${access_token}` },
        //             });
        //             const useremail = await email.json();
        //             const user = await res1.json();
        //             console.log(user);
        //             console.log(useremail.elements);
        //         }
        //         getdata();
        //     });

    }


    return (
        <>
            <section className="main_body">
                <div className="inner_container">
                    <div className="text_rapper">
                        <div className="content">
                            <h1 className="welcome">Welcome to <b>lear</b>net <br /> <b>net</b>work </h1>
                            <div><a href={url} className="btn btn-primary radius btnlg">Connect with Linkedin</a></div>
                        </div>
                        <div className="right_img">
                            <div className="hero_img"><img src="assets/images/info1.png" alt='' /></div>
                            {/* <button onClick={hello}>ah</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConnectwithLinkedin;