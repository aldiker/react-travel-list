export default function Form() {
    function handleSubmit(event) {
        event.preventDefault()
        console.log(event)

        console.log(event.target)
        // console.log(event.target.input.value)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select>
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                    (el) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    )
                )}
            </select>
            <input type="text" placeholder="Item..." />
            <button>Add</button>
        </form>
    )
}
