import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }else{
             window.scrollTo(0, 0);
        }
    }, [location]);

    return null;
}

export default ScrollToTop;