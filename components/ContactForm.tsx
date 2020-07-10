import { Button } from "rebass/styled-components";
import styled from "styled-components";

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
`

export default function ContactForm() {
  return (
    <StyledForm name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">Uw naam:</label>
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">Uw a-mail: </label>{' '}
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Bericht / vraag: </label>
        <textarea name="message" rows={5} id="yourmessage"></textarea>
      </p>
      <p>
        <Button variant='primary' mr={2}>Verzenden</Button>
      </p>
      <style jsx>{`

      `}</style>
    </StyledForm>
  )
}
