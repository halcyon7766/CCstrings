import React from 'react';

const Logo = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle / Mato Enso style */}
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" className="opacity-100" />

        {/* Stylized String / Arrow Shaft */}
        <path
            d="M50 15 L50 85"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
        />

        {/* Cross mark mimic - Minimal target center */}
        <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
);

export default Logo;
