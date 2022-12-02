import { Menubar } from "../Menu/Menu";
import { Toolbar } from "../Toolbar/Toolbar";

export function Sidebar() {
    return(
        <div>
            <Toolbar />
            <Menubar />
        </div>
    )
}