import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutPage } from "@/components/LayoutPage";
import { IChildren } from "@/@types/children";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja online",
  description: "Página inicial da loja online",
};

export const LayoutHome = ({children}: IChildren) => <LayoutPage children={children} />

export default LayoutHome;