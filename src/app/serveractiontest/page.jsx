import { addPost } from '@/lib/actions'
import React from 'react'


const ServerActionTestPage = () => {

    const actionInComponenet = async () => {
        'use server';
        console.log('it worksss')
    }

  return (
    <div>
        <form action={addPost}>
        <input type='text' placeholder='title' name='title' />
        <input type='text' placeholder='desc' name='desc'/>
        <input type='text' placeholder='slug' name='slug'/>
        <input type='text' placeholder='userId' name='userId'/>
            <button>Create</button>
        </form> 
    </div>
  )
}

export default ServerActionTestPage