import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton(){
    const {dark, setDark} = useContext(ThemeContext);

    return(
        <button onClick={()=> setDark(!dark)}>
            {dark? "light mode": "dark mode"}
        </button>
    );
}
export default ThemeButton