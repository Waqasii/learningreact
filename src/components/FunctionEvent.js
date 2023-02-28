

function FunctionEvent() {

    function handleClick() {
        console.log('Button Clicked');
    }
    return (
        <div>
            <h1>
                This is Functional event handling Component
            </h1>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}


export default FunctionEvent;