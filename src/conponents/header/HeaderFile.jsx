import profile from '../../assets/images/profile.png'
const HeaderFile = () => {
    return (
        <div className='flex justify-between items-center border-b-2 p-4 mx-4'>
            <h1 className="text-4xl bold ">knowledge cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default HeaderFile;