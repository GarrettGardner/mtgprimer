import Link from "next/link";

import type { ITemplateHome } from "@/models";
import { Button, CircleLink, Icon, Logo } from "@/components/common";

import styles from "./home.module.scss";

export const TemplateHome = (props: { template: ITemplateHome }) => {
  return (
    <section className={styles.home}>
      <div className="logo">
        <Logo />
      </div>
      <p>Resources for Limited Magic: The Gathering</p>
      <ul>
        {props.template.latestFormats.map((latestFormat) => (
          <li key={latestFormat.formatCode}>
            <CircleLink
              href={latestFormat.menu?.home.path ?? "/"}
              image={latestFormat.backgroundImage}
              iconType="set"
              iconSlug={latestFormat.formatCode}
              title={latestFormat.formatName}
              subtitle={latestFormat.releaseDate}
            />
          </li>
        ))}
      </ul>
      <div className="row">
        <div className="icon">
          <Icon slug="fas fa-cogs" />
        </div>
        <div className="text">
          <p>
            MTG Primer offers tools to help you break down limited Magic: The
            Gathering formats so you can learn to play a new format or brush up
            on an old one.
          </p>
          <p>
            First launched with a{" "}
            <Link href="/khans-of-tarkir/morphs">morphs guide</Link> for Khans
            of Tarkir in 2014, MTG Primer has since grown to include instant
            speed guides, common Effect-o-pedia effects, removal guides, and
            format themes. Check it out!
          </p>
          <p>
            MTG Primer was created by Garrett Gardner and is also now{" "}
            <Link
              href="https://github.com/GarrettGardner/mtgprimer"
              target="_blank"
            >
              open source on GitHub
            </Link>
            , so please feel free to contribute! (Especially if you find an
            error!)
          </p>
        </div>
      </div>
      <p>
        <Button size="lg" href="/directory" icon="fas fa-compass">
          Format Directory
        </Button>
      </p>
    </section>
  );
};
