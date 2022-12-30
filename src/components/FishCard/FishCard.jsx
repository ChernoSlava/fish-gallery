import React from "react";
import style from "./FishCard.css";

import {DeleteIcon, LikeIcon} from './images';

export const FishCard = ({title, imgUrl, imgAlt, imgTitle, onDelete, onLike, isLiked }) => {
    return (
        <div className={style.FishCard}>
            <div className={style.FishCard__header}>
                <img className={style.FishCard__delete} onClick={onDelete} src={DeleteIcon} alt="Trash" title="Удалить" />
                <LikeIcon className={`${style.FishCard__like} ${isLiked ? style.FishCard__like_liked : ''}`} onClick={onLike} />
            </div>
            <div className={style.FishCard__content}>
                <img className={style.FishCard__image} src={imgUrl} alt={imgAlt} title={imgTitle} />
            </div>
            <div className={style.FishCard__footer}>{title}</div>
        </div>
    );
}