import { useState } from 'react';
import styles from './filter.module.css';
import { useDispatch } from 'react-redux';
import { setNameTerm, setTypeTerm } from '@/redux/services/pokeSlice';
import { TYPE_DATA } from '@/common/constants';


const Filter = ({ disableButton }) => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermSelect, setSearchTermSelect] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setNameTerm(searchTerm));
  };

  const handleChangeSelect = (event) => {
    setSearchTermSelect(event.target.value);
    dispatch(setTypeTerm(event.target.value));
  };

  return (
    <div className={styles.componentContainer}>
      <div className={styles.filterInput}>
        <input
          type="text"
          placeholder="Filtrar por nombre..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button disabled={disableButton} onClick={handleSearch}>Buscar</button>
      </div>
      <div className={styles.filterSelect}>
        <select disabled={disableButton} value={searchTermSelect} onChange={handleChangeSelect}>
          <option value="">Seleccione un tipo</option>
          {TYPE_DATA.map(type => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
