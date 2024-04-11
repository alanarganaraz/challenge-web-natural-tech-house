'use client';

import styles from './page.module.css';
import { useGetAllPokemonQuery } from '@/redux/services/pokeApi';
import PokemonCard from '@/components/pokemon-card';
import { useSelector } from 'react-redux';
import Filter from '@/components/filter';
import Paginator from '@/components/paginator';
import { ERROR_TYPE } from '@/common/constants';

export default function Home() {
  const typeTerm = useSelector(state => state.pokemon.typeTerm);
  const nameTerm = useSelector(state => state.pokemon.nameTerm);
  const offset = useSelector(state => state.pokemon.offset);
  const { data, isFetching, error } = useGetAllPokemonQuery({
    nameTerm,
    typeTerm,
    offset,
  });

  const pokemonList = () => {
    const pokemonList = data.map((pokemonData, index) => (
      <PokemonCard key={index} data={pokemonData} />
    ));

    return pokemonList;
  };

  const returnData = () => {
    let err = ERROR_TYPE.DEFAULT_ERROR;
    if (isFetching) {
      return (
        <div className={styles.loadingContent}>
          <div className={styles.loadingText}>Loading...</div>
        </div>
      );
    }
    if (error) {
      if (error?.status === 404) {
        err = ERROR_TYPE.NOT_FOUND;
      }

      return (
        <div className={styles.loadingContent}>
          <div className={styles.loadingText}>{err}</div>
        </div>
      );
    }
    if (data) {
      return pokemonList();
    }

    return (
      <div className={styles.loadingContent}>
        <div className={styles.loadingText}>{err}</div>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.filterContainer}>
        <Filter disabledButton={isFetching} />
      </div>
      {typeTerm === '' && nameTerm === '' && (
        <div className={styles.paginator}>
          <Paginator disableButton={isFetching} offset={offset} />
        </div>
      )}
      <div className={styles.homeContainer}>
        <div className={styles.pokeCardContainer}>{returnData()}</div>
      </div>
    </main>
  );
}
