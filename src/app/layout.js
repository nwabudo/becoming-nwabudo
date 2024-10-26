import { RusillaFont } from "@/styles/fonts";
import "../styles/globals.css";

export const metadata = {
  title: "Chioma x OnyekachI",
  description: "Two heart becoming one on November 16, 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${RusillaFont.variable}`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
