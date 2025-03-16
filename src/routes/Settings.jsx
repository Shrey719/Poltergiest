import styles from '../Settings.module.css'
function Settings() {
    return (
    <div>
        <div class={styles.Navbar}>
            <div class={styles.Navbar_general}>
                <button class={styles.Navbar_btn}>General</button>
            </div>
            <div class={styles.Navbar_connection}>
                <button class={styles.Navbar_btn}>Connection</button>
            </div>
        </div>
        <div class={styles.settingsBody}>
        </div>
    </div>)
}

export default Settings