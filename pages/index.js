import React, { useEffect } from 'react';
import firebase from "firebase/app";
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../libs/posts';
import { login } from '../redux/actions/authActions';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
};

function Home(props) {
  const { allPostsData, dispatch, auth } = props;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({ email: user.email, name: user.email, token: user.refreshToken }));
      }
    });
  }, []);

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword('mosquitojoe85@gmail.com', '123456')
      .then((userCredential) => {
        var { user } = userCredential;
        dispatch(login({ email: user.email, name: user.email, token: user.refreshToken }));
      })
      .catch((error) => {
        console.log(`errorCode, errorMessage--->`, error);
      });
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <button onClick={handleLogin}>login in</button>
        <p>{auth.name}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default connect(({ auth }) => ({ auth }))(Home);