import React, { useState, useEffect, useReducer } from "react";
import styles from './App.css';
import { Tabs } from "./components";
import { FishCardListContainer } from "./containers";
import { FishCardContext } from "./context";
import { FishCardFavoriteContainer } from "./containers";

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
const FishCardReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_LIKED': {
            return {
                ...state,
                liked: state.liked.includes(payload) ?
                    state.liked.filter(x => x !== id) :
                    [...state.liked, payload]
                
            };
        }
        case 'SET_DELETED': {
            return {
                ...state,
                deleted: [...state.deleted, payload]
            };
        }
        case 'SET_CARDS': {
            return {
                ...state,
                cards: payload
            }
        }
        default: {
            return state;
        }
    }
}
const InitialFishCards = {
        liked: [],
        deleted: [],
        cards: [],
}
export const App = () => {
    const [state, dispatch ] = useReducer(FishCardReducer, InitialFishCards);
    const [ currentTab, setCurrentTab ] = useState(1);

    useEffect(() => {
            fetch("/api/species")
                .then(result => result.json())
                .then(result => dispatch({ type: 'SET_CARDS', payload: result.slice(0, 10).map(x => ({
                    id: uuidv4(),
                    title: x['Species Name'],
                    imgUrl: x['Species Illustration Photo'].src,
                    imgAlt: x['Species Illustration Photo'].alt,
                    imgTitle: x['Species Illustration Photo'].title,
                    isLiked: false
                }))}))
        }, [])

    return <FishCardContext.Provider value={{
                state,
                dispatch
            }}>
                <div className={styles.App}>
                    <Tabs items={[{
                            id:1,
                            title: 'Рыбы'
                        },
                        {
                            id:2,
                            title: 'Избранное'
                        }]}
                            defaultTab={1}
                            onSelect={(id) => setCurrentTab(id)}
                />  
                {currentTab === 1 && <FishCardListContainer />}
                {currentTab === 2 && <FishCardFavoriteContainer/>}
                    
                </div>
            </FishCardContext.Provider>
}
