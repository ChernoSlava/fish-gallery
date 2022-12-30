import React from "react";
import style from './FishCardList.css';
import { FishCard } from '../FishCard';

// {title, imgUrl, imgAlt, imgTitle, onDelete, onLike, isLiked }
export const FishCardList = ({items, onDelete, onLike}) => {
    return (
        <div className={style.FishCardList}>
                {items?.map((card) => 
                    <FishCard 
                        key={card.id}
                        title={card.title}
                        imgUrl={card.imgUrl}
                        imgAlt={card.imgAlt}
                        imgTitle={card.imgTitle}
                        onDelete={onDelete ? () => onDelete?.(card.id) : undefined}
                        onLike={onLike ? () => onLike?.(card.id) : undefined}
                        isLiked={card.isLiked}
                    />
                )}
        </div>
        
    );
}