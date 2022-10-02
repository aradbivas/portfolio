import React from 'react';
const Card = (props) =>
{
        return(
            <div className="card">
                <img src={props.img} alt={'img'}/>
                <div className="card-body">
                    <h2>{props.title}</h2>
                    <p>{props.paragraph}</p>
                    <h5>{props.stack}</h5>
                    <div className='card-links'>
                        {props.github &&
                            <a href={props.github}  target='_blank' rel="noreferrer">Github</a>
                        }
                        {props.live &&
                            <a href={props.live} target='_blank' rel="noreferrer">Live</a>
                        }
                    </div>
                </div>
            </div>
        )

}
export default Card;