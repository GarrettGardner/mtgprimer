import Link from "next/link";

import { Button, Container, Logo } from "@/components/common";

import styles from "./not-found.module.scss";

export const TemplateNotFound = () => {
  return (
    <section className={styles.notFound}>
      <Container>
        <Link href="/">
          <div className="logo">
            <Logo />
          </div>
        </Link>
        <h2>Not Found</h2>
        <h3>That page could not be found.</h3>
        <p>
          <Button href="/">Go to home page</Button>
        </p>
      </Container>
    </section>
  );
};
