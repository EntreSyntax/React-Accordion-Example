import React, { useState } from "react";
import { AccordionContainer, AccordionItemCard, AccordionItemContent, AccordionItemTitle } from "../styled/styled.accordion";
import { Text } from "../styled/styled.container";

// Custom reusable accordion component that accepts a title and an array of items as props
export const Accordion = ({ title, items }) => {
    
    return (
        // Styled component div element for the accordion container
        <AccordionContainer>
            
            {/* styled component that allows you to customize the weight and bottom margin */}
            <Text weight={700} mb={"15px"}>🚀 {title} ➡</Text>

            {/* Map through the items array and render an AccordionItem for each item */}
            {items.map((item, index) => (
                // Accordion item component to display each accordion item
                <AccordionItem
                    // The key prop is required when mapping through an array in React to help with 
                    // rendering and performance
                    key={index} 
                    index={index+1}
                    item={item} // Pass in the item object to the AccordionItem component
                />
            ))}
        </AccordionContainer>
    )

}


// Custom accordion item component that takes in an index and an item object
const AccordionItem = ({ index, item }) => {
    const { title, content } = item; {/* destructure the item object to get the title and content */}

    {/* state to keep track of whether the accordion item should be expanded or collapsed */}
    const [isActive, setIsActive] = useState(false); 

    // function to toggle the accordion item using state
    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        // styled component div element
        <AccordionItemCard>

            {/* styled component div element with an onClick handler to call toggleAccordion */}
            <AccordionItemTitle onClick={toggleAccordion}>
                {index}. {title}
                <span>
                    {isActive ? '-' : '+'}
                </span>
            </AccordionItemTitle>
            
            {/* styled component div element with an isActive prop to determine whether to display the content */}
            <AccordionItemContent isActive={isActive}>
                {content}
            </AccordionItemContent>

        </AccordionItemCard>
    )
}