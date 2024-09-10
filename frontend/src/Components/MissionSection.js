import React, { useEffect, useRef } from "react";
import './MissionSection.css';
import goalsImage from '../Assets/goals.jpg';
import objectivesImage from '../Assets/objectives.jpeg';
import volunteersImage from '../Assets/volunteers.jpeg';

function MissionSection() {
    const missionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.1 } // threshold indicates the percentage of the component that are displayed before the animation kicks in
        );

        const missionItems = missionRef.current.querySelectorAll(".mission-item");
        missionItems.forEach((item) => observer.observe(item));

        return () => {
            missionItems.forEach((item) => observer.unobserve(item));
        };
    }, []);

    return (
        <section className="mission-section" ref={missionRef}>
            <div className="mission-item">
                <img src={goalsImage} alt="Goals" className="mission-image" />
                <div className="mission-content">
                    <h2>Our Goals</h2>
                    <p>VII is an NGO based in Ghana with the aim to improve the lives of people in less privileged rural communities through better education, health, and support to orphanages.</p>
                </div>
            </div>
            <div className="mission-item">
                <img src={objectivesImage} alt="Objectives" className="mission-image" />
                <div className="mission-content">
                    <h2>Our Objectives</h2>
                    <ul>
                        <li>Objectives are linked to the sustainable development goals.</li>
                        <li>Create enriching opportunities for deprived individuals and communities.</li>
                    </ul>
                </div>
            </div>
            <div className="mission-item">
                <img src={volunteersImage} alt="Volunteers" className="mission-image" />
                <div className="mission-content">
                    <h2>Where Volunteers Can Assist</h2>
                    <ul>
                        <li>Health and Medicals</li>
                        <li>Teaching at rural community schools (Maths, English, ICT)</li>
                        <li>Orphanage support and child care (feeding them, playing with them)</li>
                        <li>Disability centers, helping people with disabilities like autism by teaching and playing with them to bring them joy and happiness.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default MissionSection;
