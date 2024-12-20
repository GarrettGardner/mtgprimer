import { Logo } from "@/components/common";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="logoWrap">
        <Logo />
      </div>
      <p>
        MTG Primer was created by{" "}
        <a href="https://garrett-gardner.com/" target="_blank">
          Garrett Gardner
        </a>
        . This website is possible thanks to{" "}
        <a href="https://scryfall.com/" target="_blank">
          Scryfall
        </a>
        ,{" "}
        <a href="https://17lands.com" target="_blank">
          17Lands.com
        </a>{" "}
        (under{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
          Creative Commons Attribution 4.0 Interational License
        </a>
        ) and Andrew Gioia&lsquo;s{" "}
        <a href="https://github.com/andrewgioia/Keyrune" target="_blank">
          Keyrune
        </a>{" "}
        and{" "}
        <a href="https://github.com/andrewgioia/mana" target="_blank">
          Mana
        </a>
        .
      </p>
      <p>
        Found an error or have some feedback? Email{" "}
        <a href="mailto:mtgprimer@gmail.com" title="Email" target="_blank">
          mtgprimer@gmail.com
        </a>{" "}
        anytime! Or, better yet, become a contributor{" "}
        <a href="https://github.com/GarrettGardner/mtgprimer" target="_blank">
          on GitHub!
        </a>
      </p>
      <p>
        MTG Primer is unofficial Fan Content permitted under the Fan Content
        Policy. Not approved/endorsed by Wizards. Portions of the materials used
        are property of Wizards of the Coast. ©Wizards of the Coast LLC.
      </p>
    </footer>
  );
};
