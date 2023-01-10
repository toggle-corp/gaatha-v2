import React from 'react';
import { _cs } from '@togglecorp/fujs';
import { GetStaticProps } from 'next';

import Page from 'components/Page';
import Link from 'next/link';
import Image from 'next/image';
import { request, gql } from 'graphql-request';

import envVariables from 'utils/common';
import styles from './styles.module.css';

interface Props {
    className?: string;
    works?: unknown;
}

function Home(props: Props) {
    const {
        className,
        works,
    } = props;

    // NOTE: This needs removal. This is only a test
    console.warn(works);

    return (
        <Page
            pageTitle="Home"
            className={_cs(styles.home, className)}
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

export const getStaticProps: GetStaticProps<Props> = async () => {
    const query = gql`
        query Works{
            works {
                id
                title
                duration
                description
            }
        }
    `;

    // FIXME: setup typescript typings
    const value = await request(envVariables.graphqlEndpoint, query);

    return ({
        props: {
            className: 'home',
            works: value.works,
        },
    });
};

export default Home;
