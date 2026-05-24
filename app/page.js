
export default function HomePage() {
  return (
    <main style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
      <h1>Ekon-Sons LTD</h1>

      <p>
        Construction maintenance, roof leak repair, waterproofing,
        plumbing and fuel station maintenance services in Ghana.
      </p>

      <h2>Our Services</h2>

      <ul>
        <li>Roof Leak Repair</li>
        <li>Waterproofing</li>
        <li>Plumbing</li>
        <li>Drainage Repair</li>
        <li>Fuel Station Maintenance</li>
        <li>Bollard Installation</li>
        <li>Civil Works</li>
      </ul>

      <h2>Popular Areas</h2>

      <ul>
        <li>Accra</li>
        <li>Tema</li>
        <li>East Legon</li>
        <li>Spintex</li>
        <li>Adenta</li>
      </ul>

      <a
        href="https://wa.me/233000000000"
        style={{
          background: "green",
          color: "white",
          padding: "15px 25px",
          display: "inline-block",
          textDecoration: "none",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        Chat on WhatsApp
      </a>
    </main>
  );
}
