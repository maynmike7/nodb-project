import React from 'react';
import Select from './Select';

const Selection = props => {
    const mappedCharacters = props.selectedCharacters.map((character, i) => (
        <Select 
            key={i}
            character={character}
            teamFN={props.teamFN}
            unselectFN={props.unselectFN}/>
    ))

    return(
        <div>
            <div className='characterFlex'>
                {mappedCharacters}
            </div>
        </div>
    )
}

export default Selection;