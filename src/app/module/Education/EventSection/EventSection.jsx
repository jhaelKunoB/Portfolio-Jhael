import React from 'react';
import EventCard from './component/EventCard';
import ScrollReveal from '../animation/ScrollReveal';
const CertificateSection = ({ events }) => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-15">

            <ScrollReveal>
                <span className="text-base sm:text-lg text-gray-200 text-center block mb-6">
                    Certificados de asistencia, participación y contribución en distintos eventos.
                </span>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, idx) => (
                    <ScrollReveal key={idx} delay={0.1 * idx}>
                        <EventCard key={idx} event={event} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default CertificateSection;
