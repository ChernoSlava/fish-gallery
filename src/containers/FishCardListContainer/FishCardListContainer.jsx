import React, { useContext } from "react";

import { FishCardList } from "@components";
import { FishCardContext } from "@context";

export const FishCardListContainer = () => {
   const {
    state, 
    dispatch
   } = useContext(FishCardContext)
   
   const items = state.cards
        .filter(card => !state.deleted.includes(card.id))
        .map(card => ({ 
            ...card,
             isLiked: state.liked.includes(card.id) }));
    
        const onDelete = (id) => dispatch({ type: 'SET_DELETED', payload: id});
        const onLike = (id) => dispatch({ type: 'SET_LIKED', payload: id});
        
    return <FishCardList items={items} onDelete={onDelete} onLike={onLike}/>
}