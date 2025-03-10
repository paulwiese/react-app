import { Greeting } from "../components/Greeting";
import Counter from "../components/Counter";
import TextInput from "../components/TextInput";
import Reset from "../components/Reset";

export default function Home() {
    return(
        <div className="main">
                <TextInput />
                <br></br>
                <Greeting />
                <br></br>
                <Counter />
                <br></br>
                <Reset />
              </div>
    );
}