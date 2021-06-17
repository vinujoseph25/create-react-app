import { useEffect, memo } from "react";

const Display = memo(props => {
    const { callback, value, text } = props;
    useEffect(() => {
        console.log(`Child ${text} Updated`);
    });
    return <>
        <p>
            {text} : {value}
        </p>
        <button onClick={() => callback(value + 1)} >
            Count
        </button>
    </>
});

export default Display;