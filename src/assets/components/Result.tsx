function Result() {
	return (
		<div className="results-container">
			<div className="results">
				<div className="result">
					<div className="tip-amount">
						<h2>Tip Amount</h2>
						<span>/ person</span>
					</div>
					<h1>0.00$</h1>
				</div>
				<div className="result">
					<div className="total">
						<h2>Tip Amount</h2>
						<span>/ person</span>
					</div>
					<h1>0.00$</h1>
				</div>
			</div>
            <button type="button" className="reset">RESET</button>
		</div>
	);
}

export default Result;
