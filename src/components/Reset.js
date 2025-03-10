import { useContext } from "react";
import { GlobalState } from "./GlobalState";

export default function Reset() {
    
    const {setData} = useContext(GlobalState);
    
    return(
        <button
        onClick={
            () => {
                // localStorage.setItem("data", JSON.stringify({}));
                setData({name: ""});
            }
        }>
            Reset
        </button>
    );
}