
export const Card = ({title, issue, description, value, time, creator, image}) => {
    return (
        <div className="single-card">
            <h1>{title}</h1>
            <p>{image}</p>
            <p>{issue}</p>
            <p>{description}</p>
            <p>{value}</p>
            <p>{time}</p>
            <p>{creator}</p>
        </div>
    )
}