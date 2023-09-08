import React from 'react';
import ApartmentsDatas from '../../../Json/logements.json';
import Carrousel from "../../components/Carrousel/Carrousel"
import { useParams} from "react-router-dom";
import Collapse from '../../components/Collapsible/Collapse';
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import Rating from "../../components/Rating/Rating";
import Error404 from "../../components/Error404/Error404";

export default function Logement(){
    const { id } = useParams();
    const data = ApartmentsDatas.find(data => data.id === id);
    if (!data) {
        return <Error404 /> //renvoie sur la page erreur si data non trouvée
	}
    return(
			<div key={data.id} className="fiche-container">
                <Carrousel slides={data.pictures} picturesLength={data.pictures.length} />
				<section className="hostInfo-container">    
					<div className="title-tags-container">
						<div className="title-container">
							<h1>{data.title}</h1>
							<h3>{data.location}</h3>
						</div>
						<div className="tags-container">
							{data.tags.map((tag) => (
							<Tag key={tag} tag={tag} />
							))}
						</div>
                    </div>
					<div className="rate-host-container">
						<div>
							<Host
								HostName={data.host.name}
								HostPic={data.host.picture}
							/>
						</div>
						<Rating rate={data.rating} />
					</div>
				</section>
				<div className="collapse-fiche-container">
					<Collapse aboutTitle="Description" aboutText={data.description} />
					<Collapse 
						aboutTitle="Équipements" 
						aboutText={data.equipments.map((equipments, index) => (
                            <li key={`${index}-${equipments}`} className='equipList'>{equipments}</li>
                        ))}
                    />
				</div>
			</div>
	);
}