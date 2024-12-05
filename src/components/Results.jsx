import { calculateInvestmentResults } from "../util/investment.js";
export default function Results({ UserInput }) {
  console.log(UserInput);
  let res = calculateInvestmentResults(UserInput);
  console.log(res);
  return (
    <>
      <p>Results will be displayed here</p>
    </>
  );
}
