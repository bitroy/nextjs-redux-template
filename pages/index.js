import styles from "styles/Home.module.css";
import Head from "next/head";
import { wrapper } from "redux/store";

const Home = () => {
  return (
    <>
      <Head>
        <title>Generic Page Title</title>
        <meta name="description" content="Nextjs Redux Template" />
      </Head>
      <div className={styles.container}>
        <header>
          <div className={styles.header_section}>Generic Header</div>
        </header>
        <main></main>
      </div>
    </>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(({store}) => {

// });

// export const getStaticProps = wrapper.getStaticProps(({store}) => {

// });

export default Home;
