import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="bg-slate-100 p-4 m-4 rounded">
            <h3 className="text-2xl text-center ">{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;