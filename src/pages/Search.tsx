// @ts-nocheck

import React, { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { debounce } from "../utils/debounce";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonsData";
import { getPokemonsData } from "../app/reducers/getPokemonsData";

import PokemonCardGrid from "../components/PokemonCardGrid";

function Search() {
  const handleChange = debounce((value: string) => getPokemon(value), 300);

  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);


  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemons = allPokemon.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonsData(pokemons));
    } else {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonsData(randomPokemonsId));
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          className="pokemon-searchbar"
          placeholder="Search Pokemon"
        />
        <PokemonCardGrid pokemons={randomPokemons} />
      </div>
    </>
  );
}

export default Wrapper(Search);