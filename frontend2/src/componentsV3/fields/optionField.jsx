

export const OptionField = ({ state, stateFn, field, display, options }) => {



	const handleSelect = (e) => {
		const response = { ...state, [field]: e.target.value }
		stateFn(response)
	}

	return (
		<div>
			<p>{display}</p>
			<select value={state[field]} onChange={(e) => handleSelect(e)}>
				{options.map((opt) => (
					<option value={opt}>{opt}</option>
				))}
			</select>
		</div>
	)
}
