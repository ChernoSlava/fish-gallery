import React, { useContext } from "react";
import { FishCardList } from "../../components";
import { FishCardContext } from "../../context";

export const FishCardListContainer = () => {
   const {
    items, 
    onDelete,
    onLike
   } = useContext(FishCardContext)
   
    return <FishCardList cards={items} onDelete={onDelete} onLike={onLike}/>
}