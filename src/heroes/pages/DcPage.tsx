import { HeroList } from '../components';
import { PublisherHero } from '../enums/publisherHero';

export const DcPage = (): JSX.Element => {
    return (
        <>
            <h1>DC Comics</h1>
            <hr />
            <HeroList publisher={PublisherHero.DC} />
        </>
    )
}
