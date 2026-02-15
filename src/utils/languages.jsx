import React from 'react';

export const LANGUAGES = [
    { code: 'en', country: 'us', label: 'English', key: 'english' },
    { code: 'tr', country: 'tr', label: 'Türkçe', key: 'turkish' },
    { code: 'ja', country: 'jp', label: '日本語', key: 'japanese' },
    { code: 'es', country: 'es', label: 'Español', key: 'spanish' },
    { code: 'pt', country: 'br', label: 'Português', key: 'portuguese' },
    { code: 'de', country: 'de', label: 'Deutsch', key: 'german' },
    { code: 'fr', country: 'fr', label: 'Français', key: 'french' }
];

export function Flag({ country, size = 20, className = '' }) {
    return (
        <img
            src={`https://flagcdn.com/w40/${country}.png`}
            srcSet={`https://flagcdn.com/w80/${country}.png 2x`}
            width={size}
            height={Math.round(size * 0.75)}
            alt=""
            className={`inline-block rounded-sm ${className}`}
            style={{ objectFit: 'cover' }}
        />
    );
}

export const getLanguage = (code) => LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
