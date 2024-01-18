import { useState } from 'react';

export const MySecondComponent = () =>{

        const [text, setText] = useState("Fabian");

        const handleClick = () => {
            setText("Evelina");
        };

        const html = (
        <div>
            <article>{text}</article>
            <button onClick={ () => { handleClick();}}>Change Name</button>
        </div>
        )

        return <>{html}</>;
    };