import { Image } from "./models/image";

const images: Image[] = [
    {
        name: 'builder-dragon',
        url: 'https://storage.cloud.google.com/landscapes-bucket/assets/builder-dragon.jpeg'
    },
    {
        name: 'druid',
        url: 'https://storage.cloud.google.com/landscapes-bucket/assets/druid.jpeg'
    },
    {
        name: 'magician-alternative',
        url: 'https://storage.cloud.google.com/landscapes-bucket/assets/magician-alternative.jpeg'
    },
    {
        name: 'magician',
        url: 'https://storage.cloud.google.com/landscapes-bucket/assets/magician.jpg'
    },
    {
        name: 'paladdin-alternative',
        url: 'https://storage.cloud.google.com/landscapes-bucket/assets/paladdin-alternative.jpeg'
    },
    {
        name: 'paladdin',
        url: 'https://storage.cloud.google.com/landscapes-bucket/assets/paladdin.jpeg'
    },
    {
        name: 'water-dragon-alternative',
        url: 'https://storage.cloud.google.com/landscapes-bucket/assets/water-dragon-alternative.jpeg'
    },
    {
        name: 'water-dragon',
        url: 'https://storage.cloud.google.com/landscapes-bucket/assets/water-dragon.jpeg'
    }
];

export const environment = {
    production: false,
    images,
    FB_CONFIG: {
        apiKey: process.env['todo.api_key'],
        authDomain: process.env['todo.auth_domain'],
        projectId: process.env['todo.project_id'],
        storageBucket: process.env['todo.storage_bucket'],
        messagingSenderId: process.env['todo.messaging_sender_id'],
        appId: process.env['todo.app_id'],
        measurementId: process.env['todo.measurement_id'],
    },
    FB_DEVTOOLS_CONFIG: {
        maxAge: 25,       // Retains last 25 states
        logOnly: false,   // Restrict extension to log-only mode
        autoPause: true,  // Pauses recording actions and state changes when the
        // extension window is not open
    },
};