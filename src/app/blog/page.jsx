import React from 'react'
import styles from "./blog.module.css";
import PostCard from '@/components/postCard/postCard';
import { getPosts } from '@/lib/data';


// Fetch data with an API

// const getData = async () => {

//   const res = await fetch('https://jsonplaceholder.typicode.com/posts',{next : {revalidate : 3600}})

//   if(!res.ok){
//     throw new Error('something went wrong')
//   }

//   return res.json()
// }



const BlogPage = async () => {
  // with API
  // const posts = await getData();

  //without API
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage