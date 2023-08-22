import React from 'react';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Collapse from "../../components/Collapsible/Collapse";
import AboutFiles from "../../../Json/about.json";

export default function About(){
    return(
        <>
        <AboutBanner />
        {AboutFiles.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
                    aboutStyle="Style"
				/>
			))}   
       
        </>
    )
}