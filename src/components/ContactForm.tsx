import { Button } from "rebass/styled-components";
import styled, {ThemeProvider} from "styled-components";
import { theme } from "../assets/theme";
import React from "react";
import { TrackClickEvent } from "../pages";

const StyledForm = styled.form`
  label {
    font-size: 0.8rem;
    margin-bottom: 1em;
    display: block;
  }
  input,
  textarea {
    padding: .5em;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #d6d6d6;
    font-size: 1.3rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
  }
  input:focus,
  textarea:focus {
    outline: 1px dotted #d6d6d6;
  }
  .hidden {
    display: none;
  }
`
export default function ContactForm() {
  return (
    <ThemeProvider theme={ theme }>
    <StyledForm name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
      </p>

      <p>
        <label htmlFor="yourname">Uw naam:</label>
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="contact">Uw e-mail of telefoonnummer: </label>{' '}
        <input type="contact" name="contact" id="contact" />
      </p>
      <p>
        <label htmlFor="yourmessage">Bericht / vraag: </label>
        <textarea name="message" rows={5} id="yourmessage"></textarea>
      </p>
      <p>
        <Button onClick={()=>TrackClickEvent('contact-form')} variant='primary' mr={2}>Verzenden</Button>
      </p>
      <style jsx>{`

      `}</style>
    </StyledForm>
    </ThemeProvider>
  )
}
