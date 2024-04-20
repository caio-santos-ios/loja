import { getCookie } from "cookies-next";
import { atom } from "jotai";

const cartCokie = getCookie("cart")
export const cartAtom = atom(cartCokie ? JSON.parse(cartCokie) : [])