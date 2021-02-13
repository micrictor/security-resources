import React from 'react';
import GridList from '@material-ui/core/GridList'
import NewsCard from './NewsCard'

import ctiCards from '../assets/cards'

export default function CardGrid(props) {
    const { spacing, direction } = props;
    const [cards, setCards] = React.useState(ctiCards);

    const handleUndoDeleteElement = card => {
        let tempCards = cards;
        tempCards.push(card);
        tempCards.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (dateA > dateB) {
                return -1;
            }
            if (dateA < dateB) {
                return 1;
            }
            return 0;
        });
        setCards(tempCards);
    }

    // Needed to avoid race condition on renders for multiple undos in-flight
    const getCards = () => cards

    return (
        <GridList 
            cellHeight={200}
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
                        undoDelete={() => handleUndoDeleteElement(entry)}
                        onDelete = {() => setCards(getCards().filter((card) => card.id !== entry.id))}
                        key={entry.id}  
                    />
                )
            })}

        </GridList>
    )
}