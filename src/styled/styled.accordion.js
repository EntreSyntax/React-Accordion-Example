// Import the "styled" function from the "styled-components" library
import styled from "styled-components";

// Create a styled component named "AccordionContainer" that represents a <div> element
export const AccordionContainer = styled.div`
    // Set the width of the container to take up the full available width
    width: 100%;

    // Limit the maximum width of the container to 600 pixels
    max-width: 600px;

    // Use flexbox to arrange the contents of the container vertically (top to bottom)
    display: flex;
    flex-direction: column;
`;

// Create a styled component named "AccordionItemCard" that represents a <div> element
export const AccordionItemCard = styled.div`
    // Set the width of the card to take up the full available width
    width: 100%;

    // Use flexbox to arrange the contents of the card vertically (top to bottom)
    display: flex;
    flex-direction: column;

    // Center the items both horizontally and vertically within the card
    align-items: center;

    // Add a small margin at the bottom of the card for spacing
    margin-bottom: 0.5rem;

    // Add rounded corners to the card for a visual effect
    border-radius: 5px;

    // Hide any content that overflows the card
    overflow: hidden;

    // Apply a subtle shadow to the card for depth
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    // Change the cursor to a pointer when hovering over the card
    cursor: pointer;
`;

// Create a styled component named "AccordionItemTitle" that represents a <div> element
export const AccordionItemTitle = styled.div`
    // Set the width of the title to take up the full available width
    width: 100%;

    // Add padding around the title for spacing
    padding: 1rem;

    // Use flexbox to align the items within the title horizontally
    display: flex;
    align-items: center;

    // Disable text selection for the title
    user-select: none;

    // Create space between items within the title
    justify-content: space-between;

    // Set the font size, weight, and letter spacing of the title for styling
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1.1px;

    // Set a background color for the title with slight transparency
    background-color: rgba(255, 255, 255, 0.1);

    // Set the text color of the title to white
    color: white;

    // Change the background color when hovering over the title
    &:hover {
        background-color: #3c4043;
    }
`;

// Create a styled component named "AccordionItemContent" that represents a <div> element
export const AccordionItemContent = styled.div`
    // Set the width of the content to take up the full available width
    width: 100%;

    // Add padding around the content for spacing
    padding: 1rem;

    // Set the font size and weight of the content for styling
    font-size: 0.9rem;
    font-weight: 500;

    // Set the line height of the content for better readability
    line-height: 1.5;

    // Set the text color of the content with slight transparency
    color: rgba(255, 255, 255, 0.8);

    // Hide the content if it's not active, using the "isActive" prop
    display: ${({ isActive }) => (isActive ? "block" : "none")};
`;
