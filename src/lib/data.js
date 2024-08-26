import {connectToDb} from './utils'
import { Post, User } from "./models";
// const users = [
//     {id : 1 , name : 'Adan'},
//     {id : 2, name : 'Ali'}
// ]


// const posts = [
//     {id : 1, title : 'How to live life', body : '....', userId : 1},
//     {id : 2, title : 'How to live Wife', body : '....', userId : 2},
//     {id : 3, title : 'How to live Knife', body : '....', userId : 3},
//     {id : 4, title : 'How to live Slice', body : '....', userId : 4},
// ]



export const getPosts = async () => {
  

    try{
        connectToDb()
        const posts = await Post.find();
        return posts
    }catch(error){
        console.log(error);
        throw new Error('Failed to fetch posts');
    }

}

export const getPost = async (slug) => {

    try{
        connectToDb()
        const post = await Post.findOne({slug});
        return post
    }catch(error){
        console.log(error);
        throw new Error('Failed to fetch post');
    }

}



export const getUser = async (id) => {

    try{
        connectToDb()
        const user = await User.findById(id);
        return user
    }catch(error){
        console.log(error);
        throw new Error('Failed to fetch user');
    }


}