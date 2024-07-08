import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/MainPlayer.scss"
import { SideBar } from "./components/SideBar/SideBar";
import { RecoilWrap } from "./components/RecoilWrap/RecoilWrap";
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import { RightSideBar } from "./components/RightSideBar/RightSideBar";
import MainPlayer from "./components/MainPlayer/MainPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilWrap>
          <div className={'main-components-container'}>
            <SideBar />
            <HamburgerMenu />
            {children}
            <RightSideBar />
            <MainPlayer />
          </div>
        </RecoilWrap>
      </body>
    </html>
  );
}
