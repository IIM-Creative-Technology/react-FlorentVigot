import React, { useState, useEffect } from 'react';


function Score() {
    // on initialise le score à 0
    const [score, setScore] = useState(0);

    useEffect((data) => {
        var réponse = 0;
        data.array.map(data.réponse, index => {
            if (data.reponse === data.réponse) {
                réponse++
            }

        });
        setScore(réponse)

    }, []);

    return (
        <div>
            <p>Vous score est de {score} bonnes réponses</p>
        </div>
    )
}

export default Score