
    function updateCountdown() {
        const targetDate = new Date('January 1, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display results
        document.getElementById('days').textContent = `${days} ${getTranslation('days')}`;
        document.getElementById('hours').textContent = `${hours} ${getTranslation('hours')}`;
        document.getElementById('minutes').textContent = `${minutes} ${getTranslation('minutes')}`;
        document.getElementById('seconds').textContent = `${seconds} ${getTranslation('seconds')}`;

        // If the countdown is over
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = getTranslation('happyNewYear');
        }
    }

    // Translation function
    function getTranslation(key) {
        const lang = navigator.language || navigator.userLanguage;
        const translations = {
            en: {
                heading: "Countdown to New Year 2025",
                days: "Days",
                hours: "Hours",
                minutes: "Minutes",
                seconds: "Seconds",
                happyNewYear: "Happy New Year!"
            },
            ru: {
                heading: "Обратный отсчет до Нового года 2025",
                days: "Дней",
                hours: "Часов",
                minutes: "Минут",
                seconds: "Секунд",
                happyNewYear: "С Новым Годом!"
            }
        };

        // Set default to English if the language is not supported
        const userLang = lang.startsWith('ru') ? 'ru' : 'en';
        return translations[userLang][key];
    }

    // Update the heading and page title based on the user's language
    document.getElementById('heading').textContent = getTranslation('heading');
    document.getElementById('pageTitle').textContent = getTranslation('heading');

    // Update the countdown every second

setInterval(updateCountdown, 1000);
