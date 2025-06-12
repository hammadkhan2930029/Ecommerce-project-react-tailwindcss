import { forwardRef } from "react"
import { HeaderComponent } from "../components/header/headerComponent"

export const Header = forwardRef((props,ref)=> {
    return(
        <div ref={ref}>
            <HeaderComponent/>

        </div>
    )
})