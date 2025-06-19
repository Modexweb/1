document.addEventListener('DOMContentLoaded', () => {
    // --- Element Variables ---
    const themeToggle = document.getElementById('themeToggle');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const contentSections = document.querySelectorAll('.content-section');
    const newGamesSection = document.getElementById('new-games-section');
    const allGamesSection = document.getElementById('all-games-section');
    const gameDetailSection = document.getElementById('game-detail-section');
    const backToHomeButton = document.getElementById('backToHome');

    const newGamesSwiperWrapper = document.getElementById('newGamesSwiperWrapper');
    const allGamesGrid = document.getElementById('allGamesGrid');
    const allGamesTitle = document.getElementById('allGamesTitle');
    const detailGameThumbnail = document.getElementById('detailGameThumbnail');
    const detailGameTitle = document.getElementById('detailGameTitle'); // Corrected ID
    const detailGameSize = document.getElementById('detailGameSize');
    const detailGameRating = document.getElementById('detailGameRating');
    const detailGameDescription = document.getElementById('detailGameDescription');
    const openDownloadProcessButton = document.getElementById('openDownloadProcessButton'); // ID الجديد لزر "Download Game"

    // العناصر الجديدة للمؤقت والرابط النهائي
    const countdownContainer = document.getElementById('countdownContainer');
    const countdownTimer = document.getElementById('countdownTimer');
    const finalDownloadLink = document.getElementById('finalDownloadLink');
    const telegramLinkButton = document.getElementById('telegramLinkButton'); // زر التليجرام

    //Modal Elements (If still in use, otherwise can be removed after confirming the new flow)
    const downloadModal = document.getElementById('downloadModal');
    const closeModalButton = document.getElementById('closeModal');
    const downloadLinksContainer = document.getElementById('downloadLinksContainer');
    const iframeContainer = document.getElementById('iframeContainer');
    const contentIframe = document.getElementById('contentIframe');
    const modalDescription = document.getElementById('modalDescription');


    // --- Games Data (with updated sizes) ---
    const gamesData = [
        {
            id: 1,
            title: 'Hill Climb Racing',
            category: 'Racing',
            image: 'images/Hill Climb Racing.png',
            size: '100 MB',
            rating: '4.6',
            downloadUrl: 'https://installchecker.com/cl/i/von489',
            description: {
                genre: 'Racing',
                platform: 'Android',
                modFeatures: 'Unlimited Money & Gems – All Vehicles Unlocked',
                overview: `Get ready for a unique physics-based racing experience with Hill Climb Racing! This fun game requires driving skill to climb hills and overcome obstacles. The modded version gives you all the coins and gems needed to upgrade and unlock your vehicles, making your adventures limitless.`,
                keyFeatures: [
                    'Realistic and fun physics.',
                    'Wide range of vehicles and upgrades.',
                    'Diverse stages and unique environments.',
                    'Attractive cartoon graphics.'
                ],
                whyChooseMod: [
                    '<strong>Unlimited Coins & Gems:</strong> Easily upgrade and unlock vehicles.',
                    '<strong>All Vehicles & Stages Unlocked:</strong> Enjoy all content from the start.'
                ]
            },
        },
        {
            id: 2,
            title: 'Traffic Rider',
            category: 'Racing',
            image: 'images/Traffic Rider.png',
            size: '145 MB',
            rating: '4.5',
            downloadUrl: 'https://installchecker.com/cl/i/dv6lm6/',
            description: {
                genre: 'Racing',
                platform: 'Android',
                modFeatures: 'Unlimited Money – All Bikes Unlocked',
                overview: `Embark on an exciting highway journey with Traffic Rider Modded! Test your driving skills from a first-person perspective, carefully overtake vehicles to avoid accidents and collect as many points as possible. The modded version gives you unlimited money and all motorcycles unlocked to enjoy maximum speed from the start.`,
                keyFeatures: [
                    'Detailed 3D graphics.',
                    'Variety of real motorcycles.',
                    'Realistic engine sounds.',
                    'Multiple game modes.'
                ]
            },
        },
        {
            id: 3,
            title: 'Extreme Car Driving Simulator',
            category: 'Simulation',
            image: 'images/Extreme Car Driving Simulator.png',
            size: '180 MB',
            rating: '4.4',
            downloadUrl: 'https://installchecker.com/cl/i/ndlj7k',
            description: {
                genre: 'Simulation',
                platform: 'Android',
                modFeatures: 'Unlimited Money – All Cars Unlocked',
                overview: `Get a realistic and unrestricted car driving experience with Extreme Car Driving Simulator Modded! Explore a vast open city with your favorite cars, perform amazing stunts and various challenges without limits. The modded version provides you with unlimited money to buy and customize all the cars you dream of.`,
                keyFeatures: [
                    'Huge open world city.',
                    'Realistic driving physics.',
                    'Real car damage.',
                    'Lots of luxury cars to unlock and drive.'
                ]
            },
        },
        {
            id: 4,
            title: 'CarX Drift Racing 2',
            category: 'Racing',
            image: 'images/CarX Drift Racing 2.png',
            size: '1.9 GB',
            rating: '4.7',
            downloadUrl: 'https://installchecker.com/cl/i/kld8q9',
            description: {
                genre: 'Racing',
                platform: 'Android',
                modFeatures: 'Unlimited Money – All Cars Unlocked',
                overview: `Become the undisputed drift king with CarX Drift Racing 2 Modded! This game offers an incredibly realistic racing and drifting experience, with high-quality graphics and advanced car physics. The modded version gives you unlimited money to customize and buy all the cars you need to master the art of drifting.`,
                keyFeatures: [
                    'Realistic drift physics.',
                    'Stunning graphics and car details.',
                    'Online multiplayer mode.',
                    'Lots of car customization options.'
                ],
                whyChooseMod: [
                    '<strong>Unlimited Money:</strong> To customize and buy all cars with ease.',
                    '<strong>All Cars Unlocked:</strong> Enjoy riding the fastest bikes from the start.'
                ]
            },
        },
        {
            id: 5,
            title: 'Real Racing 3',
            category: 'Racing',
            image: 'images/Real Racing 3.png',
            size: '76 MB',
            rating: '4.6',
            downloadUrl: 'https://installchecker.com/cl/i/r75jov',
            description: {
                genre: 'Racing',
                platform: 'Android',
                modFeatures: 'Unlimited Money & Gold – All Cars Unlocked',
                overview: `Enjoy the ultimate car racing experience with Real Racing 3 Modded! This game is a benchmark in realistic car racing games on mobile devices, featuring over 250 licensed vehicles and 19 real tracks. The modded version gives you unlimited money and gold to buy and upgrade all the luxury cars you've always dreamed of driving.`,
                keyFeatures: [
                    'Over 250 real cars.',
                    'Real tracks from all over the world.',
                    'Stunning graphics and precise details.',
                    'Various racing events and daily challenges.'
                ],
                whyChooseMod: [
                    '<strong>Unlimited Money & Gold:</strong> To buy and upgrade all luxury cars.',
                    '<strong>All Cars Unlocked:</strong> Enjoy driving all available cars from the start.'
                ]
            },
        },
        {
            id: 6,
            title: 'CSR Racing 2',
            category: 'Racing',
            image: 'images/CSR Racing 2.png',
            size: '3.3 GB',
            rating: '4.5',
            downloadUrl: 'https://installchecker.com/cl/i/42xmwj',
            description: {
                genre: 'Racing',
                platform: 'Android',
                modFeatures: 'Unlimited Money – All Cars Unlocked',
                overview: `Hit high-speed drag races with CSR Racing 2 Modded! This game features high-quality graphics, stunning car details, and a wide range of supercar. With the modded version, you'll have unlimited money to buy and upgrade the fastest cars in the game, ensuring your victory in every race.`,
                keyFeatures: [
                    'Stunning graphical fidelity.',
                    'Large collection of licensed cars.',
                    'Full car customization.',
                    'Online multiplayer mode.'
                ]
            },
        },
        {
            id: 7,
            title: 'MadOut2 BigCityOnline',
            category: 'Action',
            image: 'images/MadOut2 BigCityOnline.png',
            size: '945 MB',
            rating: '4.3',
            downloadUrl: 'https://installchecker.com/cl/i/1onqld',
            description: {
                genre: 'Action',
                platform: 'Android',
                modFeatures: 'Unlimited Money – All Items Unlocked',
                overview: `Explore a vast and exciting crime city with MadOut2 BigCityOnline Modded! This open-world game offers you complete freedom of movement and many activities, inspired by games like GTA. With the modded version, you'll get unlimited money and full access to all items from the start.`,
                keyFeatures: [
                    'Huge open world to explore.',
                    'Lots of missions and challenges.',
                    'Wide range of weapons and vehicles.',
                    'Online multiplayer mode.'
                ]
            },
        },
        {
            id: 8,
            title: 'Drift Max Pro',
            category: 'Racing',
            image: 'images/Drift Max Pro.png',
            size: '430 MB',
            rating: '4.4',
            downloadUrl: 'https://installchecker.com/cl/i/37evwn',
            description: {
                genre: 'Racing',
                platform: 'Android',
                modFeatures: 'Unlimited Money – All Cars Unlocked',
                overview: `Master the art of drifting and become the best with Drift Max Pro Modded! This game offers a fun and realistic drifting experience, with many options to customize your car to suit your style. The modded version gives you unlimited money and all cars unlocked, so you can enjoy all possibilities from the start.`,
                keyFeatures: [
                    'Advanced drift physics.',
                    'Lots of drift tracks.',
                    'Comprehensive car customization.',
                    'Multiple game modes.'
                ]
            },
        },
        {
            id: 9,
            title: 'Beach Buggy Racing 2',
            category: 'Racing',
            image: 'images/Beach Buggy Racing 2.png',
            size: '236 MB',
            rating: '4.2',
            downloadUrl: 'https://installchecker.com/cl/i/mej7vm',
            description: {
                genre: 'Racing',
                platform: 'Android',
                modFeatures: 'Unlimited Money – All Drivers & Vehicles Unlocked',
                overview: `Hit the beach for fun and exciting races with Beach Buggy Racing 2 Modded! This game offers a kart racing experience filled with special abilities and fun chaos. With the modded version, you'll get unlimited money to upgrade your vehicles, plus all drivers and vehicles available in the game unlocked.`,
                keyFeatures: [
                    'Fun kart races.',
                    'Unique special abilities.',
                    'Customizable characters and cars.',
                    'Colorful cartoon graphics.'
                ]
            },
        },
        {
            id: 10,
            title: 'Race Master 3D: Car Racing',
            category: 'Racing',
            image: 'images/Race Master 3D Car Racing.png',
            size: '170 MB',
            rating: '4.0',
            downloadUrl: 'https://installchecker.com/cl/i/qk7xo4',
            description: {
                genre: 'Car Racing',
                platform: 'Android',
                modFeatures: 'Unlimited Money & Gems – No Ads – All Unlocked',
                overview: `Get ready for non-stop races with Race Master 3D! This adrenaline-fueled game features high-speed tracks, sharp turns, and exciting obstacles. The MOD APK version takes the experience to a new level with all features unlocked, unlimited resources, and an ad-free experience for seamless play.`,
                keyFeatures: [
                    'Wide range of customizable cars.',
                    'Multiple game modes: Career, Time Trial, and Multiplayer.',
                    'Smooth and intuitive controls.',
                    'Realistic 3D graphics with dynamic lighting effects.',
                    'Full car upgrades: Engine, Tires, Suspension, and more.',
                    'Competitive online races with fair matchmaking.'
                ],
                whyChooseMod: [
                    '✔️ <strong>Everything Unlocked:</strong> Enjoy all features and content from the start.',
                    '✔️ <strong>No Ads:</strong> Smooth and uninterrupted gaming experience.',
                    '✔️ <strong>Unlimited Money & Gems:</strong> Upgrade and buy everything you need effortlessly.',
                    '✔️ <strong>Optimized and Smooth Gameplay:</strong> Enjoy the best game performance.'
                ]
            },
        }
    ];

    // --- Theme Toggle ---
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.body.removeAttribute('data-theme');
            themeToggle.querySelector('i').className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.querySelector('i').className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        }
    });

    if (localStorage.getItem('theme') === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    } else {
        document.body.removeAttribute('data-theme');
        themeToggle.querySelector('i').className = 'fas fa-moon';
    }

    // --- Game Display Functions ---
    function createGameCard(game) {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.dataset.gameId = game.id;
        
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;
        img.onerror = function() {
            this.src = 'images/default-game.png';
        };
        
        card.innerHTML = `
            ${img.outerHTML}
            <h3>${game.title}</h3>
            <p>Size: ${game.size} | Rating: ${game.rating}</p>
        `;
        
        card.addEventListener('click', () => showGameDetail(game));
        
        return card;
    }

    function renderNewGamesSwiper(games) {
        newGamesSwiperWrapper.innerHTML = '';
        const recentGames = games.slice(0, 10);
        recentGames.forEach(game => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.appendChild(createGameCard(game));
            newGamesSwiperWrapper.appendChild(slide);
        });

        if (window.newGamesSwiper && typeof window.newGamesSwiper.destroy === 'function') {
            window.newGamesSwiper.destroy(true, true);
        }

        window.newGamesSwiper = new Swiper('.new-games-list-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 2.5,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 25
                }
            }
        });
    }

    function renderAllGamesGrid(games) {
        allGamesGrid.innerHTML = '';
        if (games.length === 0) {
            allGamesGrid.innerHTML = '<p style="text-align: center; color: var(--light-text-color);">No games to display.</p>';
            return;
        }
        games.forEach(game => {
            const item = document.createElement('div');
            item.classList.add('game-list-item');
            item.dataset.gameId = game.id;
            
            const img = document.createElement('img');
            img.src = game.image;
            img.alt = game.title;
            img.onerror = function() {
                this.src = 'images/default-game.png';
            };
            
            item.appendChild(img);
            item.innerHTML += `
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <p>Size: ${game.size} | Rating: ${game.rating}</p>
                </div>
                <button class="download-button"><i class="fas fa-download"></i></button>
            `;
            
            item.addEventListener('click', (e) => {
                if (e.target.closest('.download-button')) {
                    return;
                }
                showGameDetail(game);
            });
            
            // Note: The click event for the grid download button now also points to showGameDetail
            // We'll handle the modal/countdown logic inside showGameDetail
            item.querySelector('.download-button').addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent opening detail page
                showGameDetail(game); // Go to detail page first, then initiate download sequence
            });
            
            allGamesGrid.appendChild(item);
        });
    }

    // --- Search Function ---
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query === '') {
            allGamesTitle.textContent = 'All Games';
            newGamesSection.classList.remove('hidden');
            renderAllGamesGrid(gamesData);
            renderNewGamesSwiper(gamesData);
            return;
        }
        
        const filteredGames = gamesData.filter(game => game.title.toLowerCase().includes(query));
        allGamesTitle.textContent = `Search Results for "${query}"`;
        newGamesSection.classList.add('hidden');
        renderAllGamesGrid(filteredGames);
        if (filteredGames.length === 0) {
            allGamesGrid.innerHTML = `<p style="text-align: center; color: var(--light-text-color);">No results matching "${query}".</p>`;
        }
    };

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // --- Game Detail Page and New Download Logic ---
    function showGameDetail(game) {
        contentSections.forEach(section => section.classList.add('hidden'));
        gameDetailSection.classList.remove('hidden');
        
        detailGameThumbnail.src = game.image;
        detailGameThumbnail.alt = game.title;
        detailGameThumbnail.onerror = function() {
            this.src = 'images/default-game.png';
        };
        
        detailGameTitle.textContent = game.title;
        detailGameSize.textContent = game.size;
        detailGameRating.textContent = game.rating;
        
        const desc = game.description;
        detailGameDescription.innerHTML = `
            <p class="game-meta">🎮 Genre: <strong>${desc.genre}</strong> | 📱 Platform: <strong>${desc.platform}</strong></p>
            <p class="game-mod-features">🆓 MOD Features: <strong>${desc.modFeatures}</strong></p>
            <h3>🔥 Game Overview:</h3>
            <p>${desc.overview}</p>
            <h3>🎯 Key Features:</h3>
            <ul>
                ${desc.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <h3>🎮 Why choose the MOD APK version?</h3>
            <ul>
                ${desc.whyChooseMod ? desc.whyChooseMod.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
            <p class="download-call-to-action">📥 Download now and become the ultimate racing legend!</p>
        `;

        // Reset and hide download related elements
        openDownloadProcessButton.classList.remove('hidden'); // Show original button
        countdownContainer.classList.add('hidden'); // Hide countdown
        finalDownloadLink.classList.add('hidden'); // Hide final link
        finalDownloadLink.href = '#'; // Reset href
        
        // Set up click listener for the main download button
        openDownloadProcessButton.onclick = () => initiateDownloadProcess(game.downloadUrl);
        window.scrollTo(0, 0);
    }

    // --- New Download Process Function ---
    function initiateDownloadProcess(downloadUrl) {
        openDownloadProcessButton.classList.add('hidden'); // Hide the main download button permanently after click
        countdownContainer.classList.remove('hidden'); // Show the countdown container
        finalDownloadLink.classList.add('hidden'); // Ensure final link is hidden initially

        let timeLeft = 5; // Start countdown from 5 seconds
        countdownTimer.textContent = `Generating Link in ${timeLeft}s...`;

        const countdownInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                countdownTimer.textContent = `Generating Link in ${timeLeft}s...`;
            } else {
                clearInterval(countdownInterval);
                countdownContainer.classList.add('hidden'); // Hide countdown container
                finalDownloadLink.href = downloadUrl; // Set the actual download URL
                finalDownloadLink.classList.remove('hidden'); // Show the final download link
                finalDownloadLink.click(); // Automatically click the link to open in new tab
                
                // No setTimeout to re-show original button. The final link stays visible.
            }
        }, 1000); // Update every 1 second
    }

    backToHomeButton.addEventListener('click', () => {
        contentSections.forEach(section => section.classList.add('hidden'));
        newGamesSection.classList.remove('hidden');
        allGamesSection.classList.remove('hidden');
        searchInput.value = '';
        performSearch();
        
        // Ensure download elements are reset when going back home
        openDownloadProcessButton.classList.remove('hidden');
        countdownContainer.classList.add('hidden');
        finalDownloadLink.classList.add('hidden');
    });

    // --- Modal Logic (kept if still needed for other purposes, but the main download flow bypasses it) ---
    function showDownloadModal(game) {
        // This modal logic is now largely bypassed by the new direct download method
        // But if you have other uses for a modal, it can remain.
        downloadLinksContainer.innerHTML = '';
        iframeContainer.classList.add('hidden');
        contentIframe.src = '';
        
        if (game.downloadUrl) {
            modalDescription.classList.remove('hidden');
            const button = document.createElement('button');
            button.classList.add('download-link');
            button.innerHTML = `⚡ Fast Download`;
            button.addEventListener('click', () => {
                downloadLinksContainer.classList.add('hidden');
                modalDescription.classList.add('hidden');
                iframeContainer.classList.remove('hidden');
                contentIframe.src = game.downloadUrl;
            });
            downloadLinksContainer.appendChild(button);
        } else {
            downloadLinksContainer.innerHTML = '<p>Download links not available for this game currently.</p>';
            modalDescription.classList.add('hidden');
        }
        
        downloadLinksContainer.classList.remove('hidden');
        modalDescription.classList.remove('hidden');
        downloadModal.style.display = 'flex';
    }

    function closeModal() {
        downloadModal.style.display = 'none';
        iframeContainer.classList.add('hidden');
        contentIframe.src = '';
    }

    closeModalButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == downloadModal) {
            closeModal();
        }
    });

    // --- Initial Page Load ---
    renderNewGamesSwiper(gamesData);
    renderAllGamesGrid(gamesData);
});
