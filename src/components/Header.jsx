import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header>
      <div id="header">
        <img src={logo} alt="Andha paisa hai" />
        <h1>Investment Calculator</h1>
      </div>
    </header>
  );
}
