
export const metadata = {
  title: "Ekon-Sons LTD | Construction & Maintenance Services Ghana",
  description:
    "Roof leak repair, waterproofing, plumbing, fuel station maintenance and construction services in Ghana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
