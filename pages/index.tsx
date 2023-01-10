import React from 'react';

import Page from 'components/Page';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

function Home() {
    return (
        <Page
            pageTitle="Home"
            className={styles.home}
            contentClassName={styles.mainContent}
        >
            <Image
                className={styles.logo}
                src="logo.jpg"
                alt="Gaatha"
                width={700}
                height={500}
            />
            <div className={styles.routes}>
                <Link
                    href="/works"
                    passHref
                >
                    Works
                </Link>
                <Link
                    href="/studio"
                    passHref
                >
                    Studio
                </Link>
                <Link
                    href="/contact"
                    passHref
                >
                    Contact
                </Link>
                <Link
                    href="/search"
                    passHref
                >
                    Search
                </Link>
            </div>
        </Page>
    );
}

export default Home;
