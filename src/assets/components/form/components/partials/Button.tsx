import { useContext } from "react";
import { dataContext } from "../../../../context/Context";
interface props {
	val: number;
}
function Button({ val }: props) {
	const {handleChange, formData} = useContext(dataContext);
	return (
		<button name="tip" className={ (formData?.tip == val.toString())? "selected": "tip" } type="button" value={val} onClick={(e) => handleChange?.(e)}>
			{val}%
		</button>
	);
}

export default Button;
