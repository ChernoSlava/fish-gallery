import React from "react";
export const FishCardContextInitialValues = {
    liked: [],
    deleted: [],
    cards: [],
    setDeleted: () => {},
    setLiked: () => {}
}
export const FishCardContext = React.createContext(FishCardContextInitialValues);