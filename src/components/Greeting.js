import { useContext } from "react";
import { GlobalState } from "./GlobalState";

export function Greeting() {

    const {data} = useContext(GlobalState);

    const name = data?.name;

    return (
        name ? `Hi, ${name}!` : ""
    );
}
