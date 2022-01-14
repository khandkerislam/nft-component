import './card.css';

export const Card = ({title, issue, description, value, time, creator, image}) => {
    return (
        <div className="single-card">
            <article className="single-card__main-image">
                <img 
                    src="./assets/images/image-equilibrium.jpg" 
                    alt=""
                />
                <div>
                    <img src="./assets/images/icon-view.svg" alt="" />
                </div>
            </article>
            <article>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                    <li>
                        <img 
                            src="./assets/images/icon-ethereum.svg" 
                            alt=""
                        />{`${value} ETH`}
                    </li>
                    <li>
                        <img
                            src="./assets/images/icon-clock.svg"
                            alt=""
                        />
                        {`${time} days left`}
                    </li>
                </ul>
            </article>
            <article class="single-card__avatar">
                <img 
                    src="./assets/images/image-avatar.png" 
                    alt=""
                />
                <p>Creation of <span>Jules Wyvern</span></p>
            </article>
        </div>
    )
}