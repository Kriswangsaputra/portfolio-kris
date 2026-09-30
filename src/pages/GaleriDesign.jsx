import { Link } from "react-router";
import { finalGaleriDesign } from "../data";

function GaleriDesign() {
    return(
        <Section className="flex flex-col px-24 py-12 gap-8 items-center">
            <div className="columns-4 gap-6">
                {finalGaleriDesign.map((item) => {
                    return(
                        <div key={item.id} className="mb-6">
                            <img src={item.designGrafisImage} alt="" className="w-full" />
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

export default GaleriDesign;