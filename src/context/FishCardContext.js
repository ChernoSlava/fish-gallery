import React from "react";

export const FishCardContextInitialValues = {
    state: {
        liked: [],
        deleted: [],
        cards: [],
    },
    dispatch: () => {},
}
export const FishCardContext = React.createContext(FishCardContextInitialValues);