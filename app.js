// Application State
let currentLanguage = 'arabic';
let currentLesson = null;
let currentExerciseIndex = 0;
let lessons = [];
let userProgress = {};

// Typing Stats
let startTime = null;
let correctChars = 0;
let totalChars = 0;
let errors = 0;
let currentCharIndex = 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', function () {
    loadProgress();
    selectLanguage('arabic');
});

// Language Selection
function selectLanguage(lang) {
    currentLanguage = lang;
    lessons = lessonsData[lang];

    // Update UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

    // Update direction
    const container = document.querySelector('.container');
    if (lang === 'arabic') {
        container.style.direction = 'rtl';
    } else {
        container.style.direction = 'ltr';
    }

    renderLessons();
    updateOverallProgress();
}

// Render Lessons Grid
function renderLessons() {
    const grid = document.getElementById('lessonsGrid');
    grid.innerHTML = '';

    lessons.forEach((lesson, index) => {
        const lessonProgress = userProgress[currentLanguage]?.[index] || { completed: false, bestWPM: 0, bestAccuracy: 0 };

        const card = document.createElement('div');
        card.className = 'lesson-card';
        if (lessonProgress.completed) {
            card.classList.add('completed');
        }

        card.innerHTML = `
            <h3>المستوى ${lesson.level} - الدرس ${lesson.lesson}</h3>
            <p><strong>${lesson.title}</strong></p>
            <p>${lesson.description}</p>
            <div class="lesson-stats">
                <span>🎯 ${lesson.minAccuracy}%+ دقة</span>
                <span>⚡ ${lesson.targetWPM} WPM</span>
            </div>
            ${lessonProgress.completed ? `
                <div class="lesson-stats" style="background: rgba(76, 175, 80, 0.1); padding: 5px; border-radius: 5px; margin-top: 10px;">
                    <span>✅ الأفضل: ${lessonProgress.bestWPM} WPM</span>
                    <span>${lessonProgress.bestAccuracy}% دقة</span>
                </div>
            ` : ''}
        `;

        card.onclick = () => startLesson(index);
        grid.appendChild(card);
    });
}

// Update Overall Progress
function updateOverallProgress() {
    const totalLessons = lessons.length;
    const completedLessons = lessons.filter((_, index) =>
        userProgress[currentLanguage]?.[index]?.completed
    ).length;

    const percentage = (completedLessons / totalLessons * 100).toFixed(0);
    document.getElementById('overallProgress').style.width = percentage + '%';
    document.getElementById('progressText').textContent =
        `${completedLessons} من ${totalLessons} دروس مكتملة`;
}

// Start Lesson
function startLesson(lessonIndex) {
    currentLesson = lessons[lessonIndex];
    currentExerciseIndex = 0;

    // Show typing section
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('typingSection').classList.add('active');

    // Update lesson header
    document.getElementById('currentLessonTitle').textContent =
        `المستوى ${currentLesson.level} - الدرس ${currentLesson.lesson}: ${currentLesson.title}`;
    document.getElementById('currentLessonDesc').textContent = currentLesson.description;

    // Render keyboard
    renderKeyboard();

    // Load first exercise
    loadExercise();
}

// Load Exercise
function loadExercise() {
    const exercise = currentLesson.exercises[currentExerciseIndex];

    // Reset stats
    startTime = null;
    correctChars = 0;
    totalChars = 0;
    errors = 0;
    currentCharIndex = 0;

    // Update exercise number
    document.getElementById('exerciseNumber').textContent =
        `تمرين ${currentExerciseIndex + 1} من ${currentLesson.exercises.length}`;

    // Render text
    const textDisplay = document.getElementById('textDisplay');
    textDisplay.innerHTML = '';
    textDisplay.className = 'text-to-type';

    if (currentLanguage === 'arabic') {
        textDisplay.classList.add('rtl');
    }

    exercise.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char;
        if (index === 0) {
            span.classList.add('current');
        }
        textDisplay.appendChild(span);
    });

    // Clear and focus input
    const input = document.getElementById('typingInput');
    input.value = '';
    input.focus();

    // Update stats display
    updateStatsDisplay();

    // Highlight current key
    highlightKey(exercise[0]);
}

// Render Keyboard
function renderKeyboard() {
    const layout = keyboardLayouts[currentLanguage];
    const container = document.getElementById('keyboardContainer');
    container.innerHTML = '';

    layout.rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';

        row.forEach(keyData => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key';
            keyDiv.textContent = keyData.key;
            keyDiv.dataset.key = keyData.key.toLowerCase();
            keyDiv.dataset.finger = keyData.finger;

            if (keyData.isWide) {
                keyDiv.classList.add('wide');
            }
            if (keyData.isHome) {
                keyDiv.classList.add('home');
            }
            if (keyData.hasBump) {
                keyDiv.classList.add('bump');
            }

            // Default color (dark gray) - highlighting happens in highlightKey()
            // No inline background style needed anymore

            rowDiv.appendChild(keyDiv);
        });

        container.appendChild(rowDiv);
    });
}

