import { useState } from "react";
import "./SingleSelectComponent.scss";

function SingleSelectComponent({
	options = [
		{
			id: 1,
			name: "Default option",
		},
	],
	placeholder = "Default placeholder",
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedOptionId, setSelectedOptionId] = useState(null);

	const toggleDropdown = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	const selectOption = (e, option) => {
		setSelectedOption(option);
		setSelectedOptionId(option.id);
		setIsOpen(false);
	};

	const removeSelectedOption = () => {
		setSelectedOption(null);
		setSelectedOptionId(null);
	};

	const getSign = () => {
		if (isOpen) {
			return <span className="span-plus">&#8722;</span>;
		}
		if (!isOpen && !selectedOptionId) {
			return <span className="span-minus">&#43;</span>;
		}
		if (!isOpen && selectedOptionId) return <span className="span-x">x</span>;
	};

	const shouldApplyOpacity = (id) => {
		if (selectedOption && selectedOption.id !== id) return "applyOpacity";
	};

	return (
		<div className="wrapper">
			<div className="select" onClick={toggleDropdown}>
				{selectedOption ? (
					<div>{selectedOption.name}</div>
				) : (
					<div className="placeholderText">{placeholder}</div>
				)}
				<div
					className="sign"
					onClick={!isOpen && selectedOption ? removeSelectedOption : undefined}
				>
					{getSign()}
				</div>
			</div>
			<div className={isOpen ? "options" : "hidden"}>
				{options.map((option) => {
					return (
						<div key={option.id} className="option">
							<label className={shouldApplyOpacity(option.id)}>
								<input
									type="checkbox"
									checked={selectedOptionId === option.id}
									onChange={(e) => selectOption(e, option)}
								/>
								{option.name}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SingleSelectComponent;
