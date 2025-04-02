import styles from '../Route.module.css';
import { createSignal, createEffect } from "solid-js";

function URoute() {
  createEffect(() => {
    const iframe = document.getElementById("uframe");
    if (iframe) {
      iframe.src = __uv$config.prefix + __uv$config.encodeUrl(
        decodeURIComponent(atob(window.location.search.slice(3)))
      );
    }
  });

  return (
    <div>
      <iframe class={styles.frame} id="uframe" />
    </div>
  );
}

export default URoute;
