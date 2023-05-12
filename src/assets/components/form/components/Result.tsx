import { useContext } from "react";
import { dataContext } from "../../../context/Context";

function Result() {	

	const {errors, results} = useContext(dataContext)
	return (
		<div className="results-container">
			<div className="results">
				<div className="result">
					<div className="tip-amount">
						<h2>Tip Amount</h2>
						<span>/ person</span>
					</div>
					<h1>{results?.tipAmount && (results.tipAmount)}$</h1>
				</div>
				<div className="result">
					<div className="total">
						<h2>Total</h2>
						<span>/ person</span>
					</div>
					<h1>{results?.totalAmount && (results.totalAmount)}$</h1>

				</div>
			</div>
            <button type="button" className="reset">RESET</button>
		</div>
	);
}

export default Result;
