import { useState, useEffect } from 'react';
import styles from './paginator.module.css';
import { useDispatch } from "react-redux";
import { setAllTerm } from "@/redux/services/pokeSlice";

const Paginator = ({ offset, disableButton }) => {
    const dispatch = useDispatch();
    
    const [page, setPage] = useState(0);
    const [paginatorNumber, setPaginatorNumber] = useState(1);

    useEffect(() => {
        if (offset === 0) {
            setPage(0);
            setPaginatorNumber(1);
        }
    }, [offset]);

    const handlePrev = () => {
        const offsetValue = page - 10;
        const newPaginatorNumber = paginatorNumber - 1
        if (paginatorNumber !== 1) {
            setPaginatorNumber(newPaginatorNumber);
            setPage(offsetValue);
            dispatch(setAllTerm(offsetValue));
        }
    }

    const handleNext = () => {
        const offsetValue = page + 10;
        const newPaginatorNumber = paginatorNumber + 1
        setPaginatorNumber(newPaginatorNumber);
        setPage(offsetValue);
        dispatch(setAllTerm(offsetValue));
    }

    return (
        <div className={styles.paginatorContainer}>
            <button className={styles.paginatorButtonStyle} onClick={handlePrev} disabled={paginatorNumber === 1 && disableButton}>prev</button>
            <h2>{paginatorNumber}</h2>
            <button className={styles.paginatorButtonStyle} onClick={handleNext} disabled={disableButton}>next</button>
        </div>
    );
};

export default Paginator;
