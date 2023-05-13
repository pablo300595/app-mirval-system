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

export const Environment = {
    images,
    FB_CONFIG: {
        apiKey: 'AIzaSyB5VNsikO1tV61w2vs14qE6nmtww1zIf1E',
        authDomain: 'todo-f0b3a.firebaseapp.com',
        projectId: 'todo-f0b3a',
        storageBucket: 'todo-f0b3a.appspot.com',
        messagingSenderId: '370198566044',
        appId: '1:370198566044:web:df34a9bf12c537e5da8959',
        measurementId: 'G-GHW52VZJ6N'
    },
    FB_DEVTOOLS_CONFIG: {
        maxAge: 25,       // Retains last 25 states
        logOnly: false,   // Restrict extension to log-only mode
        autoPause: true,  // Pauses recording actions and state changes when the
        // extension window is not open
    },
};