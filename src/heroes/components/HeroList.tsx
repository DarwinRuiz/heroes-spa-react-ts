import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from '.';
import { PublisherHero } from '../enums/publisherHero';
import { useMemo } from 'react';


interface Props {
    publisher: PublisherHero
}

export const HeroList = ({ publisher }: Props): JSX.Element => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row g-3">
            {
                heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)
            }
        </div>
    )
}
