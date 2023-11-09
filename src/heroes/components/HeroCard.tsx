import { Link } from 'react-router-dom';
import { Hero } from '../interfaces/hero.interface'

interface Props {
    hero: Hero;
}

export const HeroCard = ({ hero }: Props): JSX.Element => {

    const heroUrl = `/assets/heroes/${hero.id}.jpg`;

    return (
        <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 col-12 animate__animated animate__fadeIn'>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroUrl} alt={hero.superhero} className='card-img' height={'100%'} width={'100%'} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{hero.superhero}</h5>
                            <p className='card-text'>{hero.alter_ego}</p>

                            {(hero.alter_ego !== hero.characters) ?? (<p>{hero.characters}</p>)}

                            <p className='card-text'>
                                <small className='text-muted'>{hero.first_appearance}</small>
                            </p>

                            <Link to={`/hero/${hero.id}`} className="btn btn-primary">More info...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
