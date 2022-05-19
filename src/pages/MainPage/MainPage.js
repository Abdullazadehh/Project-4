import React, { useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

function MainPage() {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox setMovies={setMovies} />
                    </div>
                    <div className="main-page__movies">
                        <Movies movies={movies} favorites={favorites} setFavorites={setFavorites} />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites favorites={favorites} setFavorites={setFavorites} />
                </aside>
            </main>
        </div>
    );
}

export default MainPage