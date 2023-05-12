import { useContext } from "react";
import { dataContext } from "../../../context/Context";

function Result() {	

	const { results, handleReset } = useContext(dataContext)
	return (
		<div className="results-container">
			<div className="results">
				<div className="result">
					<div className="tip-amount">
						<h4>Tip Amount</h4>
						<small>/ person</small>
					</div>
					<h1>{results?.tipAmount? results.tipAmount.toFixed(2) + "$": '0.00$'}</h1>

				</div>
				<div className="result">
					<div className="total">
						<h4>Total</h4>
						<small>/ person</small>
					</div>
					<h1>{results?.totalAmount? results.totalAmount.toFixed(2) + "$": '0.00$'}</h1>

				</div>
			</div>
            <button type="button" className="reset" onClick={() => handleReset?.()}>RESET</button>
		</div>
	);
}

export default Result;
