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
    },
    {
      name: "Panama Magic",
      duration: 5,
      departFrom: "Tampa, FL",
      ports: "Limon, Grand Cayman",
      img: "https://images.pexels.com/photos/1814472/pexels-photo-1814472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      startDate: '2024-02-05',
      startPrice: 399,
      cruiseNum: 3
    },
    {
      name: "Hawaii Vacation",
      duration: 7,
      departFrom: "Long Beach, LA",
      ports: "Maui, Oahu, Kauai",
      img: "https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      startDate: '2024-01-21',
      startPrice: 429,
      cruiseNum: 4
    },
    {
      name: "Alaska Breeze",
      duration: 5,
      departFrom: "Seattle, WA",
      ports: "Skagway, Juneau, Ketchikan",
      img: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      startDate: '2024-02-24',
      startPrice: 699,
      cruiseNum: 5
    },
    {
      name: "Icefjord Explorer",
      duration: 7,
      departFrom: "Baltimore, MD",
      ports: "Sisimiut, Ilulissat, Nuuk",
      img: "https://media.npr.org/assets/img/2023/09/14/ap23257266606444_wide-c86d9b7e17b5a2fc29727784b270981a462c4ae6-s800-c85.webp",
      startDate: '2024-02-11',
      startPrice: 719,
      cruiseNum: 6
    }
]

let users_data : User[] = [
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