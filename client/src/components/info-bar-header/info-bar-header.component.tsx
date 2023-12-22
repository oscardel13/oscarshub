const InfoBarHeader = (props: {hide: () => void}) =>{
    return (
        <div className='flex flex-col justify-center text-center h-60 py-5'>
            <span onClick={props.hide} className='absolute right-[2rem] top-[2rem] text-white lg:hidden text-3xl'>
                &#10006;
            </span>
            <div className='flex justify-center'> 
                <img className='w-24 h-24 rounded-full' src={"https://lh3.googleusercontent.com/a/ACg8ocIVJK-K4PsuRTyVLfagTUr5IkhxpG-O_L2MTsHHnPdi89Y=s96-c"}/>
            </div>
            <br/>
            <div className="text-white">
                <h5>Oscar Delgado</h5>
            </div>
            <div className="text-gray-400">
                <small>Software Engineer</small>
                <br/>
                <small>Full Stack Engineer</small>
            </div>
        </div>
    )
}

export default InfoBarHeader