import React from "react";
import style from './FishCardList.css';
import { FishCard } from '../FishCard';

// {title, imgUrl, imgAlt, imgTitle, onDelete, onLike, isLiked }
export const FishCardList = ({cards, onDelete, onLike}) => {
    return (
        <div className={style.FishCardList}>
                {cards?.map((card) => 
                    <FishCard 
                        key={card.id}
                        title={card.title}
                        imgUrl={card.imgUrl}
                        imgAlt={card.imgAlt}
                        imgTitle={card.imgTitle}
                        onDelete={() => onDelete?.(card.id)}
                        onLike={() => onLike?.(card.id)}
                        isLiked={card.isLiked}
                    />
                )}
        </div>
        
    );
}