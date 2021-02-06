import React from 'react';
import Grid from '@material-ui/core/Grid'
import NewsCard from './NewsCard'

import ctiCards from '../assets/cards'

export default function CardGrid(props) {
    const { spacing, direction } = props;
    const [cards, setCards] = React.useState(ctiCards);

    const handleDeleteElement = element => {
        const newList = cards.filter((card) => card.id !== element.id)
        setCards(newList)
    }

    return (
        <Grid container
            spacing={spacing || 1}
            direction={direction || "row"}
        >
            {cards.map((entry) => {
                return (
                    <NewsCard
                        title={entry.description || `News story ${entry.id}`}
                        label={entry.notes}
                        pressReleaseUrl={entry.govRelease}
                        fullDocUrl={entry.fullDoc}
                        onDelete={() => handleDeleteElement(entry)}
                        key={entry.id}
                    />
                )
            })}

        </Grid>
    )
}