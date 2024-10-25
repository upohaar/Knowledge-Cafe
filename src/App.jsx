import { useState } from 'react'
import './App.css'
import Blogs from './conponents/blogs/blogs'
import BookMarks from './conponents/bookmarks/BookMarks'
import HeaderFile from './conponents/header/HeaderFile'
function App() {
  const [bookmarks,setBookmarks]=useState([])
  const handleAddBookmark= blog=>{
   const newBookmarks = [...bookmarks,blog]
   setBookmarks(newBookmarks);
  }
  return (
    <>
    <HeaderFile></HeaderFile>
    <div className='md:flex  max-w-7xl mx-auto'>
    <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
    <BookMarks bookmarks={bookmarks}></BookMarks>
    </div>
    </>
  )
}

export default App
