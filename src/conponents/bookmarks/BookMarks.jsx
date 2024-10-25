import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";
const BookMarks = ({bookmarks}) => {
   
    return (
        <div className="md:w-1/3 bg-slate-200 ml-4">
            <h2 className="text-3xl text-center font-bold">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
BookMarks.propTypes={
    bookmarks : PropTypes.array
}

export default BookMarks;