
import {
    Accordion,
    AccordionContainer,
    AccordionContent,
    AccordionIcon,
    AccordionPanel,
    AccordionTitle,
  } from 'keep-react'
  
  export const AccordionPregFrec = () => {
    return (
      <Accordion flush={true}>
        <AccordionPanel>
          <AccordionContainer>
            <AccordionTitle>Q ¿Quienes somos?</AccordionTitle>
            <AccordionIcon />
          </AccordionContainer>
          <AccordionContent>
         En Matematica Torcuato somos un grupo de apasionados por la enseñanza 
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionContainer>
            <AccordionTitle>Q. How do I customize the color scheme of components?</AccordionTitle>
            <AccordionIcon />
          </AccordionContainer>
          <AccordionContent>
            The Keep React offers a range of color variants for components. To customize the color scheme, you can use the
            available color options such as gray,info,error,warning and success. Simply set the desired color variant as a
            prop when using the component, and it will reflect the chosen color.
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionContainer>
            <AccordionTitle>Q. Can I add additional content to notifications?</AccordionTitle>
            <AccordionIcon />
          </AccordionContainer>
          <AccordionContent>
            Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
            message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
            or icons, within the notification to provide users with more context and options.
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    )
  }
  
  