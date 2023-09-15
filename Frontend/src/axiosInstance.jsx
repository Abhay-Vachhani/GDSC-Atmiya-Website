import axios from 'axios';

const axiosInstance = axios.create();

// Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
    (response) => {
        // If the response is successful, return it as is
        return response;
    },
    (error) => {
        // If the response status is 401 (Unauthorized), handle it here
        if (error.response && error.response.status === 401) {
            // Perform the necessary action, such as logging the user out or showing an error message
            // Example: Redirect the user to the login page
            // Replace '/login' with the appropriate login route
            window.location.href = '/';
            // You can also display an error message to the user
            // alert('Unauthorized: Please log in.');
        }
        // If it's not a 401 error, reject the promise with the error
        return Promise.reject(error);
    }
);

export default axiosInstance;
