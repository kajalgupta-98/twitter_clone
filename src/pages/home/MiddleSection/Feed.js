import React from 'react'
import Tweet from './TweetBox'
import HomeNav from '../../../components/homenav/HomeNav'
import Happen from '../../../components/happen/Happen'

export default function Feed() {
  return (
    <>
      <div>
        <HomeNav />
        <Happen />
        <div>
          <Tweet />
        </div>
      </div>

    </>
  )
}
