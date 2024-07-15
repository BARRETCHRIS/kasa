import Banner from "../../banner/Banner";
import aboutDatas from "../../../datas/aboutDatas.json";
import './aboutContent.scss';
import Toggle from "../../toggle/Toggle";

function AboutContent() {
    return (
        <main className="about-content">
            <Banner />
            {aboutDatas.map((rule, id) => (
				<Toggle
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
        </main>
    )    
}

export default AboutContent