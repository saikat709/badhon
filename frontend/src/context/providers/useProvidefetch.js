const BASE_URL = "http://127.0.0.1:8000/api/";

const GET_USERS_INFO_URL = BASE_URL + "users/";

export default function useProvideFetch(){

    const get_request_options = { 
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials' : true
        }
    }

    return {  };
}