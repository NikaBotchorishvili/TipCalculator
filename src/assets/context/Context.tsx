import { createContext, useState, useEffect, ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

interface formData {
	bill: string;
	tip: string;
	peopleAmount: string;
}

interface results {
	tipAmount: number | null;
	totalAmount: number | null;
}

interface context {
	formData?: formData;
	setFormData?: Function;
	handleChange?: Function;
	handleReset?: Function;
	errors?: errors;
	results?: results;
}

interface errors {
	bill?: string | null;
	tip?: string | null;
	peopleAmount?: string | null;
}

export const dataContext = createContext<context>({});

export function ContextProvider({ children }: Props) {
	const [formData, setFormData] = useState<formData>({
		bill: "",
		tip: "",
		peopleAmount: "",
	});

	const [results, setResults] = useState<results>({
		tipAmount: null,
		totalAmount: null,
	});

	const [errors, setErrors] = useState<errors>({
		bill: null,
		tip: null,
		peopleAmount: null,
	});

	useEffect(() => {
		if (Object.values(formData).filter((val) => val == "").length == 0) {
			const { bill, tip, peopleAmount } = formData;
			const [parsedBill, parsedTip, parsedPeopleAmount] = [
				Number(bill),
				Number(tip),
				Number(peopleAmount),
			];
			let errs: errors = {
				bill: null,
				peopleAmount: null,
				tip: null,
			};
			if (parsedBill === 0) {
				errs.bill = "Can't be zero";
			} else if (isNaN(parsedBill) && typeof parsedBill === "number") {
				errs.bill = "Must be a number";
			}

			if (parsedTip === 0) {
				errs.tip = "Can't be zero";
			} else if (isNaN(parsedTip) && typeof parsedTip === "number") {
				errs.tip = "Must be a number";
			}

			if (parsedPeopleAmount <= 0) {
				errs.peopleAmount = "Can't be less or equal to zero";
			} else if (
				isNaN(parsedPeopleAmount) &&
				typeof parsedPeopleAmount === "number"
			) {
				errs.peopleAmount = "Must be a number";
			}

			if (Object.values(errs).every((err) => err == null)) {
				setErrors({ tip: null, bill: null, peopleAmount: null });
				let totalTipPerPerson =
					(parsedBill * (parsedTip / 100)) / parsedPeopleAmount;
				let totalPerPerson = parsedBill / parsedPeopleAmount;

				setResults({
					totalAmount: totalPerPerson,
					tipAmount: totalTipPerPerson,
				});
			} else {
				setErrors(errs);
			}
		}
	}, [formData]);

	const handleReset = () => {
		setErrors({ tip: null, bill: null, peopleAmount: null });
		setFormData({ tip: "", peopleAmount: "", bill: "" });
		setResults({ tipAmount: null, totalAmount: null });
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData((prevFormData) => {
			return { ...prevFormData, [name]: value };
		});
	};

	const context: context = {
		formData: formData,
		setFormData: setFormData,
		handleChange: handleChange,
		errors: errors,
		results: results,
		handleReset: handleReset,
	};

	return (
		<dataContext.Provider value={context}>{children}</dataContext.Provider>
	);
}

export default ContextProvider;
