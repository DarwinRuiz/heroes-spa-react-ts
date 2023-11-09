import { Hero } from '../interfaces/hero.interface';
import { heroes } from '../data/heroes';
import { PublisherHero } from '../enums/publisherHero';

export const getHeroesByPublisher = (publisher: PublisherHero): Hero[] => heroes.filter(hero => hero.publisher === publisher);
