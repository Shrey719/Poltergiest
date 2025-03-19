import styles from '../Route.module.css';
import { A, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

function URoute() {
    return (
        <>
            <iframe src={__uv$config.prefix + __uv$config.encodeUrl(decodeURIComponent(
                atob(window.location.search.slice(3))
            ))} class={styles.frame} />
            
        </>
    )
}

export default URoute;
