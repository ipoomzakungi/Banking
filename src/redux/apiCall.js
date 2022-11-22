import { publicRequest } from "../requestMethod";
import { fetchingData, loginFailure, loginStart, loginSuccess } from "./userRedux";

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
        
        if (user.username === 'admin' && user.password === 'admin') {
            dispatch(loginSuccess(user));
            alert("Welcome admin")
        }
        else{
            throw 'Wrong username or password!';
        }
    } catch (err) {
        console.log(err)
        dispatch(loginFailure());
    }
};

export const updateAmount = async (dispatch, user) => {
    try {
        console.log("get payload",user)
        
        //const res = await publicRequest.put("/test/deposit", user);
        const res = await publicRequest.post("/user-payment/deposit", user);
        console.log(res)
        dispatch(fetchingData());
        
    } catch (err) {
        console.log(err)
    }
};