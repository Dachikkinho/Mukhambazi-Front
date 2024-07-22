import { atom } from "recoil";

export const sideBarOpenState = atom({
    key: "sideBarOpen",
    default: false
})
export const musicState = atom({
    key: "music",
    default: []
})