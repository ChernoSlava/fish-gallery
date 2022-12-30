import React
 from "react";
export const FishCardContextInitialValues = {
    items: [],
    onDelete: () => {},
    onLike: () => {}
}
export const FishCardContext = React.createContext(FishCardContextInitialValues);