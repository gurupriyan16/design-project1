// Save and display mood

function saveMood() {
    const mood = document.getElementById("mood").value;
    const moodOutput = document.getElementById("mood-output");
    moodOutput.textContent = `Mood saved: ${mood}. Take care!`;
  }
  
  // Save and display sleep hours
  function saveSleep() {
    const sleep = document.getElementById("sleep").value;
    const sleepOutput = document.getElementById("sleep-output");
    if (sleep) {
      sleepOutput.textContent = `You slept for ${sleep} hours last night.`;
    } else {
      sleepOutput.textContent = "Please enter the hours you slept.";
    }
  }
  
  // Save and display stress level
  function saveStress() {
    const stress = document.getElementById("stress").value;
    const stressOutput = document.getElementById("stress-output");
    if (stress >= 1 && stress <= 10) {
      stressOutput.textContent = `Stress level saved: ${stress}/10. Remember to breathe!`;
    } else {
      stressOutput.textContent = "Please enter a valid stress level (1-10).";
    }
  }
  
  // Save and display energy level
  function saveEnergy() {
    const energy = document.getElementById("energy").value;
    const energyOutput = document.getElementById("energy-output");
    if (energy >= 1 && energy <= 10) {
      energyOutput.textContent = `Energy level saved: ${energy}/10. Keep up the good work!`;
    } else {
      energyOutput.textContent = "Please enter a valid energy level (1-10).";
    }
  }
  // Breathing Exercise
function startBreathing() {
  const circle = document.getElementById('breathing-circle');
  circle.style.animation = 'breathe 4s infinite';
  setTimeout(() => {
    alert('Relaxation complete!');
    circle.style.animation = 'none';
  }, 20000); // 20 seconds breathing session
}

// Meditation Session
function playMeditation() {
  const audio = document.getElementById('meditation-audio');
  audio.play();
  alert('Enjoy your guided meditation!');
}

// Visualization Exercise
function startVisualization() {
  const box = document.getElementById('visualization-box');
  box.style.display = 'block';
  setTimeout(() => {
    box.style.display = 'none';
    alert('Visualization exercise complete!');
  }, 20000); // 20 seconds visualization
}

// Relaxing Sounds
function playSound() {
  const soundSelector = document.getElementById('sound-selector');
  const selectedSound = soundSelector.value;
  const audio = document.getElementById('relaxing-sound');

  if (selectedSound !== 'none') {
    audio.src = `${selectedSound}.mp3`;
    audio.loop = true;
    audio.play();
    alert('Relaxing sound is playing!');
  }
}

function stopSound() {
  const audio = document.getElementById('relaxing-sound');
  audio.pause();
  audio.currentTime = 0;
  alert('Relaxing sound stopped.');
}
// Find Support Groups
function findSupportGroups() {
  const output = document.getElementById("support-groups-output");
  output.innerHTML = `
    <p>Here are some nearby support groups:</p>
    <ul>
      <li>Stress Relief Group - Location: Downtown</li>
      <li>Mindfulness Circle - Location: Community Center</li>
      <li>Depression Support Network - Location: Virtual</li>
    </ul>
  `;
}

// Start Live Chat
function startLiveChat() {
  alert("Connecting you to a live chat support agent...");
  // Redirect to live chat (placeholder functionality)
  window.open("https://example.com/live-chat", "_blank");
}

// Submit Anonymous Sharing
function submitAnonymous() {
  const input = document.getElementById("anonymous-input").value;
  const output = document.getElementById("anonymous-output");
  if (input.trim() === "") {
    output.textContent = "Please write something before sharing.";
  } else {
    output.textContent = "Thank you for sharing your thoughts.";
    document.getElementById("anonymous-input").value = ""; // Clear input
  }
}
// Mood Trends and Reports (Using Chart.js)
const moodCtx = document.getElementById('moodChart').getContext('2d');
const moodChart = new Chart(moodCtx, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Mood Score',
      data: [3, 4, 5, 3, 4, 5, 4],
      borderColor: '#8ab4f8',
      backgroundColor: 'rgba(138, 180, 248, 0.3)',
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});

