import { Link } from "react-router-dom";
import React from 'react';
import datas from "../../../Json/logements.json"


export default function Cards(){
        return ( 
            <article className="cards-container">
                 {React.Children.toArray(
                    datas.map((data) => (   
                        <Link className="link_card_logement" to={`/logement/${data.id}`}>
                            <div className="Cards">
                                <img src={data.cover} alt={data.title} />
                                <p className="Cards_title">{data.title}</p>
                            </div>
                        </Link>
                    ))
                 )}
            </article>
        )
};

