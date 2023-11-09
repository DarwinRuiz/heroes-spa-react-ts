import { Hero } from '../interfaces/hero.interface';
import { heroes } from '../data/heroes';

export const getHeroById = (heroId: string): Hero | undefined => heroes.find(hero => hero.id === heroId);
