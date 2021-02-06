import React, { useState } from 'react';

function Example() {
    const [number, setNumber] = useState(0);

    // Similaire à componentDidMount et componentDidUpdate :  

    return (
        <div className="pagesuivante">
            <div className="btn__wave">
                <button onClick={() => setNumber(number + 1)} className="btn__wrapper">
                    <div className="btn__label">
                        Question suivante
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Example