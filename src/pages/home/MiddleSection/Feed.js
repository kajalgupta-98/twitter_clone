import React from "react";
import Tweet from "./TweetBox";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tweetAtom } from "../../../Recoil/tweets";
import HomeNav from "../../../components/homenav/HomeNav";

export default function Feed() {
  const tweets = useRecoilValue(tweetAtom);
  const setTweets = useSetRecoilState(tweetAtom);

  function toggleLike(index) {
    const tweet = { ...tweets[index] };
    const updated = [...tweets];
    tweet.isLiked = !tweet.isLiked;
    tweet.isLiked ? tweet.likeCount++ : tweet.likeCount--;
    updated[index] = tweet;
    setTweets(updated);
  }

  return (
    <>
    <div>
      
     <HomeNav/>
        

        <div>
          {tweets.map((tweet, index) => (
            <Tweet
              onToggleLike={() => toggleLike(index)}
              key={tweet.id}
              tweet={tweet}
            />
          ))}
        </div>
      </div>
      
    </>
  );
}
