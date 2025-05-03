import axios from "axios";

const BASE_URL = "http://localhost:3000"

export default class ForFunApi {
    static async request(endpoint, data = {}, method = "get"){
        const url = `${BASE_URL}/${endpoint}`;

        const headers = {
            'Content-Type': 'application/json'
        };

        const params = (method === "get") ? data : {};

        try {
            const response = await axios({
            url,
            method,
            data: method !== "get" ? data : {},
            params,
            headers,

        });
        return response.data;
        } catch (error) {
            console.error("API Error:", error.response);
        }
    }


    static async getUsers(){
        try {
            const response = await this.request(`users`)
            console.log(response)
            return response;
        } catch (error) {
            
        }
    }

    static async getUserById(id){
        try {
            const response = await this.request(`users/${id}`)
            console.log(response)
            return response;
        } catch (error) {
            
        }
    }

    static async SignUp(password, email, firstName, lastName){
        try {
            
        let data = await this.request("users", {password, email, firstName, lastName}, 'post')
        return data;
    } catch (error) {
            console.error("Error during signup:", error); 
        }
    }

    static async LogIn(password, email) {
        try {
            // Assuming the correct endpoint is '/users' for login
            const response = await this.request('/users/login', { password, email }, 'post');
             console.log(response)
            if (response && response.id) {
                // Assuming the response contains the user data (e.g., id, email, etc.)
                return response; // Return the user data if login is successful
            } else {
                throw new Error('Invalid login credentials');
            }
        } catch (error) {
            console.error("Error during login:", error);
            throw error;  // Propagate the error so it can be caught in the calling function
        }
    }
    
}