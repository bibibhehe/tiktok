import {useEffect, useState} from 'react'

const taps = ['posts','comments','albums']
function Content(){
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')
    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then (res => res.json())
        .then (posts => {
            setPosts (posts)
        }) 
    },[])
    return (
      <div>
        {
          taps.map (t => (
            <button 
            key = {t}
            stype={type ===t ?{color :'#fff',
            background_color:'#333'
            }:{}}
            onClick={()=>setType(t)}
            >
                 {t}
            </button>
          ))  
        }
        <input
           value={title}
           onChange = {e =>{setTitle(e.target.value)}}
        />
        <ul>
            {posts.map(e =>(
                <li key = {e.id}>
                    {e.title}
                </li>
            ))}
        </ul>
      </div>
    )
}
export default Content