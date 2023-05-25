import { ReactNode } from "react";
import { Nunito } from "next/font/google";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Book Wise",
  description: "Challenge of last ReactJS module of the Rocketseat",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="min-w-screen min-h-screen bg-gray-800 p-5">
          {children}
        </div>
      </body>
    </html>
  );
}
