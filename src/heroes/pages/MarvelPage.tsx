import { HeroList } from "../components"
import { PublisherHero } from "../enums/publisherHero"

export const MarvelPage = (): JSX.Element => {
    return (
        <>
            <h1>Marvel Comics</h1>
            <hr />
            <HeroList publisher={PublisherHero.MARVEL} />
        </>
    )
}
