import axios from "../../config/axiosConfig.js";


export const CreateSoftwareRequest = async function ({name, description, accessLevels, token}) {
    try {
        const response = await axios.post('softwares/create',{
            name,
            description,
            accessLevels
        }, {headers: {'x-access-token': token}});
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const getAllSoftwareRequest = async function () {
    try {
        const response = await axios.get('softwares',{});
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};