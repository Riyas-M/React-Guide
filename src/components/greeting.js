import { useState } from "react";

import Output from "./output";

const Greeting = () => {

    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h2>Hello World</h2>
            {!changedText && <p>Its good to See You</p>}
            {changedText && <Output>Changed</Output>}
            <button onClick={changedTextHandler}>Change Text</button>
        </div>
    )
};

export default Greeting;