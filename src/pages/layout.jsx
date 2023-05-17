import { useEffect, useRef, useState } from "react";
import App from "../App";
import Gravity from "./gravity";
import { key } from "../constants/keys";
import ColorExplotion from "./color_explotion";

const visuals = {
    app: "APP",
    gravity: "GRAVITY",
    color_exp: "COLOR_EXP"
};

const Layout = () => {
    const ref = useRef();
    const [current_visual, set_current_visual] = useState(visuals.app);

    const handleVisual = () => {
        switch(current_visual) {
          case visuals.app : return <App />
          case visuals.gravity : return <Gravity/>
          case visuals.color_exp : return <ColorExplotion/>
          default: return <App />
        }
    }

    const handleKeyboard = (event) => {
        const code = event.keyCode || event.which;

        console.log("[ KEY PRESS ] - ", code)

        switch(code){
            case key.q : set_current_visual(visuals.gravity); break;
            case key.w : set_current_visual(visuals.app); break;
            case key.e : set_current_visual(visuals.color_exp); break;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard, true)
    }, [])

    return ( 
        <div
            id="layout-wrapper"
            ref={ref} 
            onKeyPress={(e) => handleKeyboard.bind(e)}
        >
            { handleVisual() }
        </div>    
    );
}
 
export default Layout;