import "@/assets/styles/globals.css";
export const metadata ={
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties'
}
import Home from "./page";

export default function Layout() {
  return (
    <html>
      <body>{<Home />}</body>
    </html>
  );
}
