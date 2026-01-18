import { type AppType } from "next/app";
import { DM_Sans } from "next/font/google";

import "@/styles/globals.css";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={dmSans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
