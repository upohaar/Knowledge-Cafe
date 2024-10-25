import PropTypes from "prop-types";

const Blog = ({blog,handleAddBookmark}) => {
    const {title,cover,author ,posted_date, hashtags,author_img, reading_time} =blog;
    return (
        <div className="mb-8">
            {/* <img src={cover} alt={`cover picture of the title ${title}`} /> */}
            <img className="w-2/3" src={author_img} alt="" />
            <div className="flex justify-between ">
            <div className="flex">
               
                <div className="ml-6">
                    <h3 className="text-2xl">{author}</h3>
                    <p className="text-sm">{posted_date}</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 ">
                <span className="text-sm">{reading_time}</span>
                <button onClick={()=>handleAddBookmark (blog)} className="text-xl mx-4 px-4 rounded-md border">BookMark</button>
            </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                   hashtags.map((hash,idx)=><span className="text-xl " key={idx}><a href=""></a> {hash}</span>)
                }
            </p>
           
        </div>
        
        
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired
    
}
export default Blog;