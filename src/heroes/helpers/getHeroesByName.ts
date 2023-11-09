import { Hero } from '../interfaces/hero.interface';
import { heroes } from '../data/heroes';

export const getHeroesByName = (heroName: string): Hero[] => {
    if (heroName.trim().length === 0) return [];

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(heroName.toLowerCase()));
}