// Sleep and Stress Correlations (Using Chart.js)
const correlationCtx = document.getElementById('correlationChart').getContext('2d');
const correlationChart = new Chart(correlationCtx, {
  type: 'bar',
  data: {
    labels: ['6h Sleep', '7h Sleep', '8h Sleep', '9h Sleep'],
    datasets: [
      {
        label: 'Stress Levels',
        data: [7, 6, 4, 3],
        backgroundColor: '#f48fb1'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});

// Activity Recommendations
function getRecommendations() {
  const recommendations = [
    'Go for a 20-minute walk.',
    'Try a breathing exercise.',
    'Listen to calming music.',
    'Write in a gratitude journal.',
    'Stretch or practice yoga.'
  ];
  const list = document.getElementById('recommendations-list');
  list.innerHTML = '';
  recommendations.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

// Goal Setting and Tracking
function addGoal() {
  const input = document.getElementById('goal-input');
  const goal = input.value.trim();
  if (goal) {
    const list = document.getElementById('goal-list');
    const li = document.createElement('li');
    li.textContent = goal;
    list.appendChild(li);
    input.value = '';
  } else {
    alert('Please enter a goal.');
  }
}
// Thought Record Tool
function addThoughtRecord() {
  const thoughtInput = document.getElementById('thought-input').value.trim();
  const challengeInput = document.getElementById('challenge-input').value.trim();
  const thoughtList = document.getElementById('thought-list');

  if (thoughtInput && challengeInput) {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>Thought:</strong> ${thoughtInput}<br>
      <strong>Challenge:</strong> ${challengeInput}
    `;
    thoughtList.appendChild(li);
    document.getElementById('thought-input').value = '';
    document.getElementById('challenge-input').value = '';
  } else {
    alert('Please fill out both fields.');
  }
}

// Behavioral Activation Plans
function addBehaviorPlan() {
  const activityInput = document.getElementById('activity-input').value.trim();
  const activityList = document.getElementById('activity-list');

  if (activityInput) {
    const li = document.createElement('li');
    li.textContent = activityInput;
    activityList.appendChild(li);
    document.getElementById('activity-input').value = '';
  } else {
    alert('Please enter an activity.');
  }
}

// CBT Journals
function saveJournalEntry() {
  const journalInput = document.getElementById('journal-input').value.trim();
  const journalEntries = document.getElementById('journal-entries');

  if (journalInput) {
    const div = document.createElement('div');
    div.textContent = journalInput;
    div.className = 'journal-entry';
    journalEntries.appendChild(div);
    document.getElementById('journal-input').value = '';
  } else {
    alert('Please write something in your journal.');
  }
}
// Exercise Tracker
function logExercise() {
  const exerciseInput = document.getElementById('exercise-input').value.trim();
  const durationInput = document.getElementById('duration-input').value.trim();
  const exerciseList = document.getElementById('exercise-list');

  if (exerciseInput && durationInput) {
    const li = document.createElement('li');
    li.textContent = `${exerciseInput} - ${durationInput} mins`;
    exerciseList.appendChild(li);
    document.getElementById('exercise-input').value = '';
    document.getElementById('duration-input').value = '';
  } else {
    alert('Please fill out both fields.');
  }
}

// Diet/Nutrition Tracker
function logMeal() {
  const mealInput = document.getElementById('meal-input').value.trim();
  const hydrationInput = document.getElementById('hydration-input').value.trim();
  const nutritionList = document.getElementById('nutrition-list');

  if (mealInput && hydrationInput) {
    const li = document.createElement('li');
    li.textContent = `Meal: ${mealInput}, Water: ${hydrationInput}ml`;
    nutritionList.appendChild(li);
    document.getElementById('meal-input').value = '';
    document.getElementById('hydration-input').value = '';
  } else {
    alert('Please fill out both fields.');
  }
}

// Fitness Challenges
function getFitnessChallenge() {
  const challenges = [
    'Do 10 minutes of stretching.',
    'Take a 15-minute walk.',
    'Complete 20 squats and 10 push-ups.',
    'Try a new yoga pose today.',
    'Dance to your favorite song for 5 minutes.'
  ];
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  document.getElementById('challenge-text').textContent = randomChallenge;
}
// Daily Affirmations
function generateAffirmation() {
  const affirmations = [
    "You are capable of amazing things.",
    "Believe in yourself and all that you are.",
    "Today is a fresh start; embrace it.",
    "You are stronger than you think.",
    "Every day is an opportunity to grow."
  ];
  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById('affirmation-text').textContent = randomAffirmation;
}

// Motivational Quotes
function generateQuote() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-text').textContent = randomQuote;
}

// Gamification
let points = 0;

function completeTask() {
  points += 10; // Add points for each completed task
  document.getElementById('points').textContent = points;

  // Reward system
  const rewards = {
    50: "Congratulations! You've earned a free guided meditation session.",
    100: "Amazing! You've unlocked a personalized motivational message.",
    200: "Fantastic! You are now eligible for a virtual badge of positivity."
  };

  // Check for rewards
  if (rewards[points]) {
    document.getElementById('reward-text').textContent = rewards[points];
  } else {
    document.getElementById('reward-text').textContent = "";
  }
}
// Video Tutorials
function showVideo() {
  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = `
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/some_video_id" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  `;
}
// Mood Prediction
function predictMood() {
  const sleep = document.getElementById('sleep-hours').value;
  const diet = document.getElementById('diet-quality').value;

  if (!sleep || !diet) {
    document.getElementById('predicted-mood').textContent = "Please fill in both fields.";
    return;
  }

  let moodScore = parseInt(sleep) + parseInt(diet);

  let mood = "Neutral";
  if (moodScore < 10) mood = "Low";
  else if (moodScore >= 10 && moodScore < 16) mood = "Moderate";
  else mood = "High";

  document.getElementById('predicted-mood').textContent = `Your predicted mood is: ${mood}`;
}

// Chatbot Companion
function chatbotReply() {
  const input = document.getElementById('user-input').value.trim();
  const chatLog = document.getElementById('chat-log');

  if (!input) return;

  const botReply = {
    hello: "Hi there! How can I help you today?",
    help: "I'm here to support you. What do you need help with?",
    stress: "Try some deep breathing exercises. You’ll feel better!",
    default: "I'm here to listen. Tell me more."
  };

  const response = botReply[input.toLowerCase()] || botReply.default;

  chatLog.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  chatLog.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
  document.getElementById('user-input').value = "";
}

// Emotion Recognition
function logEmotion(emotion) {
  document.getElementById('logged-emotion').textContent = `You are feeling: ${emotion}`;
}
// Simulate syncing with a fitness tracker
function syncFitnessTracker() {
  document.getElementById('fitness-data').textContent = 
    "Steps: 10,000 | Calories Burned: 500 kcal | Distance: 5 km";
}

// Simulate heart rate monitoring
let heartRateInterval;
function startHeartRateMonitoring() {
  const heartRateData = document.getElementById('heart-rate-data');

  if (heartRateInterval) {
    clearInterval(heartRateInterval);
    heartRateData.textContent = "Heart rate monitoring stopped.";
    heartRateInterval = null;
  } else {
    heartRateInterval = setInterval(() => {
      const randomHeartRate = Math.floor(60 + Math.random() * 40); // Simulate 60-100 BPM
      heartRateData.textContent = `Heart rate: ${randomHeartRate} BPM`;
    }, 1000);
  }
}

// Simulate syncing sleep data
function syncSleepData() {
  document.getElementById('sleep-data').textContent = 
    "Sleep Duration: 7 hours | REM: 1.5 hours | Deep Sleep: 2 hours";
}
// Custom Themes
function setTheme(theme) {
  const body = document.body;

  if (theme === 'light') {
    body.style.backgroundColor = '#f5f5f5';
    body.style.color = '#1e1e2f';
  } else if (theme === 'dark') {
    body.style.backgroundColor = '#1e1e2f';
    body.style.color = '#f5f5f5';
  } else if (theme === 'calming') {
    body.style.backgroundColor = '#d8e7dc';
    body.style.color = '#2a2a2a';
  }
}

// Reminders
function setReminder() {
  const reminderType = document.getElementById('reminder-type').value;
  const reminderMsg = document.getElementById('reminder-msg');
  reminderMsg.textContent = `Reminder set for: ${reminderType.charAt(0).toUpperCase() + reminderType.slice(1)}`;
}

// User Profiles
function saveProfile() {
  const name = document.getElementById('user-name').value.trim();
  const goals = document.getElementById('user-goals').value.trim();
  const profileSummary = document.getElementById('profile-summary');

  if (!name || !goals) {
    profileSummary.textContent = 'Please fill in all fields.';
    return;
  }

  profileSummary.textContent = `Name: ${name}\nGoals: ${goals}`;
}
