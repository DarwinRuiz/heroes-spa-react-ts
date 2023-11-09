import { Navigate, Route, Routes } from 'react-router-dom';

import { MarvelPage, DcPage, SearchPage, HeroPage } from '..';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />}></Route>
                    <Route path="dc" element={<DcPage />}></Route>
                    <Route path="search" element={<SearchPage />}></Route>
                    <Route path="hero/:heroId" element={<HeroPage />}></Route>
                    <Route path="/" element={<Navigate to="/marvel" />}></Route>
                </Routes>
            </div>
        </>
    )
}
