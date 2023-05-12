import { useContext } from "react";
import { dataContext } from "../../../context/Context";

function Result() {	

	const { results, handleReset } = useContext(dataContext)
	return (
		<div className="results-container">
			<div className="results">
				<div className="result">
					<div className="tip-amount">
						<h2>Tip Amount</h2>
						<span>/ person</span>
					</div>
					<h1>{results?.tipAmount && (results.tipAmount.toFixed(2))}$</h1>
				</div>
				<div className="result">
					<div className="total">
						<h2>Total</h2>
						<span>/ person</span>
					</div>
					<h1>{results?.totalAmount && (results.totalAmount.toFixed(2))}$</h1>

				</div>
			</div>
            <button type="button" className="reset" onClick={() => handleReset?.()}>RESET</button>
		</div>
	);
}

export default Result;
