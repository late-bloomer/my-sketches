import React from 'react';
import './CardItem.css'
// import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        {/* <Link className='cards__item__link' to={props.path}> */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {props.type !== "video/mp4" ? <img
              className='cards__item__img'
              alt='DRAWING DREAMS'
              src={props.src}
            />:
            <video className='cards__item__video' controls>
              <source src={props.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>}
          </figure>
          <div className={ props.small ? 'cards__item__info__small' : 'cards__item__info'}>
            <div className={props.small ? 'cards__item__text__small' : 'cards__item__text'}>
              "{props.text}"<span> - {props.secondText}</span>
            </div>
          </div>
        {/* </Link> */}
      </li>
    </>
  );
}

export default CardItem;