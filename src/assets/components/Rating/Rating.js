import FullStar from "../../images/FStar.webp"
import EmptyStar from "../../images/EStar.webp"

export default function Rating({rate}) {

    const getRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starClass = (i < rating) ? FullStar : EmptyStar;
            stars.push(<img src={starClass} alt='Rating' key={i} className="Star" />);
        }
        return stars;
    };

    return (
        <div className='Rating'>
            {getRatingStars(rate)}
        </div>
        
    )
}