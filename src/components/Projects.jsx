import React from 'react';
import { motion } from 'framer-motion';

/* ── Tech Logo SVGs (inline for reliability) ── */
const TechIcon = ({ name }) => {
    const icons = {
        Java: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#EA2D2E" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" /><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" /><path fill="#EA2D2E" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" /><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 33.188c-20.332 14.963-4.636 23.488-.001 33.237-11.867-10.708-20.576-20.134-14.731-28.925C57.925 25.47 81.047 19.313 76.491 1.587z" /><path fill="#EA2D2E" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" /></svg>
        ),
        'Spring Boot': (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#68BD45" d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026.511 28.451.511 63.666a63.472 63.472 0 0013.347 38.935c.27-.467.581-.912.926-1.329l43.423-59.39a4.053 4.053 0 016.549 4.796L22.143 105.32a4.053 4.053 0 01-1.07 1.146 63.898 63.898 0 0043.132 16.666c35.223 0 63.695-28.476 63.695-63.695a63.3 63.3 0 00-11.448-36.394l-.002.003.002-.003z" /></svg>
        ),
        React: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><circle cx="64" cy="64" r="11.4" fill="#61DAFB" /><path fill="none" stroke="#61DAFB" strokeWidth="5" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.6 1.1-5.1 1.4-7.4 1.5-10.6-.3-17.6-5-20.4-4.5-2.6-11.8-.7-19.5 5.3-1.9 1.5-3.8 3.2-5.7 5.1-1.8-1.8-3.6-3.5-5.4-4.9C58.3 14.1 51.1 12.1 46.6 14.7c-4.6 2.6-6.4 9.5-5 19.9.3 2.2.8 4.7 1.4 7.2-2.5.8-4.9 1.6-7.1 2.5C26.4 48.1 21 54.2 21 61.2c0 7.1 5.5 13.2 14.8 17.2 2.2.9 4.5 1.7 6.9 2.4-.6 2.5-1 5-1.3 7.2-1.5 10.5.3 17.6 4.9 20.3 4.6 2.7 12.1.8 19.8-5.2 1.8-1.4 3.6-3.1 5.4-4.9 2 2 3.9 3.7 5.8 5.2 7.5 5.8 14.7 7.7 19.3 5.1 4.7-2.7 6.5-9.8 5-20.2-.3-2.3-.8-4.8-1.5-7.4 2.2-.7 4.3-1.4 6.3-2.2 9.6-4 15.3-10.2 15.3-17.3-.2-7-5.9-13.2-15.5-17.2zM96.8 70.1c-1.8.6-3.7 1.2-5.7 1.8-1.3-4.6-3.1-9.5-5.3-14.4 2.1-4.8 3.8-9.6 5.1-14.1 2.2.6 4.3 1.3 6.3 2.1 7.6 3.1 12.1 7.6 12.1 12.4 0 5.1-4.7 9.6-12.5 12.2zm-7.7 5.7c-1.5 5.2-3.6 10.7-6.2 16.2-2.7 5.7-5.7 10.9-8.8 15.4-5.5 4.3-10.7 5.6-13.4 4-2.8-1.6-4.1-6.8-3-14.9.3-1.9.6-3.9 1.1-6.1 4.8.9 10 1.5 15.5 1.7 3.3-4 6.4-8.3 9.2-12.8.2-.4.4-.8.6-1.2l.2.1c1.9.6 3.7 1.1 5.4 1.5zm-34.7 32.6c-5.6 4.5-10.9 5.8-13.6 4.2-2.9-1.7-4.2-7.1-3-15.5.3-2 .7-4.1 1.2-6.4 4.8.9 10.1 1.4 15.6 1.6 3.2-4 6.2-8.2 8.9-12.5l.2.1c-3.1 5.6-6.5 10.9-10.2 15.8-1.5 2.1-3.2 4.3-5.1 6.4.2-.1.4-.2.6-.3 1.8-1.4 3.6-3 5.4-4.8-.1.4-.1.4 0 1.4zM33.5 73.2c-7.5-3.1-11.9-7.5-11.9-12.1s4.5-9.1 12.2-12.2c1.9-.8 4-1.5 6.2-2.1 1.3 4.6 3 9.4 5.2 14.3-2.1 4.8-3.8 9.5-5 14 .1 0-.1 0 0 0-2.3-.6-4.5-1.2-6.7-1.9z" /></svg>
        ),
        TypeScript: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><rect fill="#3178C6" width="128" height="128" rx="12" /><path fill="#fff" d="M82.576 97.472c2.56 1.317 5.835 2.37 8.93 2.37 3.651 0 5.835-1.792 5.835-4.387v-.11c0-2.672-2.445-3.608-6.323-5.14l-2.24-.973c-5.953-2.555-9.94-5.735-9.94-12.435v-.112c0-7.112 5.498-12.59 14.064-12.59 4.167 0 8.21 1.198 11.358 3.627l-4.018 6.047c-2.445-1.643-4.926-2.7-7.421-2.7-3.286 0-4.926 1.907-4.926 4.046v.108c0 2.7 2.56 3.672 6.55 5.248l2.128.938c6.55 2.778 10.04 6.29 10.04 12.315v.107c0 7.735-5.985 12.955-14.774 12.955-4.926 0-10.074-1.755-14.064-4.833l4.8-5.48zM50.8 72.26h-9.564v-7.82h28.38v7.82H59.97v34.54H50.8V72.26z" /></svg>
        ),
        MySQL: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#00758F" d="M2.001 90.458h4.108V74.803l6.012 13.225c.69 1.636 1.662 2.2 3.604 2.2s2.855-.564 3.545-2.2l6.012-13.166v15.596h4.108V71.852c0-1.636-.849-2.43-2.16-2.43h-2.16c-1.37 0-2.16.389-2.79 1.868L16.2 84.563l-6.071-13.273c-.63-1.479-1.42-1.868-2.79-1.868H5.18c-1.311 0-2.16.794-2.16 2.43v18.606h-.02z" /><path fill="#00758F" d="M34.565 90.458c1.311 0 2.16-.794 2.16-2.43v-5.93l2.16-2.487 6.753 9.592c.63.969 1.199 1.255 2.39 1.255h2.281c1.311 0 2.16-.765 2.16-2.026 0-.448-.24-.969-.57-1.447l-8.192-11.46 7.502-8.576c.51-.564.75-1.013.75-1.519 0-1.02-.81-1.578-2.1-1.578h-2.34c-1.08 0-1.65.274-2.34 1.068l-8.454 10.088v-8.727c0-1.636-.849-2.43-2.16-2.43h-2.88c-1.311 0-2.16.794-2.16 2.43v18.606c0 1.636.849 2.43 2.16 2.43h2.88v-.04z" /></svg>
        ),
        'REST APIs': (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
        ),
        Python: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#FFD845" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 18.062 0 29.674C7.694 86.971 13.306 93 21.776 93H32V79.952c0-9.66 8.35-18.164 18.33-17.952z" /><path fill="#3776AB" d="M91.682 28H81v12.006C81 50.3 72.271 59 62.33 59H33.17C25.093 59 19 65.439 19 73.541v27.798c0 7.912 6.879 12.565 14.555 14.874 9.185 2.762 17.88 3.261 28.876 0C68.936 114.263 73 110.386 73 101.339V91H44v-4h43.452c8.484 0 11.637-5.92 14.017-14.811 2.458-9.162 2.353-17.974 0-29.674C99.369 34.474 95.342 28 91.682 28z" /><circle cx="49.62" cy="14.002" r="4.335" fill="#fff" /><circle cx="78.338" cy="108.686" r="4.335" fill="#FFD845" /></svg>
        ),
        OpenCV: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><circle cx="40" cy="45" r="20" fill="#FF0000" opacity="0.8" /><circle cx="88" cy="45" r="20" fill="#00FF00" opacity="0.8" /><circle cx="64" cy="85" r="20" fill="#0000FF" opacity="0.8" /></svg>
        ),
        Android: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3DDC84"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" /></svg>
        ),
        Firebase: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#FFA000" d="M27.35 80.52l7.68-71.6c.17-1.6 2.26-2.1 3.07-.74L45.7 22.1 27.35 80.52z" /><path fill="#F57C00" d="M78.44 41.18L69 22.76c-.59-1.18-2.27-1.2-2.88-.04L27.35 80.53l51.09-39.35z" /><path fill="#FFCA28" d="M97.03 28.97c-.75-.8-2.04-.83-2.83-.08L78.44 41.18 27.35 80.53l33.28 19.4c2.07 1.2 4.63 1.2 6.7 0L100.82 82V31.16c0-.81-.31-1.58-.87-2.15l-2.92-.04z" /><path fill="#FFA000" d="M66.33 99.93c-2.07 1.2-4.63 1.2-6.7 0l-32.08-19.3-.2.1 32.28 19.4c2.07 1.2 4.63 1.2 6.7 0L100.82 82v-.41L66.33 99.93z" opacity=".2" /></svg>
        ),
        C: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4.5.8 1.2 1.5 2 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-2-.8-4.3-2.6-5.4zM64 88.5c17.4 0 28.8-10.4 33.5-21.5l-17-9.8c-2.4 7.5-8.8 13.3-16.5 13.3-10.2 0-17.5-8.2-17.5-19.5S53.8 31.5 64 31.5c7.6 0 14 5.7 16.5 13.3l17-9.8C92.8 23.9 81.4 13.5 64 13.5 41.6 13.5 28 30.7 28 51s13.6 37.5 36 37.5z" /></svg>
        ),
        'JUnit 5': (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#25A162"><path d="M11.34 2.55l-8.5 4.9c-.41.24-.66.67-.66 1.14v9.81c0 .47.25.9.66 1.14l8.5 4.9c.41.24.91.24 1.32 0l8.5-4.9c.41-.24.66-.67.66-1.14V8.59c0-.47-.25-.9-.66-1.14l-8.5-4.9c-.41-.24-.91-.24-1.32 0zM12 6l6.93 4v8L12 22l-6.93-4v-8L12 6z" /></svg>
        ),
        '.NET': (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#512BD4" d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.847 28.907C128.381 52.74 129.5 64.74 127.997 76c-1.503 14.2-7.28 27.883-16.26 38.86-8.98 11.05-21.397 19.467-35.26 23.467-13.862 3.997-29.19 3.858-43.003-.137C19.78 134.303 7.575 125.703 0 114 6.27 119.76 13.37 124.4 21.2 127.2c13.33 4.95 28.397 5.307 41.92 1.207 12.443-3.662 23.517-11.063 31.453-21.03 7.888-9.787 12.73-21.868 13.863-34.357 1.19-13.25-.86-27.017-6.59-39.17-4.467-9.437-11.296-17.773-19.78-23.82C72.58 3.26 61.197-.24 50 0h11.195z" /><circle cx="15" cy="115" r="8" fill="#512BD4" /></svg>
        ),
        'ASP.NET Core': (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#512BD4" d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.847 28.907C128.381 52.74 129.5 64.74 127.997 76c-1.503 14.2-7.28 27.883-16.26 38.86-8.98 11.05-21.397 19.467-35.26 23.467-13.862 3.997-29.19 3.858-43.003-.137C19.78 134.303 7.575 125.703 0 114 6.27 119.76 13.37 124.4 21.2 127.2c13.33 4.95 28.397 5.307 41.92 1.207 12.443-3.662 23.517-11.063 31.453-21.03 7.888-9.787 12.73-21.868 13.863-34.357 1.19-13.25-.86-27.017-6.59-39.17-4.467-9.437-11.296-17.773-19.78-23.82C72.58 3.26 61.197-.24 50 0h11.195z" /><circle cx="15" cy="115" r="8" fill="#512BD4" /></svg>
        ),
        'SQL Server': (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#CC2927"><path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2c4.42 0 8 1.57 8 3.5S16.42 11 12 11 4 9.43 4 7.5 7.58 4 12 4z" /></svg>
        ),
        'EF Core': (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#512BD4"><rect x="3" y="3" width="18" height="18" rx="3" opacity="0.3" /><path d="M7 8h10M7 12h10M7 16h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
        ),
        JWT: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#FB015B" strokeWidth="1.5" /><path d="M12 6v6l4 2" stroke="#FB015B" strokeWidth="1.5" strokeLinecap="round" /></svg>
        ),
        SignalR: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#4FC3F7"><path d="M4 4l16 8-16 8V4z" /></svg>
        ),
        Vite: (
            <svg viewBox="0 0 410 404" className="w-5 h-5"><path fill="#41D1FF" d="M399.641 59.525L215.643 388.545c-3.024 5.408-10.8 5.577-14.06.306L2.34 59.525c-3.49-5.645 1.257-12.67 7.65-11.83l189.648 24.9a8.87 8.87 0 006.43-.02L394.03 47.7c6.372-.915 11.11 6.08 7.61 11.825z" /><path fill="#FFDD35" d="M292.965 1.474L156.801 28.216a4.44 4.44 0 00-3.543 3.95l-12.19 208.42a4.44 4.44 0 005.17 4.686l44.508-7.56a4.44 4.44 0 005.127 5.295l29.88-3.235a4.44 4.44 0 005.03 5.468l28.79-5.464 51.3-270.69c.862-4.547-3.456-8.396-7.874-7.11z" /></svg>
        ),
        Flex: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FFB13B"><rect x="2" y="2" width="20" height="20" rx="4" /><text x="6" y="17" fontSize="12" fill="#000" fontWeight="bold">F</text></svg>
        ),
        Bison: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#8B4513"><rect x="2" y="2" width="20" height="20" rx="4" /><text x="6" y="17" fontSize="12" fill="#fff" fontWeight="bold">B</text></svg>
        ),
        Hangfire: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#4A90D9" strokeWidth="1.5" /><path d="M12 7v5l3 3" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" /></svg>
        ),
        CSS: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" /><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" /><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114H64.001V51.429z" /><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" /><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" /><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.429v13.831H46.958l-.277-3.108-.631-7.012-.33-3.711h18.281z" /></svg>
        ),
        HTML: (
            <svg viewBox="0 0 128 128" className="w-5 h-5"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" /><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" /><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.035l.33 3.692 3.382 37.927H64z" /><path fill="#fff" d="M63.962 87.093l-.062.017-15.386-4.156-.984-11.02H33.652l1.937 21.688 28.312 7.85.061-.017z" /><path fill="#fff" d="M64 52.455v13.763h16.947l-1.597 17.849-15.35 4.148v14.26l28.215-7.82.207-2.325 3.234-36.233.335-3.642z" /></svg>
        ),
    };
    return icons[name] || <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[9px] font-bold text-[#adaaaa]">{name.slice(0, 2)}</span>;
};

