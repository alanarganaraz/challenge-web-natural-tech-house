import { useState } from 'react';
import styles from './pokemon.module.css';
import Image from 'next/image';

function PokemonCard({ data }) {
  const [open, setOpen] = useState(false);
  const typeString = data.type.map((type, index) => {
    const typeClass = styles[type] || '';
    return (
      <div key={index} className={`${styles.pokemonType} ${typeClass}`}>
        <h5>{type}</h5>
      </div>
    );
  });

  const separatedAbilities = data.abilities.map(data => {
    return <li>{data}</li>;
  });

  const stats = {
    attack: data?.stats?.attack,
    defense: data?.stats?.defense,
    hp: data?.stats?.hp,
    speed: data?.stats?.speed,
  };

  const finalStats = () => {
    return (
      <div>
        <h5>Abilities: {separatedAbilities}</h5>
        <h5>Height: {data.height}</h5>
        <h5>Weight: {data.weight}</h5>
        <h5>
          Stats:{' '}
          {Object.entries(stats).map(([statName, statValue]) => (
            <li key={statName}>
              {statName}: {statValue}
            </li>
          ))}
        </h5>
      </div>
    );
  };
  return (
    <div className={styles.pokemonCard}>
      <div className={styles.pokemonImage}>
        {open ? (
          finalStats()
        ) : (
          <Image
            src={data.image}
            alt="Bulbasaur"
            width={140}
            height={140}
            priority
          />
        )}
      </div>
      <div className={styles.nameAndIdContainer}>
        <h2>{data.name}</h2>
        <h3>#{data.id}</h3>
      </div>
      <div>
        <button className={styles.buttonDetails} onClick={() => setOpen(!open)}>
          {open ? 'Hide Stats' : 'Show Stats'}
        </button>
      </div>
      <div className={styles.pokemonTypeContainer}>{typeString}</div>
    </div>
  );
}

export default PokemonCard;
