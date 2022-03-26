import React from 'react';
import './Bonus.css';

const Bonus = () => {
    return (
        <div className='QnA'>
            <div>
                <h2>How does react work?</h2>
                <h5>- React is a JavaScript-based UI development library. React works unidirectionally in declarative code. This means each component and state is executed in order from top to bottom. Component is nothing but the way information is displayed and these are reusable. In an event of data modification, React adequately renders and updates just the right      components. It creates a basic view for each application state. This feature improves the readability of the code and makes debugging easier.The whole process can be thought as a component tree. In summary, the app builds/rebuilds the component tree in Virtual DOM. This then runs diffing algorithm to compare the previous created component tree with the new one and does reconcillation.</h5>
            </div>

            <div>
                <h2>What's the difference between props and state?</h2>
                <h5>- There are quite a few differences between the two. Such as props allow us to pass data from one component to other components as an argument but state holds information about the components. Props are immutable but state isn't. Props can be accessed by the child component but state cannot be. Stateless component can have props but stateless components cannot have state. Props are read only but state can be asynchronous. Props are external and controlled by whatever renders the component whereas state is internal and controlled by the React Component itself. Props are used to communicate between components but states can be used for rendering dynamic changes with the component.</h5>
            </div>
        </div>
    );
};

export default Bonus;