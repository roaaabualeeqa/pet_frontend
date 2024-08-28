"use client";
import './globals.css'
import Header from "./components/Header"
import ThemeWrapper from './context/theme';
import AuthWrapper from './context/auth';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <AuthWrapper>
            <Header />
            <main>{children}</main>
          </AuthWrapper>
        </ThemeWrapper>
      </body>
    </html>
  )
}