const projects = [
    {
        id: 1,
        title: 'DiagNote',
        subtitle: 'Healthcare Management Web Application',
        period: 'Aug 2024 – Nov 2024',
        description: 'A full-stack healthcare platform with role-based authentication, appointment scheduling, digital prescriptions, and lab report management. Built a TypeScript frontend integrated with backend APIs; contributed to database design, backend services, and team collaboration.',
        techs: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'REST APIs'],
        image: '/diagnote-preview.jpg',
        github: 'https://github.com/Dinushka20/Diagnote',
        color: '#81ecff',
    },
    {
        id: 2,
        title: 'TestLang',
        subtitle: 'Domain-Specific Language for API Testing',
        period: '2025',
        description: 'A DSL compiler that converts human-readable test specifications into executable JUnit 5 test code. Uses Flex for lexical analysis and Bison for parsing, generating Java test classes using HttpClient. Tested against Java 21 Spring Boot backends.',
        techs: ['C', 'Java', 'JUnit 5', 'Flex', 'Bison'],
        image: null,
        github: 'https://github.com/Dinushka20/TestLang',
        color: '#e966ff',
    },
    {
        id: 3,
        title: 'AlertEYE',
        subtitle: 'Real-time Driver Monitoring System',
        period: 'Nov 2023 – May 2024',
        description: 'A real-time driver safety system using IoT sensors, OpenCV-based computer vision, and Python-based logic to detect driver fatigue. Built a companion Android app with Firebase real-time alerts and Google Maps integration.',
        techs: ['Python', 'OpenCV', 'Android', 'Firebase'],
        image: '/alerteye-preview.jpg',
        github: null,
        color: '#70aaff',
    },
    {
        id: 4,
        title: 'POS Webapp',
        subtitle: 'Point of Sale System',
        period: '2025',
        description: 'A full-stack POS system with robust architecture on ASP.NET Core 8, role-based JWT security (Admin, Manager, Cashier), SignalR real-time notifications, Hangfire background jobs, and QuestPDF report generation. React + TypeScript + Vite frontend.',
        techs: ['.NET', 'ASP.NET Core', 'SQL Server', 'React', 'TypeScript', 'Vite', 'JWT', 'SignalR'],
        image: null,
        githubFrontend: 'https://github.com/Dinushka20/POS-frontend',
        githubBackend: 'https://github.com/Dinushka20/POS-webapp',
        color: '#81ecff',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1] 
        }
    }
};

