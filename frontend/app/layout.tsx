import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="animated-gradient min-h-screen">
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            <Toaster position="top-right" />
            <div className="pt-24">
              {children}
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

