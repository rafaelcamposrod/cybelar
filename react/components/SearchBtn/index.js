import { useEffect, useRef } from "react";
import functionToApplyHiddenNoAutoComplete from "./libs/functionToApplyHiddenNoAutoComplete";

const SearchBtn = ({ DesktopSearchBtn }) => {

    const ref = useRef(null);

    useEffect(() => {
        const { current } = ref;
        const btn = current.querySelector("input.vtex-styleguide-9-x-input");

        if(btn !== null) functionToApplyHiddenNoAutoComplete();
    }, []);

    return ( 
        <div ref={ref}>
            <DesktopSearchBtn /> 
        </div>
    );
}

export default SearchBtn;

