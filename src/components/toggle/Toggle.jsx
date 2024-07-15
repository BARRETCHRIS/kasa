import { useState, useRef, useEffect } from "react"; 
//import des hooks de base react
import Chevron from "../../assets/vectorBas.svg";
import "./toggle.scss";

function Toggle(props) {
	const [toggle, setToggle] = useState(false); // definis le state du toggle (et false par défaut)
	const [heightEl, setHeightEl] = useState(); // definis le state de la hauteur du dropdown

	const toggleState = () => {
		//définis la fonction toggleState qui modifie la valeur toggle au clic
		setToggle(!toggle);
	};

	const refHeight = useRef(); //récupère et conserve la valeur de hauteur du dropdown déplié

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du dropdown déplié lors de sa première ouverture et la conserve dans refHeight
	}, []);

	return (
		// affiche le dropdown replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<section className={`dropdown ${props.aboutStyle}`}>
			<div onClick={toggleState} className="dropdown__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<p
				ref={refHeight}
				className={toggle ? "dropdown__toggle animated" : "dropdown__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				{props.aboutText}
			</p>
		</section>
	);
}

export default Toggle;