const Projects = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-12 relative overflow-clip" id="projects" style={{ overflowClipMargin: '20px' }}>
            {/* Ambient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#81ecff]/4 blur-[180px] rounded-full pointer-events-none animate-drift-slow"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e966ff]/3 blur-[150px] rounded-full pointer-events-none animate-drift-reverse"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-xs tracking-widest uppercase text-[#e966ff] font-bold">Portfolio</span>
                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2 text-white">
                        Selected Works
                    </h2>
                    <p className="text-[#adaaaa] mt-4 max-w-xl text-lg">Projects I've built during my academic journey and beyond.</p>
                    <div className="w-24 h-1 mt-4 rounded-full bg-gradient-to-r from-[#e966ff] to-[#81ecff]"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.05 }}
                    className="space-y-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                            className="group tilt-card glass-card-strong rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 shimmer relative"
                        >
                            {/* Project number badge */}
                            <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center">
                                <span className="text-xs font-bold font-mono" style={{ color: project.color }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                {project.image && (
                                    <div className="lg:w-2/5 h-60 lg:h-auto overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/80 z-10 hidden lg:block"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent z-10 lg:hidden"></div>
                                        <img
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                                            src={project.image}
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className={`flex-1 p-8 lg:p-10 flex flex-col justify-center ${!project.image ? 'w-full' : ''}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs tracking-widest uppercase font-bold" style={{ color: project.color }}>
                                            {project.period}
                                        </span>
                                        {index === 0 && (
                                            <motion.span
                                                animate={{ scale: [1, 1.05, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#e966ff] text-white"
                                            >
                                                Featured
                                            </motion.span>
                                        )}
                                    </div>

                                    <h3 className="font-headline text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-[#81ecff] transition-colors duration-300">{project.title}</h3>
                                    <p className="text-sm font-medium mb-4" style={{ color: project.color }}>{project.subtitle}</p>
                                    <p className="text-[#adaaaa] text-sm leading-relaxed mb-6 max-w-2xl">{project.description}</p>

                                    {/* Tech icons */}
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.techs.map(tech => (
                                            <motion.div
                                                key={tech}
                                                whileHover={{ scale: 1.08, y: -2 }}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/15 transition-colors"
                                            >
                                                <TechIcon name={tech} />
                                                <span className="text-xs text-[#adaaaa] font-medium">{tech}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex flex-wrap gap-3">
                                        {project.github && (
                                            <motion.a
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                href={project.github} target="_blank" rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/10 text-white hover:bg-white/5 hover:border-[#81ecff]/30"
                                            >
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                View Repository
                                            </motion.a>
                                        )}
                                        {project.githubFrontend && (
                                            <>
                                                <motion.a
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    href={project.githubFrontend} target="_blank" rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/10 text-white hover:bg-white/5 hover:border-[#81ecff]/30"
                                                >
                                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                    Frontend Repo
                                                </motion.a>
                                                <motion.a
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    href={project.githubBackend} target="_blank" rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/10 text-white hover:bg-white/5 hover:border-[#81ecff]/30"
                                                >
                                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                    Backend Repo
                                                </motion.a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
