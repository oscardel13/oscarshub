const HardSkill = (props: {name: String, percent: number}) =>{
    const { name, percent } = props
    return (
        <div>
            <div className='flex flex-row'>
                <span>{name}</span>
                <div className='ms-auto'>
                    <small>{percent}</small>
                </div>
            </div>
            <div className="w-full bg-[#191923] h-[7px]">
                <div className="bg-[rgb(70,62,105)] h-full transition-all ease-in-out duration-1000 delay-200" style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    )
}

export default HardSkill;