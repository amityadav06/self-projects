import { useEffect, useContext } from "react";
import { TokenContext } from "../context/TokenContext";

const useRefreshToken = () => {
  const { setLastAccessToken, setAccounts } = useContext(TokenContext);

  const generateRefreshToken = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "_zcsr_tmp=9516d9d9-5bc6-4f7e-b509-bbffa78fdbfc; iamcsr=9516d9d9-5bc6-4f7e-b509-bbffa78fdbfc; zalb_6e73717622=3bcf233c3836eb7934b6f3edc257f951");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    const url = "https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.fa0710c127e558f0b98146dfe93f6460.58d082b9431919d2d94255af6b8afb81&client_id=1000.WI2UIMV35YQR70GX0EL0458LYUYVYT&client_secret=681ba5a78a9820894db43678d806d2c60c47d0b549&redirect_uri=http://www.zoho.com/books&grant_type=refresh_token";

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      localStorage.setItem("lastApiCallTime", new Date().getTime());
      localStorage.setItem("lastAccessToken", result.access_token);
      // console.log('result', result);
      setLastAccessToken(result.access_token);
      getAccounts(result.access_token);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const getAccounts = async (token) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", ` Zoho-oauthtoken ${token}`);
    myHeaders.append("Cookie", "BuildCookie_60029892883=1; JSESSIONID=BEFBD1401B8E1DBB1E1C95ADE7FA977B; _zcsr_tmp=5b998092-6f79-487d-90d3-19b620e8a774; zalb_54900d29bf=35ae455a8d30147980337fe9cf7e2232; zbcscook=5b998092-6f79-487d-90d3-19b620e8a774");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch("/api/books/v3/chartofaccounts?organization_id=60029892883", requestOptions);
      const result = await response.json();
      // console.log(result); 
      setAccounts(result.chartofaccounts);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    const lastApiCallTime = localStorage.getItem("lastApiCallTime");
    const currentTime = new Date().getTime();
    const hoursDifference = (currentTime - lastApiCallTime) / (60 * 60);

    if (!lastApiCallTime || hoursDifference >= 12) {
      generateRefreshToken();
    }else {
      const token = localStorage.getItem("lastAccessToken");
      getAccounts(token);
    }
  }, [setLastAccessToken, setAccounts]);

  return null;
};

export default useRefreshToken;
