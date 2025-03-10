import { useState, useContext, useEffect } from "react";
import { GlobalState } from "./GlobalState";

function TextInput() {
    const { data, setData } = useContext(GlobalState);

    const [name, setName] = useState(data?.name || "");

    useEffect(() => {
        setName(data?.name || "");
    }, [data?.name]);

    return (

        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What is your name?"
            />
            <button onClick={() => setData(prevData => ({ ...prevData, name }))}>
                Update
            </button>
        </div>
    );
}

export default TextInput;