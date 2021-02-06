import React, { useState, useEffect } from 'react';

function Example() {
    const [number, setNumber] = useState(0);

    // Similaire à componentDidMount et componentDidUpdate :  

    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur    
        document.title = `Vous avez cliqué ${number} fois`;
    });

    return (
        <div className="pagesuivante">
            <p>Vous avez cliqué {number} fois</p>
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