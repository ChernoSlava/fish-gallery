import React, { useState } from "react";
import { FishCardList } from "..";

export default {
    title: "Example/FishCardList",
    component: FishCardList,
    argTypes: { onDelete: { action: 'clicked' }, onLike: { action: 'clicked' } },
}

const ListTemplate = ({cards, ...args}) => {
    const [ liked, setIsLiked ] = useState([]);
    const [ deleted, setDeleted ] = useState([]);
    return <FishCardList 
        cards={cards.filter(card => !deleted.includes(card.id)).map(card => ({...card, isLiked: liked.includes(card.id)}))} 
        {...args} 
        onLike={(id) => liked.includes(id) ? setIsLiked(liked.filter(x => x !== id)) : setIsLiked([...liked, id])} 
        onDelete={(id) => setDeleted([...deleted, id])}
        />
}

export const PlayWithList = ListTemplate.bind({});

PlayWithList.args = {
    cards: [
        {
            id: 1,
            title: 'Crimson Jobfish',
            imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Pink_snapper_NB_W_0.png",
            imgAlt: "Pink snapper",
            imgTitle: "Pink snapper",
            isLiked: false,
        },
        {
            id: 2,
            title: 'White Hake',
            imgUrl: "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Hake_White_NB_W_0.png",
            imgAlt: "White Hake",
            imgTitle: "Illustration of white hake",
            isLiked: true
        },
    ],
}