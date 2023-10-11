export const DefaultField = ({ state, stateFn, field, display, type }) => {

    const handleResponse = (e) => {
        const response = { ...state, [field]: e.target.value }
        stateFn(response)
    }

    return (
        <div>
            <p>{display}</p>
            <input type={type} onChange={e => handleResponse(e)} />
        </div>
    )
}
