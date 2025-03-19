import { createSignal } from 'solid-js';
import styles from '../Settings.module.css';
import {A} from "@solidjs/router"

function Settings() {
    const [sbcon, setsbCon] = createSignal('');

    const openGen = () => setsbCon( 
        <div id="gen">
            TODO - General settings
        </div>
    );
    const openCon = () => setsbCon(
        <div id="con">
            TODO - Connection (it should look like the about:settings connection for tor)
        </div>
    );
    const openPrivacy = () => setsbCon(
        <div id="priv">
            TODO Privacy settings
        </div>
    );
    const openSecurity = () => setsbCon(
        <div id="sec">
            TODO - security settings
        </div>
    ); 

    return (
        <div>
            <div class={styles.Navbar}>
                <A href="/"><img src="/back.svg" style="width: 2vw; height: 2vw; fill: white; margin-top: 5vh; margin-right: 15vw;"></img></A>
                <div class={styles.Navbar_general}>
                    <button class={styles.Navbar_btn} onClick={openGen}>General</button>
                </div>
                <div class={styles.Navbar_general}>
                    <button class={styles.Navbar_btn} onClick={openCon}>Connection</button>
                </div>
                <div class={styles.Navbar_general}>
                    <button class={styles.Navbar_btn} onClick={openPrivacy}>Privacy</button>
                </div>
                <div class={styles.Navbar_general}>
                    <button class={styles.Navbar_btn} onClick={openSecurity}>Security</button> 
                </div>
            </div>
            <div class={styles.settingsBody} id="sbody">
                {sbcon()} 
            </div>
        </div>
    );
}

export default Settings;
