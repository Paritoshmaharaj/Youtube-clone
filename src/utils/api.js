import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "b7c0431351mshf1efdaeeee8ffc5p175f36jsn2eb1f570f414",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

// import axios from "axios";

// const BASE_URL = "https://www.googleapis.com/customsearch/v1";

// const params = {
//     key : "b7c0431351mshf1efdaeeee8ffc5p175f36jsn2eb1f570f414",
//     cx : "8614d901bf87749df",
// }


// export const fetchDataFromApi = async (payload) => {
//      const {data} = await axios.get(BASE_URL,{
//       params : {...params, ...payload}   
//     })
//     return data;
// };
