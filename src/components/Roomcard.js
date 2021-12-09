function Roomcard(props) {
    return (
        <>
        <div className="row">
            <div className="col">
                <p>{props.name}</p>
            </div>
            <div className="col">
                <p>description</p>
                <p>{props.description}</p>
            </div>
        </div>
        <div>
            {props.reviews.length>0?
            <div>
                {props.reviews.map( review => {
                    return(
                        <div className="container" key={review._id}>
                            <p>{review.comment}</p>
                        </div>
                    )
                })}
            </div>
            :
            
            null}
        </div>
        </>
    )
}

export default Roomcard