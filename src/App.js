/*

Accordion Example using React

Component Structure: 

Begin by defining the structure of your accordion component. 
You'll need a wrapper component that will hold the different accordion items. 
Decide on the props it will accept, such as a title and an array of items.

Accordion Items: 

Plan how each accordion item will be structured. 
Consider the content of each item and what information it needs to display. 
You may want to create a separate component for the individual accordion items to keep 
your code organized and reusable.

State Management: 

Decide how you'll manage the state of the accordion, such as which items are expanded or collapsed. 
You can use React state in this case since the requirement is not complex.

User Interaction: 

Implement user interaction features, such as clicking an item to expand or collapse it. 
You'll need event handling to toggle the state of each accordion item.

Flexibility and Reusability: 

Design your accordion component to be flexible and easy to reuse. 
Think about customization options, like allowing users to change the styling, icons, or behavior. 
Also, consider making it compatible with different content types and screen sizes.

By breaking down concepts you can systematically plan and implement your custom accordion component in React. 
This approach helps ensure that your component is well-structured, maintainable, and 
adaptable to various use cases.

*/


import { Accordion } from './components/Accordion';
import { Container, ContainerSection } from './styled/styled.container';

function App() {

  const accordionItems = [
    {
      title: 'Breaking down concepts',
      content: 'Breaking down concepts is a critical skill in software development. It involves taking a complex problem or idea and dividing it into smaller, more manageable parts. This approach makes it easier to understand the problem, identify the steps needed to solve it, and address each part systematically. Think of it like solving a puzzle – you start with individual pieces and work out how they fit together to form the bigger picture. This method is not only effective in coding but also in project planning and troubleshooting.'
    },
    {
      title: 'Code Modularity',
      content: "Code modularity refers to the practice of designing software components that can be reused and maintained independently. It's like building with Lego blocks – each block is a module that performs a specific function and can be combined with others to create larger structures. In software development, modular code allows for easier debugging, updating, and collaboration. It enhances code readability and makes the development process more efficient. Modules can be developed, tested, and debugged separately, reducing complexity and improving code quality."
    },
    {
      title: 'Code Reusability',
      content: "Code reusability is the practice of writing code that can be used multiple times in different parts of an application or even in different projects. It's akin to using a template for similar tasks – once you have a well-designed template, you can reuse it wherever needed with minimal modifications. Reusable code saves time and effort, promotes consistency, and reduces the chances of errors. In React, this is often achieved through reusable components, which help in building scalable and maintainable applications. By reusing code, developers can focus on creating new features rather than reinventing the wheel."
    },
  ]

  return (
    // styled component div element wrapper for app
    <Container> 
      {/* styled component div element to create a centered container */}
      <ContainerSection> 
        {/* Reusable Accordion Component */}
        <Accordion title={"Key Development Concepts"} items={accordionItems} />
      </ContainerSection>
    </Container>
  );
}

export default App;
