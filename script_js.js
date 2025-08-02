// Exercise data storage
let exercises = [];
let dailyGoal = 60; // minutes

// Motivational quotes
const quotes = [
    "The groundwork for all happiness is good health. - Leigh Hunt",
    "Take care of your body. It's the only place you have to live. - Jim Rohn",
    "Exercise is a celebration of what your body can do. Not a punishment for what you ate.",
    "A healthy outside starts from the inside. - Robert Urich",
    "Your body can do it. It's your mind you need to convince.",
    "The only bad workout is the one that didn't happen.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "Strong is what happens when you run out of weak.",
    "Don't put off tomorrow what you can do today.",
    "Success isn't given. It's earned in the gym.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Every workout is progress, no matter how small."
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadExercises();
    updateStats();
    updateMotivationalQuote();
    
    // Set random quote every 30 seconds
    setInterval(updateMotivationalQuote, 30000);
});

// Handle form submission
document.getElementById('exerciseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addExercise();
});

function addExercise() {
    const name = document.getElementById('exerciseName').value;
    const type = document.getElementById('exerciseType').value;
    const duration = parseInt(document.getElementById('duration').value);
    const intensity = document.getElementById('intensity').value;
    const calories = parseInt(document.getElementById('calories').value) || 0;

    const exercise = {
        id: Date.now(),
        name,
        type,
        duration,
        intensity,
        calories,
        timestamp: new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        }),
        date: new Date().toDateString()
    };

    exercises.push(exercise);
    saveExercises();
    renderExerciseList();
    updateStats();
    
    // Reset form
    document.getElementById('exerciseForm').reset();
    
    // Show success feedback
    showSuccessMessage();
}

function deleteExercise(id) {
    exercises = exercises.filter(exercise => exercise.id !== id);
    saveExercises();
    renderExerciseList();
    updateStats();
}

function renderExerciseList() {
    const exerciseList = document.getElementById('exerciseList');
    
    if (exercises.length === 0) {
        exerciseList.innerHTML = `
            <div style="text-align: center; opacity: 0.6; padding: 40px;">
                <span style="font-size: 3rem;">🌱</span>
                <p>No exercises logged yet. Start your fitness journey!</p>
            </div>
        `;
        return;
    }

    const todayExercises = exercises.filter(exercise => isToday(exercise.date));
    
    if (todayExercises.length === 0) {
        exerciseList.innerHTML = `
            <div style="text-align: center; opacity: 0.6; padding: 40px;">
                <span style="font-size: 3rem;">🌱</span>
                <p>No exercises logged today. Let's get moving!</p>
            </div>
        `;
        return;
    }
    
    exerciseList.innerHTML = todayExercises.map(exercise => `
        <div class="exercise-item">
            <div class="exercise-header">
                <div class="exercise-name">${getTypeEmoji(exercise.type)} ${exercise.name}</div>
                <div style="display: flex; gap: 10px; align-items: center;">
                    <div class="exercise-time">${exercise.timestamp}</div>
                    <button class="delete-btn" onclick="deleteExercise(${exercise.id})">×</button>
                </div>
            </div>
            <div class="exercise-details">
                <div class="exercise-detail">${exercise.duration} min</div>
                <div class="exercise-detail">${getIntensityEmoji(exercise.intensity)} ${exercise.intensity}</div>
                ${exercise.calories > 0 ? `<div class="exercise-detail">🔥 ${exercise.calories} cal</div>` : ''}
            </div>
        </div>
    `).join('');
}

function updateStats() {
    const todayExercises = exercises.filter(exercise => isToday(exercise.date));
    
    const totalExercises = todayExercises.length;
    const totalDuration = todayExercises.reduce((sum, exercise) => sum + exercise.duration, 0);
    const totalCalories = todayExercises.reduce((sum, exercise) => sum + exercise.calories, 0);
    
    document.getElementById('totalExercises').textContent = totalExercises;
    document.getElementById('totalDuration').textContent = totalDuration;
    document.getElementById('totalCalories').textContent = totalCalories;
    
    // Update progress bar
    const progress = Math.min((totalDuration / dailyGoal) * 100, 100);
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `${Math.round(progress)}% of daily goal (${dailyGoal} minutes)`;
}

function updateMotivationalQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivationalQuote').textContent = randomQuote;
}

function getTypeEmoji(type) {
    const emojis = {
        'strength': '💪',
        'cardio': '🏃',
        'flexibility': '🧘',
        'sports': '⚽'
    };
    return emojis[type] || '💪';
}

function getIntensityEmoji(intensity) {
    const emojis = {
        'low': '😌',
        'moderate': '😊',
        'high': '🔥',
        'extreme': '🚀'
    };
    return emojis[intensity] || '😊';
}

function isToday(dateString) {
    const today = new Date().toDateString();
    return today === dateString;
}

function showSuccessMessage() {
    const messages = [
        "Great job! 🎉",
        "Keep it up! 💪",
        "You're amazing! ⭐",
        "Fantastic work! 🚀",
        "You're on fire! 🔥",
        "Well done! 👏",
        "Crushing it! 💥",
        "Beast mode! 🦁"
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    // Create temporary success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Storage functions using localStorage
function saveExercises() {
    try {
        localStorage.setItem('fitcozy-exercises', JSON.stringify(exercises));
    } catch (error) {
        console.log('Storage not available, using memory storage');
    }
}

function loadExercises() {
    try {
        const saved = localStorage.getItem('fitcozy-exercises');
        if (saved) {
            exercises = JSON.parse(saved);
        }
    } catch (error) {
        console.log('Storage not available, using memory storage');
        exercises = [];
    }
    renderExerciseList();
}

// Clear old exercises (older than 7 days) to keep storage clean
function clearOldExercises() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    exercises = exercises.filter(exercise => {
        const exerciseDate = new Date(exercise.date);
        return exerciseDate >= sevenDaysAgo;
    });
    
    saveExercises();
}

// Run cleanup on load
document.addEventListener('DOMContentLoaded', function() {
    clearOldExercises();
});