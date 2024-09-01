// const myHeaders = new Headers();
// myHeaders.append("Cookie", "_zcsr_tmp=9516d9d9-5bc6-4f7e-b509-bbffa78fdbfc; iamcsr=9516d9d9-5bc6-4f7e-b509-bbffa78fdbfc; zalb_6e73717622=3bcf233c3836eb7934b6f3edc257f951");

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   redirect: "follow"
// };

// const URL = `https://accounts.zoho.in/oauth/v2/token?refresh_token=${process.env.REFRESH_TOKEN}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_ID}&redirect_uri=http://www.zoho.com/books&grant_type=refresh_token`

// fetch("https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.fa0710c127e558f0b98146dfe93f6460.58d082b9431919d2d94255af6b8afb81&client_id=1000.WI2UIMV35YQR70GX0EL0458LYUYVYT&client_secret=681ba5a78a9820894db43678d806d2c60c47d0b549&redirect_uri=http://www.zoho.com/books&grant_type=refresh_token", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


  /* --------------------------------  GET ACCOUNT API CALL  -------------------------------------------------- */
  // const myHeaders = new Headers();
  // myHeaders.append("Authorization", ` Zoho-oauthtoken ${lastAccessToken}`);
  // myHeaders.append("Cookie", "BuildCookie_60029892883=1; JSESSIONID=BEFBD1401B8E1DBB1E1C95ADE7FA977B; _zcsr_tmp=5b998092-6f79-487d-90d3-19b620e8a774; zalb_54900d29bf=35ae455a8d30147980337fe9cf7e2232; zbcscook=5b998092-6f79-487d-90d3-19b620e8a774");

  // const requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow"
  // };
  
  // const getAccounts = async () => {
  //   try {
  //     const response = await fetch("https://www.zohoapis.in/books/v3/chartofaccounts?organization_id=60029892883", requestOptions);
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }


  /* ----------------------------------------- IMPORT BANK STATEMENT API -------------------------------------------------------- */

  const myHeaders = {
    "Content-Type": "application/json",
    "Authorization": "Bearer 1000.cb01b6421283951b51452386779cb4ea.53632eff4496137f772452fb77db3009",
    "Cookie": "JSESSIONID=98AA2C5463B359C95B584DD6A3AF21FB; _zcsr_tmp=5b998092-6f79-487d-90d3-19b620e8a774; zalb_54900d29bf=35ae455a8d30147980337fe9cf7e2232; zbcscook=5b998092-6f79-487d-90d3-19b620e8a774"
  };
  
  const raw = JSON.stringify({
    "account_id": "1863771000000024305",
    "start_date": "2024-05-04",
    "end_date": "2024-05-23",
    "transactions": [
      {
        "transaction_id": "1863771000000024405",
        "date": "2024-05-15",
        "debit_or_credit": "credit",
        "amount": 7500,
        "payee": "Bowman and Co",
        "description": "Electronics purchase",
        "reference_number": "Ref-2134"
      }
    ]
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("https://www.zohoapis.in/books/v3/bankstatements?organization_id=60029892883", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  