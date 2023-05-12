import Button from "./partials/Button";
import { useContext } from "react";
import { dataContext } from "../../../context/Context";

function Form() {
	const { formData, handleChange, errors } = useContext(dataContext);
	return (
		<form>
			<div className="input-group">
				<div className="label-container">
					<label htmlFor="bill">Bill</label>
					{errors?.bill && (<small className="error">{errors.bill}</small>)}
					
				</div>
				<div className="input-container">
					<img src="/images/icon-dollar.svg" alt="Dollar Icon" />
					<input
						onChange={(e) => handleChange?.(e)}
						type="number"
						name="bill"
						value={formData?.bill}
						placeholder="0"
					></input>
				</div>
			</div>

			<div className="input-group">
				<div className="label-container">
					<label>Select Tip %</label>
					{errors?.tip && (<small className="error">{errors.tip}</small>)}

				</div>

				<div className="tips">
					{tipPercentageValues.map((val, id) => {
						return <Button key={id} val={val} />;
					})}
					<input
						onChange={(e) => handleChange?.(e)}
						className="tip"
						type="number"
						name="tip"
						value={formData?.tip}
						placeholder="Custom"
					/>
				</div>
			</div>

			<div className="input-group">
				<div className="label-container">
					<label htmlFor="peopleAmount">Number of People</label>
					{errors?.peopleAmount && (<small className="error">{errors.peopleAmount}</small>)}

				</div>

				<div className="input-container">
					<img src="/images/icon-person.svg" alt="Dollar Icon" />
					<input onChange={(e) => handleChange?.(e)} value={formData?.peopleAmount} type="text" name="peopleAmount" placeholder="0"></input>
				</div>
			</div>
		</form>
	);
}

let tipPercentageValues = [5, 10, 15, 25, 50];
export default Form;
