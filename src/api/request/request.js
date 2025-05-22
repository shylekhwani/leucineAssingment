import axios from "../../config/axiosConfig";

export const createAccessRequest = async ({ softwareId, accessType, reason, token }) => {
  try {
    const response = await axios.post('requests/create', {
      softwareId,
      accessType,
      reason,
    }, {headers: {'x-access-token': token}});
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response?.data || error;
  }
};

export const getAccessByCurrentUserRequest = async ({ token }) => {
  try {
    const response = await axios.get('requests/user', {
      headers: { 'x-access-token': token }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response?.data || error;
  }
};

export const getAllRequestsForManager = async (token) => {
  try {
    const response = await axios.get('requests', {
      headers: { 'x-access-token': token }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response?.data || error;
  }
};


export const updateRequestStatus = async ({ token, softwareId, status }) => {
  try {
    const response = await axios.patch(
      `requests/${softwareId}/status`,
      { status },
      { headers: { 'x-access-token': token } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response?.data || error;
  }
};
