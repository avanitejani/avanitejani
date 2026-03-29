import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./data/SidebarProvider";
import { ThemeProvider } from "../../ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avani Tejani",
  description: "avani tejani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollbarWidth: 'none' }}>
      <head>
        <link rel="icon" href="/Common/favocoin.ico" />
      </head>

      <body>

        <ThemeProvider>
        <SidebarProvider>
          {children}
          </SidebarProvider>
        </ThemeProvider>
      
      </body>
    </html>
  );
}
