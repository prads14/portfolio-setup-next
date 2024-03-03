import { Poppins } from "next/font/google"
import { Oswald } from "next/font/google";
import { Lusitana } from "next/font/google";

export const poppins = Poppins({weight:"400", subsets: ['latin'] });

export const oswald = Oswald({weight: "400", subsets: ['cyrillic']})

export const lusitana = Lusitana({ weight: "400", subsets:['latin']})

