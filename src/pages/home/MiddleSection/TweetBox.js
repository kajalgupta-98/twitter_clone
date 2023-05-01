import React from "react";
import style from "./tweet.module.css";
import {FiShare} from 'react-icons/fi'

import { GoVerified } from "react-icons/go";
import{TbChartInfographic} from 'react-icons/tb'
import { AiOutlineHeart, AiFillHeart, AiOutlineRetweet  } from "react-icons/ai";

import Avatar from "@mui/material/Avatar";

import { FaComment } from "react-icons/fa";
export default function Tweet(props) {
  const tweet = props.tweet;

  return (
    <>
      <div className={style.image}>
        <div className={style.avatar}>
          <Avatar alt="Cindy Baker" src="../Images/3.jpg" />
          <span>
            {tweet.tweetedBy.name}
            <GoVerified color="blue" />
          </span>
        </div>
        <div className={style.box}>
          <div className={style.tweet}>
            <p>{tweet.content}</p>

            <img
              onDoubleClick={props.onToggleLike}
              className="img img-fluid-hand"
              src={tweet.image}
              height="250"
              width="500"
              border-radius="2"
            />
          </div>
          <div className={style.icon}>
            <div>
              <FaComment size={25} />
              {tweet.commentCount}
            </div>
            <div >
              <span className={style.reTweet}>
            <AiOutlineRetweet size={25}/>
            </span>
              {tweet.reTweetsCount}

            </div>
            <div>
             
              <span onClick={props.onToggleLike}>
                {tweet.isLiked ? (
                  <AiFillHeart size={25} color="red" />
                ) : (
                  <AiOutlineHeart size={25}/>
                )}
              </span>
              {tweet.likeCount}
            </div>
            <div>
              <TbChartInfographic size={25} />
            </div>
            <div >
              <FiShare size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
