import React, { useState, useEffect } from "react";
import styles from './App.css';
import { FishCardList } from "./components";

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const App = () => {
    const [ liked, setIsLiked ] = useState([]);
    const [ deleted, setDeleted ] = useState([]);
    const [ cards, setCards ] = useState([])

    useEffect(() => {
        fetch("/api/species")
        .then(result => result.json())
        .then(result => setCards(result.slice(0,10).map(x => ({
            id: uuidv4(),
            title: x['Species Name'],
            imgUrl: x['Species Illustration Photo'].src,
            imgAlt: x['Species Illustration Photo'].alt,
            imgTitle: x['Species Illustration Photo'].title,
            isLiked: false

        }))))
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