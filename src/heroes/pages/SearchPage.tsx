
import { HeroCard, SearchAlert } from '../components';
import { SearchForm } from '../interfaces/searchForm.interface';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';




export const SearchPage = (): JSX.Element => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q: queryParamHeroName } = queryString.parse(location.search);

    const heroName = queryParamHeroName?.toString() || '';
    const heroes = getHeroesByName(heroName);

    const { searchText, onInputChange } = useForm<SearchForm>({ searchText: heroName });

    const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        navigate(`?q=${searchText.toLowerCase().trim()}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input type="text" value={searchText} onChange={onInputChange} className="form-control" placeholder="Search a hero" name="searchText" autoComplete="off" />
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <SearchAlert heroName={heroName} numberRecordsFound={heroes.length} />

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} hero={hero} />
                        )
                        )
                    }

                </div>
            </div>
        </>
    )
}
