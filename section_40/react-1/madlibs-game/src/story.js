import React from 'react';

function Story({ words }) {
    const { noun, verb, adjective, color } = words;

    const createStory = `Once upon a time, in a land far far away, there was a ${adjective} ${noun} that ${verb} an ${color} kingdom`;

    return (
        <div>
            <h2>Created Story</h2>
            <p>{createStory}</p>
        </div>     
    );
}


export default Story;