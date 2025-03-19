import styles from '../App.module.css';
import { A, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

function Home() {
  const [inputValue, setInputValue] = createSignal("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue().trim() !== "") {
      if (inputValue().includes(".") && inputValue().includes("http") && inputValue().includes("://")) {
        navigate(`/route?q=${btoa(encodeURIComponent(inputValue()))}`);
      } else if (inputValue().includes(".") && !inputValue().includes("http") && !inputValue().includes(" ")) {
        navigate(`/route?q=${btoa(encodeURIComponent("https://" + inputValue()))}`);
      } else {
        navigate(`/route?q=${btoa(encodeURIComponent("https://www.startpage.com/sp/search?q=" + inputValue()))}`)
      }
    }
  };

  return (
    <div>
      <div class={styles.searchBar}>
        <img class={styles.searchBar_img} />
        <h1 class={styles.searchBar_header}>Poltergeist</h1>
        <input 
          id="conSub" 
          class={styles.searchBar_input} 
          value={inputValue()}
          onInput={(e) => setInputValue(e.target.value)} 
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <div class={styles.settings}>
        <A href="/settings/" class="settings_listener">
          <img class={styles.settingsImgClickable} src="/settingsW.svg" />
        </A>
      </div>
    </div>
  );
}

export default Home;
