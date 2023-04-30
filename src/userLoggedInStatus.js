import {atom } from "recoil"

const userLoggedInStatus = atom({
    key:"isUserLoggedIn",
    default: false
})

export const currentUserAtom= atom({
    key:"currentUser",
    default: {}
})

export default userLoggedInStatus