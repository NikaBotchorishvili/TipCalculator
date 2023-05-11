function Form() {
	return (
		<form>
            <div className="input-group">
			    <label htmlFor="bill">Bill</label>
                
                <div className="input-container">
                    <img src="../../images/icon-dollar.svg" alt="Dollar Icon" />
                    <input type="number" name="bill" placeholder="0" ></input>
                </div>

            </div>

			<div className="input-group">
				<div>
                    <label>Select Tip %</label>
				</div>

				<div className="tips">
					<button className="tip" type="button">5%</button>
					<button className="tip" type="button">10%</button>
					<button className="tip" type="button">15%</button>
					<button className="tip" type="button">25%</button>
					<button className="tip" type="button">50%</button>
					<input className="tip" type="number" placeholder="Custom"/>
				</div>
			</div>

            <div className="input-group">
                <label htmlFor="bill">Number of People</label>
                
                <div className="input-container">
                    <img src="../../images/icon-person.svg" alt="Dollar Icon" />
                    <input type="text" name="bill" placeholder="0" ></input>
                </div>
            </div>
		</form>
	);
}

export default Form;
