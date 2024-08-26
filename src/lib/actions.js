import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
"use server"
// const title = formData.get('title')
// const desc = formData.get('desc')
// const slug = formData.get('slug')
// const userId = formData.get('userId')

const {title,desc,slug,userId} = Object.fromEntries(formData);

try{
    connectToDb();
    const newPost = new Post({
        title,
        desc,
        slug,
        userId
    })

    await newPost.save();
    revalidatePath('/blog')

}catch(error){
    console.log(error);
    return {error : 'something went wrong'}
}
 
console.log(title,desc,slug,userId)
}