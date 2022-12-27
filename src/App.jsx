import React, { useState, useEffect } from "react";
import styles from './App.css';
import { FishCardList } from "./components";

export const App = () => {
    const [ liked, setIsLiked ] = useState([]);
    const [ deleted, setDeleted ] = useState([]);
    const [ cards, setCards ] = useState([])

    useEffect(() => {
        setCards([
        {
            id: 1,
            title: 'Crimson Jobfish',
            imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Pink_snapper_NB_W_0.png",
            imgAlt: "Pink snapper",
            imgTitle: "Pink snapper",
            isLiked: false,
        },
        {
            id: 2,
            title: 'White Hake',
            imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Hake_White_NB_W_0.png",
            imgAlt: "White Hake",
            imgTitle: "Illustration of white hake",
            isLiked: true
        },
    ])
    }, []) 
    return <>
        <div className={styles.App}>
            <FishCardList 
                cards={cards.filter(card => !deleted.includes(card.id)).map(card => ({...card, isLiked: liked.includes(card.id)}))} 
                onLike={(id) => liked.includes(id) ? setIsLiked(liked.filter(x => x !== id)) : setIsLiked([...liked, id])} 
                onDelete={(id) => setDeleted([...deleted, id])}
            />    
        </div>;
        </>
};