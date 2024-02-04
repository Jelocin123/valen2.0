import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'


export const metadata = {
  title: "To my beautiful Ayanah",
  description: "I love you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
