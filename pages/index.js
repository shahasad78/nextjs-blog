import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import Link from "next/link";
import Date from '../components/date';

import {getSortedPostsData} from "../lib/posts";

import utilStyles from '../styles/utils.module.css';

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi folks! I'm a gangsterrr!!</p>
                <p>
                    (This is a sample website. I'm building this to learn about Next.js using {' '}
                    <a href="https://nextjs.org/learn">this tutorial</a>.)
                </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {
                        allPostsData.map(({id, title, date}) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <div className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
