import { memo } from "react";

const Display = memo(props => {
    const { callback, value, text } = props;
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