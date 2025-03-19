import styles from '../Route.module.css';
import { A, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

function URoute() {
    return (
        <>
            <iframe class={styles.frame} id="uframe"/>
            {
            setTimeout(() => {
                document.getElementById("uframe").src = __uv$config.prefix + __uv$config.encodeUrl(decodeURIComponent(
                    atob(window.location.search.slice(3))
                ))
            }, 500)}
        </>
    )
}

export default URoute;
