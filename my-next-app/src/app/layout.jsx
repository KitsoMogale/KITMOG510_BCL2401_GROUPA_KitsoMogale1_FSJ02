import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { SearchProvider } from "./components/SearchProvider";
import { FilterProvider } from "./components/FilterProvider";
import Filter from "./components/Filter";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <SearchProvider>
        <FilterProvider>
      <body>
      <Header/>
      <Filter/>
        {children}
      </body>
      </FilterProvider>
      </SearchProvider>
    </html>
  );
}


