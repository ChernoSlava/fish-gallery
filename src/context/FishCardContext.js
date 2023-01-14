import React from "react";

export const FishCardContextInitialValues = {
    state: {
        liked: [],
        deleted: [],
        cards: [],
        currentTab: 1
    },
    dispatch: () => {},

}
export const FishCardContext = React.createContext(FishCardContextInitialValues);