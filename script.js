document.addEventListener('DOMContentLoaded', () => {
    // --- Element Variables ---
    const themeToggle = document.getElementById('themeToggle');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const contentSections = document.querySelectorAll('.content-section');
    const discoverSection = document.getElementById('discover-section');
    const gameDetailSection = document.getElementById('game-detail-section');
    const backToHomeButton = document.getElementById('backToHome');

    const trendingGamesSwiperWrapper = document.getElementById('trendingGames');
    const newGamesContainer = document.getElementById('newGames');
    const trendingTitle = document.getElementById('trendingTitle');
    const allGamesTitle = document.getElementById('allGamesTitle');
    const detailGameThumbnail = document.getElementById('detailGameThumbnail');
    const detailGameTitle = document.getElementById('detailGameTitle');
    const detailGameSize = document.getElementById('detailGameSize');
    const detailGameRating = document.getElementById('detailGameRating');
    const detailGameDescription = document.getElementById('detailGameDescription');
    const screenshotsContainer = document.getElementById('screenshotsContainer');
    const openDownloadModalButton = document.getElementById('openDownloadModal');
    const downloadModal = document.getElementById('downloadModal');
    const closeModalButton = document.getElementById('closeModal');
    const downloadLinksContainer = document.getElementById('downloadLinksContainer');
    const iframeContainer = document.getElementById('iframeContainer');
    const contentIframe = document.getElementById('contentIframe');
    const modalDescription = document.getElementById('modalDescription');

    // --- New Screenshot Elements ---
    let currentScreenshots = [];
    let currentScreenshotIndex = 0;
    const screenshotDisplay = document.createElement('img');
    const screenshotNav = document.createElement('div');
    const prevScreenshotBtn = document.createElement('button');
    const nextScreenshotBtn = document.createElement('button');
    const screenshotCounter = document.createElement('span');

    // Initialize gallery elements once
    screenshotDisplay.classList.add('current-screenshot');
    prevScreenshotBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    nextScreenshotBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    prevScreenshotBtn.classList.add('screenshot-nav-btn', 'prev-btn');
    nextScreenshotBtn.classList.add('screenshot-nav-btn', 'next-btn');
    screenshotCounter.classList.add('screenshot-counter');
    screenshotNav.classList.add('screenshot-navigation');
    screenshotNav.append(prevScreenshotBtn, screenshotCounter, nextScreenshotBtn);

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
            screenshots: [
                'images/hillclimb1.png',
                'images/hillclimb2.png',
                'images/hillclimb3.png',
                'images/hillclimb4.png',
                'images/hillclimb5.png',
                'images/hillclimb6.png'
            ]
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
                ],
                whyChooseMod: [
                    '<strong>Unlimited Money:</strong> To buy and upgrade all motorcycles.',
                    '<strong>All Bikes Unlocked:</strong> Enjoy riding the fastest bikes from the start.'
                ]
            },
            screenshots: [
                'images/trafficrider1.png',
                'images/trafficrider2.png',
                'images/trafficrider3.png',
                'images/trafficrider4.png',
                'images/trafficrider5.png',
                'images/trafficrider6.png'
            ]
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
                ],
                whyChooseMod: [
                    '<strong>Unlimited Money:</strong> To buy all cars and customizations effortlessly.',
                    '<strong>All Cars Unlocked:</strong> Drive any car you want from the start.'
                ]
            },
            screenshots: [
                'images/extremecardriving1.png',
                'images/extremecardriving2.png',
                'images/extremecardriving3.png',
                'images/extremecardriving4.png',
                'images/extremecardriving5.png',
                'images/extremecardriving6.png',
                'images/extremecardriving7.png',
                'images/extremecardriving8.png'
            ]
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
                    '<strong>All Cars Unlocked:</strong> Start drifting with your favorite car without waiting.'
                ]
            },
            screenshots: [
                'images/carxdriftracing21.png',
                'images/carxdriftracing22.png',
                'images/carxdriftracing23.png',
                'images/carxdriftracing24.png',
                'images/carxdriftracing25.png',
                'images/carxdriftracing26.png',
                'images/carxdriftracing27.png',
                'images/carxdriftracing28.png'
            ]
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
            screenshots: [
                'images/realracing3.2.png',
                'images/realracing3.3.png',
                'images/realracing3.4.png',
                'images/realracing3.5.png',
                'images/realracing3.6.png',
                'images/realracing3.7.png',
                'images/realracing3.8.png',
                'images/realracing3.9.png',
                'images/realracing3.10.png',
                'images/realracing3.11.png'
            ]
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
            screenshots: [
                'images/csrracing21.png',
                'images/csrracing22.png',
                'images/csrracing23.png',
                'images/csrracing24.png'
            ]
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
            screenshots: [
                'images/madout2bigcityonline1.png',
                'images/madout2bigcityonline2.png',
                'images/madout2bigcityonline3.png',
                'images/madout2bigcityonline4.png',
                'images/madout2bigcityonline5.png',
                'images/madout2bigcityonline6.png',
                'images/madout2bigcityonline7.png'
            ]
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
            screenshots: [
                'images/driftmaxpro1.png',
                'images/driftmaxpro2.png',
                'images/driftmaxpro3.png',
                'images/driftmaxpro4.png',
                'images/driftmaxpro5.png',
                'images/driftmaxpro6.png',
                'images/driftmaxpro7.png'
            ]
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
            screenshots: [
                'images/beachbuggyracing2.1.png',
                'images/beachbuggyracing2.2.png',
                'images/beachbuggyracing2.3.png',
                'images/beachbuggyracing2.4.png',
                'images/beachbuggyracing2.5.png',
                'images/beachbuggyracing2.6.png'
            ]
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
            screenshots: [
                'images/racemaster3d1.png',
                'images/racemaster3d2.png',
                'images/racemaster3d3.png',
                'images/racemaster3d4.png',
                'images/racemaster3d5.png'
            ]
        }
    ];

    // --- Swiper for New Games (auto and loop) ---
    let trendingSwiperInstance;
    function initializeTrendingSwiper() {
        if (trendingSwiperInstance) {
            trendingSwiperInstance.destroy(true, true);
        }
        trendingSwiperInstance = new Swiper('#trendingGamesSwiper', {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
            breakpoints: {
                640: {
                    slidesPerView: 2.5,
                    spaceBetween: 25
                },
                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 35
                },
                1200: {
                    slidesPerView: 5.5,
                    spaceBetween: 40
                }
            }
        });
    }

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
    function createTrendingGameSlideContent(game) {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.dataset.gameId = game.id;
        
        // Ensure the image path is correct and unique for each game
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;
        img.onerror = function() {
            this.src = 'images/default-game.png'; // Fallback image if the specified image fails to load
        };
        
        card.innerHTML = '';
        card.appendChild(img);
        card.innerHTML += `<h3>${game.title}</h3><p>${game.category}</p>`;
        
        // Add click event to the entire card
        card.style.cursor = 'pointer'; // Change cursor to pointer to indicate it's clickable
        card.addEventListener('click', (e) => {
            // Prevent the click event from bubbling up to parent elements
            e.stopPropagation();
            showGameDetail(game);
        });
        
        return card;
    }

    function createGameListItem(game) {
        const item = document.createElement('div');
        item.classList.add('game-list-item');
        item.dataset.gameId = game.id;
        
        // Ensure the image path is correct and unique for each game
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;
        img.onerror = function() {
            this.src = 'images/default-game.png'; // Fallback image if the specified image fails to load
        };
        
        item.innerHTML = '';
        item.appendChild(img);
        item.innerHTML += `
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>Size: ${game.size} | Rating: ${game.rating}</p>
            </div>
            <button class="download-button"><i class="fas fa-download"></i></button>
        `;
        
        // Make the entire item clickable except the download button
        item.style.cursor = 'pointer'; // Change cursor to pointer to indicate it's clickable
        item.addEventListener('click', (e) => {
            // Check if the click was on the download button
            if (e.target.closest('.download-button')) {
                return; // If clicked on download button, do nothing (let its own event handler handle it)
            }
            showGameDetail(game);
        });
        
        // Add click event to the download button separately
        item.querySelector('.download-button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click from bubbling up to the parent item
            showDownloadModal(game);
        });
        
        return item;
    }

    function renderNewGames(games) {
        trendingGamesSwiperWrapper.innerHTML = '';
        if (games.length > 0) {
            games.forEach(game => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');
                slide.appendChild(createTrendingGameSlideContent(game));
                trendingGamesSwiperWrapper.appendChild(slide);
            });
        }
        initializeTrendingSwiper();
    }

    function renderGameList(container, games) {
        container.innerHTML = '';
        if (games.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--light-text-color);">No games to display.</p>';
            return;
        }
        games.forEach(game => {
            container.appendChild(createGameListItem(game));
        });
    }

    // --- Search Function ---
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        const newGamesSection = document.getElementById('trendingGamesSwiper');
        if (query === '') {
            trendingTitle.classList.remove('hidden');
            newGamesSection.classList.remove('hidden');
            allGamesTitle.textContent = 'All Games';
            renderGameList(newGamesContainer, gamesData);
            renderNewGames(gamesData.slice(0, 7)); // Re-render trending games when search is cleared
            return;
        }
        trendingTitle.classList.add('hidden');
        newGamesSection.classList.add('hidden');
        const filteredGames = gamesData.filter(game => game.title.toLowerCase().includes(query));
        allGamesTitle.textContent = `Search Results for "${query}"`;
        renderGameList(newGamesContainer, filteredGames);
        if (filteredGames.length === 0) {
            newGamesContainer.innerHTML = `<p style="text-align: center; color: var(--light-text-color);">No results matching "${query}".</p>`;
        }
    };

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // --- New Screenshot Gallery Functions ---
    function updateScreenshotDisplay() {
        if (currentScreenshots.length === 0) {
            screenshotsContainer.innerHTML = '<p style="color: var(--light-text-color);">No screenshots available.</p>';
            screenshotNav.classList.add('hidden');
            return;
        }
        screenshotNav.classList.remove('hidden');
        screenshotDisplay.src = currentScreenshots[currentScreenshotIndex];
        screenshotDisplay.alt = `Screenshot ${currentScreenshotIndex + 1}`;
        screenshotCounter.textContent = `${currentScreenshotIndex + 1}/${currentScreenshots.length}`;
        
        prevScreenshotBtn.style.display = (currentScreenshotIndex > 0) ? 'block' : 'none';
        nextScreenshotBtn.style.display = (currentScreenshotIndex < currentScreenshots.length - 1) ? 'block' : 'none';
        
        if (currentScreenshots.length === 1) {
            prevScreenshotBtn.style.display = 'none';
            nextScreenshotBtn.style.display = 'none';
            screenshotNav.classList.add('hidden');
        }
    }

    function showNextScreenshot() {
        if (currentScreenshotIndex < currentScreenshots.length - 1) {
            currentScreenshotIndex++;
            updateScreenshotDisplay();
        }
    }

    function showPrevScreenshot() {
        if (currentScreenshotIndex > 0) {
            currentScreenshotIndex--;
            updateScreenshotDisplay();
        }
    }

    prevScreenshotBtn.addEventListener('click', showPrevScreenshot);
    nextScreenshotBtn.addEventListener('click', showNextScreenshot);

    // --- Game Detail Page ---
    function showGameDetail(game) {
        contentSections.forEach(section => section.classList.add('hidden'));
        gameDetailSection.classList.remove('hidden');
        
        // Ensure the thumbnail image is correct
        detailGameThumbnail.src = game.image;
        detailGameThumbnail.alt = game.title;
        detailGameThumbnail.onerror = function() {
            this.src = 'images/default-game.png'; // Fallback image if the specified image fails to load
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

        // Setup screenshot gallery
        screenshotsContainer.innerHTML = '';
        currentScreenshots = game.screenshots || [];
        currentScreenshotIndex = 0;
        
        if (currentScreenshots.length > 0) {
            screenshotsContainer.appendChild(screenshotDisplay);
            screenshotsContainer.appendChild(screenshotNav);
        }
        
        updateScreenshotDisplay();
        openDownloadModalButton.onclick = () => showDownloadModal(game);
        window.scrollTo(0, 0);
    }

    backToHomeButton.addEventListener('click', () => {
        contentSections.forEach(section => section.classList.add('hidden'));
        discoverSection.classList.remove('hidden');
        searchInput.value = '';
        performSearch();
    });

    // --- Download Modal ---
    function showDownloadModal(game) {
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
    renderNewGames(gamesData.slice(0, 7));
    renderGameList(newGamesContainer, gamesData);
});