// Helper to darken color
function darkenColor(color) {
    // Simple darkening by reducing brightness
    return color + '99'; // Add some transparency
}

// Highlight Key
function highlightKey(char) {
    // Remove previous highlights
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('highlight');
        key.style.background = ''; // Reset to CSS default
        key.style.transform = '';
    });

    // Highlight current key
    const keyElement = document.querySelector(`.key[data-key="${char.toLowerCase()}"]`);
    if (keyElement) {
        keyElement.classList.add('highlight');

        // Get finger color for this specific key
        const finger = keyElement.dataset.finger;
        const color = getColorForFinger(finger, currentLanguage);

        // Apply highlight color
        keyElement.style.background = `linear-gradient(135deg, ${color} 0%, ${darkenColor(color)} 100%)`;
        keyElement.style.transform = 'scale(1.1) translateY(-2px)';
        keyElement.style.zIndex = '10';
        keyElement.style.boxShadow = `0 0 15px ${color}`;
    }
}

// Handle Typing Input
document.getElementById('typingInput').addEventListener('input', function (e) {
    if (!startTime) {
        startTime = new Date();
    }

    const typedText = e.target.value;
    const exercise = currentLesson.exercises[currentExerciseIndex];
    const chars = document.querySelectorAll('.text-to-type .char');

    // Clear all current classes
    chars.forEach(char => {
        char.classList.remove('current', 'correct', 'incorrect');
    });

    // Check each character
    let allCorrect = true;
    for (let i = 0; i < typedText.length; i++) {
        if (i < exercise.length) {
            if (typedText[i] === exercise[i]) {
                chars[i].classList.add('correct');
            } else {
                chars[i].classList.add('incorrect');
                allCorrect = false;
                errors++;

                // Flash incorrect key
                const keyElement = document.querySelector(`.key[data-key="${exercise[i].toLowerCase()}"]`);
                if (keyElement) {
                    keyElement.classList.add('incorrect-press');
                    setTimeout(() => keyElement.classList.remove('incorrect-press'), 300);
                }
            }
        }
    }

    // Highlight current character
    if (typedText.length < exercise.length) {
        chars[typedText.length].classList.add('current');
        highlightKey(exercise[typedText.length]);

        // Flash correct key press
        if (typedText.length > 0 && typedText[typedText.length - 1] === exercise[typedText.length - 1]) {
            const keyElement = document.querySelector(`.key[data-key="${exercise[typedText.length - 1].toLowerCase()}"]`);
            if (keyElement) {
                keyElement.classList.add('correct-press');
                setTimeout(() => keyElement.classList.remove('correct-press'), 200);
            }
        }
    }

    totalChars = typedText.length;
    currentCharIndex = typedText.length;

    // Update stats
    updateStatsDisplay();

    // Check if exercise is complete
    if (typedText === exercise) {
        setTimeout(() => {
            completeExercise();
        }, 500);
    }
});

// Update Stats Display
function updateStatsDisplay() {
    const exercise = currentLesson.exercises[currentExerciseIndex];

    // Calculate WPM
    let wpm = 0;
    if (startTime) {
        const timeElapsed = (new Date() - startTime) / 1000 / 60; // minutes
        const wordsTyped = currentCharIndex / 5; // Standard: 5 chars = 1 word
        wpm = Math.round(wordsTyped / timeElapsed) || 0;
    }

    // Calculate accuracy
    const accuracy = totalChars > 0 ? Math.round(((totalChars - errors) / totalChars) * 100) : 100;

    // Calculate lesson progress
    const progress = Math.round((currentCharIndex / exercise.length) * 100);

    document.getElementById('wpmDisplay').textContent = wpm;
    document.getElementById('accuracyDisplay').textContent = accuracy;
    document.getElementById('errorsDisplay').textContent = errors;
    document.getElementById('lessonProgress').textContent = progress;
}

// Complete Exercise
function completeExercise() {
    const isLastExercise = currentExerciseIndex === currentLesson.exercises.length - 1;

    if (isLastExercise) {
        // Show results
        showResults();
    } else {
        // Auto-advance to next exercise
        currentExerciseIndex++;
        loadExercise();
    }
}

