import styled from 'styled-components';

// Create a styled component named "Container" that represents a <div> element
export const Container = styled.div`
    // Set the width of the container to take up the full available width
    width: 100%;

    // Ensure that the container has a minimum height equal to the full viewport height
    min-height: 100vh;

    // Add padding of 20 pixels around the content inside the container
    padding: 20px;

    // Set the background color of the container to a dark shade (#202124)
    background-color: #202124;

    // Set the text color inside the container to white
    color: white;

    // Use flexbox to arrange the contents of the container
    display: flex;
`


// Create a styled component named "ContainerSection" that represents a <div> element
export const ContainerSection = styled.div`
    display: flex;
    // Use flexbox to arrange the contents of the container vertically (top to bottom)
    flex-direction: column;

    // Center the items both horizontally and vertically within the container
    align-items: center;
    justify-content: center;

    // Set the width of the container to take up the full available width
    width: 100%;
`

export const LogoText = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
`

// Create a styled component named "Text" that represents a <p> (paragraph) element
export const Text = styled.p`
    // Use flexbox to control the positioning of the text
    display: flex;

    // Align the text to the start (left) of its container
    align-self: flex-start;

    // Set the font size of the text to 1.5rem (1.5 times the default font size)
    font-size: 1.5rem;

    // Set the font weight of the text to either the provided "weight" prop or 500 if not provided
    font-weight: ${({ weight }) => weight ? weight : 500};

    // Remove any margin (spacing) around the text
    margin: 0;

    // Add margin at the bottom of the text, using the "mb" prop if provided, or 0 if not
    margin-bottom: ${({ mb }) => mb ? mb : 0};

    // Remove any padding (inner spacing) around the text
    padding: 0;
`
