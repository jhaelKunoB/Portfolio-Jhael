import React from 'react';
import EventCard from './component/EventCard';

const CertificateSection = ({ events }) => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">Eventos y Participaciones</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, idx) => (
                    <EventCard key={idx} event={event} />
                ))}
            </div>
        </section>
    );
};

export default CertificateSection;
