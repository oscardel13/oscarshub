import oscarResume from '../../assets/OscarsResume.pdf'

const InfoBarCV = () => {
    return (
        <div className="flex justify-center items-center text-md">
            <a href={oscarResume} download="OscarsResume" className="text-gray-400 no-underline">&#10233; DOWNLOAD CV &#10232;</a>
        </div>
    )
}

export default InfoBarCV
