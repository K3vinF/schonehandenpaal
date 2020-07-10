import Head from 'next/head'
import Footer from '../components/Footer'
import Router from 'next/router'
import {Box, Flex} from "rebass/styled-components";
import { theme } from "../assets/theme";

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Schonehandenpaal.nl</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        p = {[2,3]} backgroundColor={ theme.colors.blue }
        alignItems='center'
        width={[1]}
        flexWrap={'wrap'} >
        <Box width={[1]}>
          <img src={'images/schonehandenpaal.png'} />
        </Box>
      </Flex>
      <main>
        <p>Bedankt voor uw bericht. We nemen spoedig contact op</p>
        <p onClick={() => Router.push('/')}>Terug naar de homepage</p>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
