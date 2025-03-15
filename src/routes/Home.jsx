import styles from '../App.module.css';

function Home() {
  return (
    <div class={styles.App}>
      
      <div class={styles.searchBar}>
        <img class={styles.searchBar_img}></img>
        <h1 class={styles.searchBar_header}>Poltergiest</h1>
        <input class={styles.searchBar_input}></input>
      </div>
      <div class={styles.settings}>
            <img class={styles.settingsImgClickable}></img>
      </div>
    </div>
  );
}

export default Home;
