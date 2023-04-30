import {atom} from "recoil"

const tweetDataAtom =atom({
    key:"tweet data",
    default: ["already existing tweet"]
})

export default tweetDataAtom