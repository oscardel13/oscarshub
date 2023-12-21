type ResumeCardType = {
    title: string,
    subtitle: string,
    description: string,
    dates: string,
}

const ResumeCard = (props: ResumeCardType) => {
    const { title, subtitle, description, dates } = props;
    return (
        <div className="flex flex-col flex-wrap bg-[rgba(37,37,50,0.98)] border-1 border-gray-900 border-solid p-3">
            <h5 className="text-[wheat]">{title}</h5>
            <h6 className="text-gray-400">{subtitle}</h6>
            <p className="text-white">{description}</p>
            <span className="text-gray-500">{dates}</span>
        </div>
    )
}

export default ResumeCard;