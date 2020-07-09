import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Box,  Flex } from "rebass";
import { theme, ThemeType } from '../theme';
import { createGlobalStyle, ThemeProvider} from "styled-components";
import reset from 'styled-reset'
import ContactForm from "../components/ContactForm";

const GlobalStyle = createGlobalStyle<{theme: ThemeType }>`
  ${ reset }
  body, html {
    font-family: ${ props => props.theme.fonts.body };
  }
`
export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <div className="container">
      <Head>
        <title>Schonehandenpaal.nl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <h1>Schonehandenpaal.nl</h1>
        <Flex
          alignItems='center'
          px={3}
          py={4}
          bg='muted'>
          <Box mx='auto' />
        </Flex>
        <Flex
          alignItems='center'
          px={3}
          py={4}
          bg='muted'>
          <Box width={[1,1/2]} p={[2,3]}>
            <ContactForm />
          </Box>
          <Box width={[1,1/2]} p={[2,3]}>
            06-218 287 51<br />

            Schonehandenpaal.nl<br />
            Polyanderweg 10 A<br />
            3218 XT Heenvliet<br />
          </Box>
        </Flex>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.923286333446!2d4.232245752084813!3d51.862357079595434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44c203cf6aaab%3A0x9efd269d3b9b4a7c!2sVuilvrij.nl!5e0!3m2!1sen!2snl!4v1594326260758!5m2!1sen!2snl"
          width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
          tabIndex="0"></iframe>
      </main>

      <Footer />

    </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {

  return {
    props: {

    },
  }
}
