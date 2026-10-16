import { Poppins, Lusitana, Inter } from "next/font/google";

export const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const inter = Inter({ weight: "400", subsets: ["latin"] });
