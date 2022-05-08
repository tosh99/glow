import { useEffect } from "react";
import Router from "next/router";

function Services() {
    useEffect(() => {
        Router.push("/services/br-facials");
    }, []);

    return <></>;
}

export default Services;