// Show Results
function showResults() {
    const exercise = currentLesson.exercises.join(' ');
    const timeElapsed = (new Date() - startTime) / 1000 / 60;
    const wordsTyped = exercise.length / 5;
    const wpm = Math.round(wordsTyped / timeElapsed);
    const accuracy = Math.round(((totalChars - errors) / totalChars) * 100);

    // Update results modal
    document.getElementById('finalWPM').textContent = wpm;
    document.getElementById('finalAccuracy').textContent = accuracy;

    const passed = accuracy >= currentLesson.minAccuracy && wpm >= currentLesson.targetWPM;

    if (passed) {
        document.getElementById('resultsTitle').textContent = '🎉 ممتاز! لقد نجحت!';
        document.getElementById('resultsMessage').textContent =
            `أحسنت! لقد أكملت هذا الدرس بنجاح. انتقل إلى الدرس التالي أو أعد المحاولة لتحسين نتيجتك.`;

        // Save progress
        const lessonIndex = lessons.indexOf(currentLesson);
        if (!userProgress[currentLanguage]) {
            userProgress[currentLanguage] = {};
        }
        if (!userProgress[currentLanguage][lessonIndex] ||
            wpm > (userProgress[currentLanguage][lessonIndex].bestWPM || 0)) {
            userProgress[currentLanguage][lessonIndex] = {
                completed: true,
                bestWPM: wpm,
                bestAccuracy: accuracy
            };
            saveProgress();
        }
    } else {
        document.getElementById('resultsTitle').textContent = '💪 حاول مرة أخرى!';
        const missingAccuracy = currentLesson.minAccuracy - accuracy;
        const missingWPM = currentLesson.targetWPM - wpm;
        let message = 'تحتاج إلى تحسين: ';
        if (accuracy < currentLesson.minAccuracy) {
            message += `الدقة (${missingAccuracy}%+ مطلوبة) `;
        }
        if (wpm < currentLesson.targetWPM) {
            message += `السرعة (${missingWPM}+ WPM مطلوبة)`;
        }
        document.getElementById('resultsMessage').textContent = message;
    }

    document.getElementById('resultsModal').classList.add('active');
}

// Results Actions
function nextLesson() {
    const currentIndex = lessons.indexOf(currentLesson);
    if (currentIndex < lessons.length - 1) {
        closeResults();
        startLesson(currentIndex + 1);
    } else {
        closeResults();
        backToMenu();
    }
}

function retryLesson() {
    closeResults();
    currentExerciseIndex = 0;
    loadExercise();
}

function closeResults() {
    document.getElementById('resultsModal').classList.remove('active');
    backToMenu();
}

// Navigation
function backToMenu() {
    document.getElementById('typingSection').classList.remove('active');
    document.getElementById('mainMenu').style.display = 'block';
    renderLessons();
    updateOverallProgress();
}

function previousExercise() {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        loadExercise();
    }
}

function nextExercise() {
    if (currentExerciseIndex < currentLesson.exercises.length - 1) {
        currentExerciseIndex++;
        loadExercise();
    }
}

// Save Progress to Firebase and localStorage
async function saveProgress() {
    // Always save to localStorage first (immediate, no network needed)
    localStorage.setItem('typingTutorProgress', JSON.stringify(userProgress));
    console.log('✅ Progress saved to localStorage');

    // Try to save to Firebase if available
    if (!isFirebaseReady()) {
        console.log('⚠️ Firebase not ready, progress saved locally only');
        return;
    }

    try {
        const docRef = db.collection('userProgress').doc(currentUserId);
        await docRef.set({
            progress: userProgress,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        console.log('✅ Progress saved to Firebase');
    } catch (error) {
        console.error('❌ Error saving to Firebase:', error);
        console.log('⚠️ Progress saved to localStorage only');
    }
}

// Load Progress from Firebase
async function loadProgressFromFirebase() {
    if (!isFirebaseReady()) {
        console.log('⚠️ Firebase not ready, using localStorage');
        loadProgressFromLocalStorage();
        return;
    }

    try {
        const docRef = db.collection('userProgress').doc(currentUserId);
        const doc = await docRef.get();

        if (doc.exists) {
            userProgress = doc.data().progress || {};
            console.log('✅ Progress loaded from Firebase');

            // Also save to localStorage as backup
            localStorage.setItem('typingTutorProgress', JSON.stringify(userProgress));

            // Update UI if we're on the main menu
            if (document.getElementById('mainMenu').style.display !== 'none') {
                renderLessons();
                updateOverallProgress();
            }
        } else {
            console.log('📝 No progress found in Firebase, checking localStorage');
            loadProgressFromLocalStorage();
        }
    } catch (error) {
        console.error('❌ Error loading from Firebase:', error);
        loadProgressFromLocalStorage();
    }
}

// Load Progress from localStorage (fallback)
function loadProgressFromLocalStorage() {
    const saved = localStorage.getItem('typingTutorProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
        console.log('✅ Progress loaded from localStorage');
    }
}

// Keep old loadProgress name for compatibility
function loadProgress() {
    loadProgressFromLocalStorage();
}

// Make loadProgressFromFirebase available globally for firebase-config.js
window.loadProgressFromFirebase = loadProgressFromFirebase;

// Keyboard event handler for physical keyboard
document.addEventListener('keydown', function (e) {
    if (document.activeElement.id === 'typingInput') {
        const key = e.key.toLowerCase();
        const keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
        }
    }
});

document.addEventListener('keyup', function (e) {
    const key = e.key.toLowerCase();
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});
