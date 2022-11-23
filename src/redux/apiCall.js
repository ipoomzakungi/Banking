import axios from "axios";
import { publicRequest } from "../requestMethod";
import {
  fetchingData,
  loginFailure,
  loginStart,
  loginSuccess,
} from "./userRedux";

const refresh_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2YTZmNDA5LTQyZDAtNDQ4MC1hMDg2LThiZmJiNTI5Y2IyNCIsImZpcnN0TmFtZSI6InRlc3QxIiwibWlkZGxlTmFtZSI6InQxIiwibGFzdE5hbWUiOiJUZXN0MSIsInRpbWVfc3RhbXAiOiIyMDIyLTExLTIyVDE5OjIwOjE1LjE4MloiLCJpYXQiOjE2NjkxNDQ4MTUsImV4cCI6MTY2OTc0OTYxNX0.oWlCdQ1eltE7-RR6Saa8Z-30SEwa3kNY6nZDH7mjKPo";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    /*const getdata = () => {
            axios.get('https://covid19.th-stat.com/json/covid19v2/getTodayCases.json').then(response => {
            console.log(response.data);
        });
        };*/
    //console.log(user)

    //const res = await publicRequest.post("/auth/login", user);
    // const res = await axios.post(
    //   "https://server-quplus.herokuapp.com/api/auth/signin",
    //   {},
    //   {
    //     headers: {
    //       Authorization : `Bearer ${refresh_TOKEN}`
    //     }
    //   }
    // ).then((response) => {
    //     console.log(response);
    //   });
    //console.log("first", res);

    if (user.username === "admin" && user.password === "admin") {
      dispatch(loginSuccess(user));
      alert("Welcome admin");
    } else {
      throw "Wrong username or password!";
    }
  } catch (err) {
    console.log("err", err);
    dispatch(loginFailure());
  }
};

export const updateAmount = async (dispatch, user) => {
  try {
    console.log("get payload", user);

    //const res = await publicRequest.put("/test/deposit", user);
    const res = await publicRequest.post("/user-payment/deposit", user);
    console.log(res);
    dispatch(fetchingData());
  } catch (err) {
    console.log(err);
  }
};
