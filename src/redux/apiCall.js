import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        /*const getdata = () => {
            axios.get('https://covid19.th-stat.com/json/covid19v2/getTodayCases.json').then(response => {
            console.log(response.data);
        });
        };*/
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };