import axios from 'axios';
import React, { Component, useState } from 'react';
import './SearchBox.css';

function SearchBox(props) {
    const [searchLine, setSearchLine] = useState('');

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();

        axios.get(`http://www.omdbapi.com/?s=${searchLine}&apikey=74894545`)
            .then(res => {

                if (!res.data.Search) {


                    alert('axtarisa uygun netice tapilmadi');

                    return;
                }

                const arr = res.data.Search;

                props.setMovies(arr);

            });
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}

export default SearchBox