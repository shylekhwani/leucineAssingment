import axios from "../../config/axiosConfig.js";


export const registerRequest = async function ({email, password, username, role ='Employee'}) {
    try {
        const response = await axios.post('/users/register',{
            email,
            password,
            username,
            role,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const loginRequest = async function ({email, password}) {
    try {
        const response = await axios.post('/users/login',{
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};