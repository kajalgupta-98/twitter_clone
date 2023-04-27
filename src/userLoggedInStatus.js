import {atom } from "recoil"

const userLoggedInStatus = atom({
    key:"isUserLoggedIn",
    default: false
})

export default userLoggedInStatus