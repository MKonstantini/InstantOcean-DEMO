import Cruise from "./interfaces/Cruise"
import User from "./interfaces/User"

let cruises_data : Cruise[] = [
    {
        name: "Bahamas Blue",
        duration: 4,
        departFrom: "Miami, FL",
        ports: "Half Moon Cay, Nassau",
        img: "https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=…",
        startDate: '2023-12-27',
        startPrice: 199,
        cruiseNum: 1
    },
    {
        name: "Mexico Crucero",
        duration: 5,
        departFrom: "Long Beach, LA",
        ports: "Catalina Island, Ensenada",
        img: "https://images.pexels.com/photos/775294/pexels-photo-775294.jpeg?auto=…",
        startDate: '2024-01-10',
        startPrice: 249,
        cruiseNum: 2
    }
]

let users_data : User[] = [
    {
        firstname: "Matan",
        lastname: "Konstantini",
        email: "matanko35@gmail.com",
        password: "password1",
        accountType: "admin",
        favorites: [1]
    },
    {
        firstname: "demoRegular",
        lastname: "demoRegular",
        email: "dRegular@instantocean.com",
        password: "demoRegular",
        accountType: "regular",
        favorites: []
    },
    {
        firstname: "demoAdmin",
        lastname: "demoAdmin",
        email: "dAdmin@instantocean.com",
        password: "demoAdmin",
        accountType: "admin",
        favorites: []
    }
]

module.exports = {cruises_data, users_data}