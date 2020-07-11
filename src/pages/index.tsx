import Head from 'next/head'
import Footer from '../components/Footer'
// https://github.com/rebassjs/rebass/issues/794#issuecomment-618307330
import { Box, Flex, Heading } from "rebass/styled-components";
import { theme } from '../assets/theme';
import ContactForm from "../components/ContactForm";
import styled, {ThemeProvider} from "styled-components";
import { FiSmartphone, FiMail } from "react-icons/fi";
import ReactGA from 'react-ga';
import React from "react";

const StyledPrice = styled.div`
  font-size:${props => props.theme.fontSizes['6']}px;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const StyledMainImage = styled.img`
  max-height: 800px;
`;
const StyledImageBox = styled(Box)`
 text-align: end;
`;

const StyledHeader = styled(Box)`
  line-height: 1;
  color: ${props => props.theme.colors.white};
  svg {
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
    display: inline-block;
    margin-right: 1em;
  }
`;



export default function Home(props: any) {
  const og_image = props.hostname + '/images/schone-handen-paal-klein-vierkant.jpg';
  const description = `Hygiënepaal met voetbedieningHandhygiëne, geschikt voor de meeste handflacons.`

  const jsonld = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Hygiënepaal met voetbediening",
    "image": [
      props.hostname + '/images/schone-handen-paal-persoon-vierkant.jpg',
      props.hostname + '/images/schonehandenpaal-fles-wit.jpg',
      props.hostname + '/images/schonehandenpaal-voet-wit.jpg',
    ],
    "description": description,
    "sku": "SCHONEHANDENPAAL1",
    "mpn": "925872",
    "brand": {
      "@type": "Brand",
      "name": "Schonehandenpaal.nl"
    },
    "offers": {
      "@type": "Offer",
      "url": props.hostname,
      "price": "79.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
    }
  }

  if (process.browser) {
    ReactGA.initialize('UA-171799610-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <ThemeProvider theme={ theme }>
    <div className="container">
      <Head>
        <title key='title'>Schonehandenpaal.nl</title>
        <link key='favicon' rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,700;0,900;1,400&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow, archive" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Schone Handen Paal | schonehandenpaal.nl" />
        <meta property="og:site_name" content="schonehandenpaal.nl" />
        <meta property="og:description"
           content={ description } />
        <meta name="description"
           content={ description } />
        <meta property="og:image"
           content={ og_image } />
        <script
          key={`json-ld`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) } }
        />
      </Head>
        <main>
          <Flex
            p = {[2,3]} backgroundColor={ theme.colors.blue }
            alignItems='center'
            flexWrap={'wrap'} >
            <StyledHeader>
              <img src={ props.hostname + '/images/schonehandenpaal.png'} />
            </StyledHeader>
            <StyledHeader ml={[0, 0, 0, 'auto']} width = {[1, 1, 'auto']} mt={[2,2,0]}>
              <FiMail /> <a href={'mailto: info@schonehandenpaal.nl'}>info@schonehandenpaal.nl</a>
              <FiSmartphone /> <a href={'tel:0031621828751'} className={'phone'}>06-218 287 51</a>
            </StyledHeader>
          </Flex>

          <Flex
            alignItems='center'
            px={3}
            py={4}
            flexWrap={'wrap'}>
            <StyledImageBox width={[1,1/2]} p={[2,3]}>
              <StyledMainImage src={'/images/schone-handen-paal.jpg'} alt={'Desinfectiegel handflacon op paal'} />
            </StyledImageBox>
            <Box width={[1, 1/2]} p={[2,3]}>
              <Heading
                fontSize={[ 4, 5 ]}
                as={'h1'}
                color='primary'>
                Hygiënepaal met voetbediening
              </Heading>

              <ul>
                <li>Handhygiëne door voetbediening</li>
                <li>Stevige metalen paal</li>
                <li>Degelijke constructie</li>
                <li>Geschikt voor de meeste handflacons</li>

                <li>Exclusief handflacon</li>
              </ul>

              <p>
              <Heading mt={[4,5]}>Direct leverbaar uit voorraad</Heading>
              <StyledPrice>€ 79.- </StyledPrice>excl. BTW</p>

              <p><em>Verzendkosten € 6,95 of afhalen in Heenvliet</em></p>
              <Heading
                fontSize={[ 2, 3 ]}
                mt={[3, 4]}
                as={'h3'}
                color='primary'>
                Ook leverbaar:
              </Heading>

              <ul>
                <li>Navulflessen desinfectiegel</li>
                <li>Bijpassende handflacon</li>
              </ul>

            </Box>
          </Flex>

          <Flex px = {[2,3]}
                alignItems={'baseline'}
                backgroundColor={ theme.colors.blue }
          >
            <img src={'/images/schone-handen-paal-persoon-vierkant-blauw.jpg'} alt={'Hand dispenser gemoteerd op paal'} />
            <img src={'/images/schonehandenpaal-fles.jpg'} alt={'Handflacon gemonteerd in de desinfectiepaal'} />
            <img src={'/images/schonehandenpaal-voet.jpg'} alt={'Hygiene door voetbediening'} />

          </Flex>


          <Flex
            alignItems='center'
            px={3}
            py={4}
            flexWrap={'wrap'}>
            <Box mx='auto' />
          </Flex>
          <Flex
            alignItems='center'
            px={3}
            py={4}
            flexWrap={'wrap'}>

            <Box width={[1,1/2]} p={[2,3]}>
              <Heading as={'h3'}>Contact</Heading>
              <p>
              <FiMail /> <a href={'mailto: info@schonehandenpaal.nl'}>info@schonehandenpaal.nl</a><br />
              <FiSmartphone /> <a href={'tel:0031621828751'} className={'phone'}>06-218 287 51</a><br /></p>
              <p>
                Schonehandenpaal.nl<br />
                Polyanderweg 10 A<br />
                3218 XT Heenvliet<br />
              </p>
            </Box>
            <Box width={[1,1/2]} p={[2,3]}>
              <ContactForm />
            </Box>
          </Flex>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.923286333446!2d4.232245752084813!3d51.862357079595434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44c203cf6aaab%3A0x9efd269d3b9b4a7c!2sVuilvrij.nl!5e0!3m2!1sen!2snl!4v1594326260758!5m2!1sen!2snl"
            width="100%" height="450" frameBorder="0" allowFullScreen={false} aria-hidden={false}
            tabIndex={0} />
        </main>
      <Footer />
    </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {

  return {
    props: {
      hostname: process.env.URL
    },
  }
}
