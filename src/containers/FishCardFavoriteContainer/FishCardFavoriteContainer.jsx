import React, { useContext } from "react";

import { FishCardList } from "@components";
import { FishCardContext } from "@context";

export const FishCardFavoriteContainer = () => {
   const {
    cards, 
    deleted,
    liked,
   } = useContext(FishCardContext)
   
   const items = cards
        .filter(card => !deleted.includes(card.id) && liked.includes(card.id));
        

    return <FishCardList items={items}/>
}