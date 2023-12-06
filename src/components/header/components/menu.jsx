import { useState, useRef } from "react";

const HeaderComponentMenu = () => {
	let [language, setLanguage] = useState(false);
	let [akun, setAkun] = useState(false);

	let reverseLanguage = () => {
		setLanguage(!language);
	};
	let reverseAkun = () => {
		setAkun(!akun);
	};
	return (
		<div>
			<div className="px-8 py-6 flex grid grid-cols-8 justify-center text-center text-lg text-gray-600">
				<div className="py-4 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1620.35 250"
						height="100%"
						className="_1mpv4c10 kk5w089"
						width="100%"
						display="block"
					>
						<circle
							cy="125"
							cx="125"
							r="118"
							fill="#fff"
							className="kk5w08c"
						></circle>
						<mask id="cutArrowOutOfCircle">
							<path
								fill="white"
								d="M0 125a125 125 0 11125 125A125 125 0 010 125"
							></path>
							<path
								fill="black"
								d="M128 47.68a7.81 7.81 0 117.8 7.8 7.81 7.81 0 01-7.8-7.8M152.26 73.94a8.62 8.62 0 118.61 8.61 8.62 8.62 0 01-8.61-8.61M128 73.94a7.81 7.81 0 117.8 7.81 7.8 7.8 0 01-7.8-7.81M178.14 100.29a9.67 9.67 0 119.68 9.67 9.66 9.66 0 01-9.68-9.67M152.26 100.21a8.62 8.62 0 118.61 8.6 8.62 8.62 0 01-8.61-8.6M128 100.21a7.81 7.81 0 117.8 7.81 7.8 7.8 0 01-7.8-7.81M104.74 100.21a6.84 6.84 0 116.83 6.83 6.83 6.83 0 01-6.83-6.83M85.38 100.21a5.86 5.86 0 115.85 5.86 5.86 5.86 0 01-5.85-5.86M66.92 100.21a4.88 4.88 0 114.88 4.89 4.88 4.88 0 01-4.88-4.89M51.29 100.21a3.92 3.92 0 113.92 3.9 3.91 3.91 0 01-3.92-3.9M36.51 100.21a2.93 2.93 0 112.93 2.92 2.92 2.92 0 01-2.93-2.92M24 100.21a2 2 0 112 2 2 2 0 01-2-2M178.14 126.55a9.67 9.67 0 119.68 9.67 9.68 9.68 0 01-9.68-9.67M152.26 126.47a8.62 8.62 0 118.61 8.62 8.62 8.62 0 01-8.61-8.62M128 126.47a7.81 7.81 0 117.8 7.81 7.8 7.8 0 01-7.8-7.81M104.74 126.47a6.84 6.84 0 116.83 6.84 6.82 6.82 0 01-6.83-6.84M85.38 126.47a5.86 5.86 0 115.85 5.86 5.85 5.85 0 01-5.85-5.86M66.92 126.47a4.88 4.88 0 114.88 4.89 4.87 4.87 0 01-4.88-4.89M51.29 126.47a3.92 3.92 0 113.92 3.9 3.91 3.91 0 01-3.92-3.9M36.51 126.47a2.93 2.93 0 112.93 2.92 2.92 2.92 0 01-2.93-2.92M24 126.47a2 2 0 112 2 2 2 0 01-2-2M204.67 126.73a10.6 10.6 0 1110.6 10.59 10.61 10.61 0 01-10.6-10.59M178.14 152.81a9.67 9.67 0 119.68 9.68 9.67 9.67 0 01-9.68-9.68M152.26 152.74a8.62 8.62 0 118.61 8.61 8.62 8.62 0 01-8.61-8.61M128 152.74a7.81 7.81 0 117.8 7.81 7.81 7.81 0 01-7.8-7.81M104.74 152.74a6.84 6.84 0 116.83 6.83 6.84 6.84 0 01-6.83-6.83M85.38 152.74a5.86 5.86 0 115.85 5.86 5.85 5.85 0 01-5.85-5.86M66.92 152.74a4.88 4.88 0 114.88 4.87 4.87 4.87 0 01-4.88-4.87M51.29 152.74a3.92 3.92 0 113.92 3.91 3.92 3.92 0 01-3.92-3.91M36.51 152.74a2.93 2.93 0 112.93 2.93 2.93 2.93 0 01-2.93-2.93M24 152.74a2 2 0 113.9 0 2 2 0 01-3.9 0M152.26 179a8.62 8.62 0 118.61 8.61 8.62 8.62 0 01-8.61-8.61M128 179a7.81 7.81 0 117.8 7.81A7.82 7.82 0 01128 179M128 205.26a7.81 7.81 0 117.8 7.82 7.8 7.8 0 01-7.8-7.82"
							></path>
						</mask>
						<path
							fill="#0d3880"
							className="kk5w08b"
							d="M0 125a125 125 0 11125 125A125 125 0 010 125"
							mask="url(#cutArrowOutOfCircle)"
						></path>
						<path
							fill="#0d3880"
							className="kk5w08d"
							d="M641 165.11l25.47-14.89c5.4 14 16 23.09 34.75 23.09 17.92 0 24.18-7.55 24.18-16 0-11.23-10.14-15.54-32.59-22-23.1-6.69-45.55-15.33-45.55-44 0-27.46 26.21-43.73 50.83-43.73 23.79 0 42.74 11.48 52.78 31.65l-25 14.46c-5.39-11.44-13.9-17.19-27.74-17.19-11.42 0-21 6.29-21 14 0 9.28 5.83 13.17 28.71 20.08 24 7.55 49.43 15.54 49.43 46.41 0 28.27-22.67 45.54-54.83 45.54-30.87 0-51.15-14.89-59.36-37.34M765.87 91.5V54.4h27.84v37.1h24.39v26.77h-24.39v44.9c0 11.65 8.42 11.87 24.39 11v25.26c-39.06 4.32-52.23-7.13-52.23-36.26V91.5zM894.38 89.35v31.08c-14.46-1.73-32.81 4.75-32.81 27.41v51.59h-27.84V91.5h27.84v18.57c5.61-14.68 19.21-20.72 32.81-20.72M982.31 135.32c-3.46-15.54-15.11-21.8-26.77-21.8-14.89 0-25 8-28.27 21.8zm-24.18 41.88c10.8 0 19.43-4.54 24.18-10.8l22.45 12.95c-10.15 14.68-26.34 23.1-47.06 23.1-36.26 0-59.14-24.82-59.14-57s23.1-57 57-57c32 0 54.61 25.26 54.61 57a64.11 64.11 0 01-1.08 11.44H927.7c3.89 14.24 15.76 20.29 30.43 20.29M1102.19 135.32c-3.46-15.54-15.11-21.8-26.77-21.8-14.89 0-25 8-28.27 21.8zM1078 177.2c10.8 0 19.43-4.54 24.18-10.8l22.45 12.95c-10.15 14.68-26.34 23.1-47.06 23.1-36.26 0-59.14-24.82-59.14-57s23.1-57 57-57c31.95 0 54.61 25.26 54.61 57a64.11 64.11 0 01-1.08 11.44h-81.37c3.89 14.24 15.76 20.29 30.43 20.29M1142.13 91.5V54.4H1170v37.1h24.39v26.77H1170v44.9c0 11.65 8.42 11.87 24.39 11v25.26c-39.07 4.32-52.23-7.13-52.23-36.26V91.5zM482 145.47c0-17.49-12.73-29.79-29.36-29.79-16.4 0-29.13 12.3-29.13 29.79s12.73 29.78 29.13 29.78c16.63 0 29.36-12.3 29.36-29.78m-86.34 0c0-32.16 25.26-57 57-57s57.21 24.83 57.21 57-25.47 57-57.21 57-57-24.82-57-57M606.72 145.47c0-18.14-12.74-30.44-30-30.44-17.06 0-29.79 12.3-29.79 30.44s12.73 30.43 29.79 30.43c17.26 0 30-12.3 30-30.43m27.84 0c0 32.16-23.74 57-52.67 57-15.75 0-27.19-5.83-35-15.76v12.74h-27.81V48.34h27.85v55.9c7.77-9.93 19.21-15.76 35-15.76 28.93 0 52.67 24.83 52.67 57M387.12 48.37v104a56.2 56.2 0 01-3.06 18.88 43.68 43.68 0 01-17.24 22.13s-.05.07-.07.07c-8.68 6.59-21.42 8.91-30.92 8.91-24.81 0-45.64-10.85-52.15-31.71-2-6.34-2.8-14.3-2.8-26.17h30.17c-.19 12.35 1.41 21.61 10.71 26.89 8.42 4.79 26.68 4.52 33-9.08 3.72-8 2.77-21.25 2.77-30.08V48.37zM1296.73 172.62q0 13.14-5.61 20.49t-15.67 7.36a17.08 17.08 0 01-14.2-6.83l-.66 5.81h-13.14v-77.62h14.61v27.84a16.64 16.64 0 0113.29-5.91q10 0 15.69 7.36t5.69 20.69zm-14.61-1.06q0-8.3-2.62-12.11a8.91 8.91 0 00-7.84-3.81q-7 0-9.6 5.71v21.58q2.68 5.76 9.7 5.76t9.3-7a35.93 35.93 0 001.06-10.13zM1323 178.78l10.11-34h15.67l-22 63.17-1.21 2.89q-4.9 10.71-16.17 10.71a23 23 0 01-6.47-1v-11.04l2.23.05a12.06 12.06 0 006.19-1.26 8.27 8.27 0 003.2-4.2l1.72-4.49-19.15-54.84h15.72zM1419.4 180.15a7.81 7.81 0 00-3-6.6q-3-2.3-10.92-4.85a76 76 0 01-12.48-5q-12.54-6.76-12.54-18.24a17.74 17.74 0 013.37-10.64 21.91 21.91 0 019.65-7.3 36.33 36.33 0 0114.12-2.63 33 33 0 0114 2.86 22.33 22.33 0 019.58 8.06 21.11 21.11 0 013.41 11.82h-15.16a9.9 9.9 0 00-3.19-7.86c-2.12-1.86-5.1-2.8-8.94-2.8s-6.59.78-8.64 2.35a7.4 7.4 0 00-3.08 6.19c0 2.39 1.2 4.4 3.61 6a40.48 40.48 0 0010.64 4.55q12.93 3.9 18.85 9.66a19.22 19.22 0 015.91 14.35q0 9.55-7.23 15t-19.45 5.44a37.63 37.63 0 01-15.47-3.11 24.47 24.47 0 01-10.64-8.52 21.8 21.8 0 01-3.66-12.53h15.21q0 12.18 14.56 12.18c3.6 0 6.42-.73 8.44-2.2a7.16 7.16 0 003.05-6.18zM1488.32 167.57h-29.11v19.7h34.17v12.18h-49.33v-73.58h49.22v12.28h-34.06v17.54h29.11zM1546.48 167.57h-29.11v19.7h34.16v12.18h-49.32v-73.58h49.22v12.28h-34.06v17.54h29.11zM1583.41 169.94l-7.89 8.49v21h-15.16v-73.56h15.16v33.36l6.68-9.15 18.8-24.21h18.64l-26.12 32.7 26.88 40.88h-18z"
						></path>
					</svg>
				</div>
				<div className="flex items-center justify-center text-center">
					<span className="cursor-pointer py-3 font-semibold text-gray-800 border-b-2 border-gray-800">
						Cari Lowongan
					</span>
				</div>
				<div className="flex items-center justify-center text-center">
					<span className="cursor-pointer py-3 hover:border-b-2 hover:border-gray-600">
						Lihat Profile
					</span>
				</div>
				<div className="flex items-center justify-center text-center">
					<span className="cursor-pointer py-3 hover:border-b-2 hover:border-gray-600">
						Sumber Daya Karir
					</span>
				</div>
				<div className="flex items-center justify-center text-center">
					<span className="cursor-pointer py-3 hover:border-b-2 hover:border-gray-600">
						Profile Perusahaan
					</span>
				</div>
				<div className="text-center text-gray-900">
					<div
						className="flex items-center justify-center"
						onClick={reverseLanguage}
					>
						<span className="cursor-pointer py-3">Bahasa</span>
					</div>

					<div
						className={`${
							language ? "" : "hidden"
						} absolute border-2 rounded-lg py-3 px-2 shadow border-gray-300`}
					>
						<div className="flex justify-center text-center w-full pr-5">
							<span className="px-3">-</span>
							<span>lorem</span>
						</div>
						<div className="flex justify-center text-center w-full pr-5">
							<span className="px-3">-</span>
							<span>lorem</span>
						</div>
					</div>
				</div>
				<div className="text-center text-gray-900">
					<div
						className="flex items-center justify-center"
						onClick={reverseAkun}
					>
						<span className="cursor-pointer py-3">Akun</span>
					</div>

					<div
						className={`${
							akun ? "" : "hidden"
						} absolute border-2 rounded-lg py-3 px-2 shadow border-gray-300`}
					>
						<div className="flex justify-center text-center w-full pr-5">
							<span className="px-3">-</span>
							<span>lorem</span>
						</div>
						<div className="flex justify-center text-center w-full pr-5">
							<span className="px-3">-</span>
							<span>lorem</span>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center text-center text-purple-500 font-semibold">
					<span className="cursor-pointer py-3">
						Untuk Perusahaan
					</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderComponentMenu;