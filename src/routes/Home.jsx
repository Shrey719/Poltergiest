import styles from '../App.module.css';
import {A} from "@solidjs/router"
function Home() {
  return (
    <div>
      
      <div class={styles.searchBar}>
        <img class={styles.searchBar_img}></img>
        <h1 class={styles.searchBar_header}>Poltergiest</h1>
        <input class={styles.searchBar_input}></input>
      </div>
      <div class={styles.settings}>
            <A href="/settings/" class="settings_listener">
            <img class={styles.settingsImgClickable} src="/settingsW.svg"></img>
            </A>
      </div>
    </div>
  );
}

export default Home;
