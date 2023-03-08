import axios from "axios"

const apiURLs = {
    development: "http://localhost:4000",
    production: "https://yogahome.netlify.app"
}

const api = axios.create({baseURL: apiURLs[process.env.NODE_ENV]})


//preciso criar um interceptador pra interceptar as requests tripo "get" e mandar o TOKEN de volta pro back 
api.interceptors.request.use((config)=>{
    const loggedInUserJSON = localStorage.getItem("loggedInUser")

    const parsedLoggedInUser = JSON.parse(loggedInUserJSON || `""`)

    if (parsedLoggedInUser.token){
        config.headers = {Authorization: `Bearer ${parsedLoggedInUser.token}`}
    }

    return config
})

export { api }