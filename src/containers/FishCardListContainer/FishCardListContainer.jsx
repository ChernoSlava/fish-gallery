import React, { useContext } from "react";

import { FishCardList } from "@components";
import { FishCardContext } from "@context";

export const FishCardListContainer = () => {
   const {
    cards, 
    deleted,
    liked,
    setDeleted,
    setLiked
   } = useContext(FishCardContext)
   
   const items = cards
        .filter(card => !deleted.includes(card.id))
        .map(card => ({ 
            ...card,
             isLiked: liked.includes(card.id) }));
    
        const onDelete = (id) => setDeleted([...deleted, id]);
        const onLike = (id) => liked.includes(id)
                    ? setLiked(liked.filter(x => x !== id)) : 
                    setLiked([...liked, id]);
    return <FishCardList items={items} onDelete={onDelete} onLike={onLike}/>
}