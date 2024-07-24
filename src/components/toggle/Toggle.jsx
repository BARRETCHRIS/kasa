import { useState, useRef} from 'react';
import './toggle.scss';

function Toggle({ title, content, halfWidth }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <section className={`dropdown ${isOpen ? 'open' : ''} ${halfWidth ? 'half-width' : ''}`}>
            <div className="dropdown__visible" onClick={toggleDropdown}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-down ${isOpen ? 'rotate' : ''}`}></i>
            </div>
            <div ref={contentRef} className="dropdown__content">
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="dropdown__corps">{content}</p>
                )}
            </div>
        </section>
    );
}

export default Toggle;