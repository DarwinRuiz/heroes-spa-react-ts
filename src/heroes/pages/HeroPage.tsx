import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = (): JSX.Element => {

    const { heroId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroId!), [heroId]);


    if (!hero) return <Navigate to="/" />;

    const heroUrl = `/assets/heroes/${hero.id}.jpg`;


    const onNavigateBack = (): void => {
        navigate(-1);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img className='img-thumbnail animate__animated animate__fadeInLeft' src={heroUrl} alt={hero.superhero} />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button className="btn btn-primary" onClick={onNavigateBack}>
                    {'<- back'}
                </button>
            </div>
        </div>
    )
}
