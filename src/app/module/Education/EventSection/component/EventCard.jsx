import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="flex flex-col overflow-hidden border border-white/20 rounded-xl p-4 bg-white/5 backdrop-blur-md shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300">

            {/* Imagen */}
            <div className="w-full aspect-video overflow-hidden rounded-lg">
                <img
                    src={event.certificateUrl}
                    alt={`Certificado: ${event.title}`}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                />
            </div>

            {/* Texto */}
            <div className="mt-3 hover:pl-2 transition-all duration-300">
                <p className="text-base font-semibold text-white">{event.title}</p>
                {event.description && (
                    <p className="text-sm text-gray-400 mt-1">{event.description}</p>
                )}
            </div>
        </div>
    );
};

export default EventCard;
