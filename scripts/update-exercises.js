// scripts/update-exercises.js

const fs = require('fs');
const path = require('path');

function updateExercises() {
  const exercisesFile = path.join(__dirname, '../data/exercises.json');

  if (fs.existsSync(exercisesFile)) {
    const data = JSON.parse(fs.readFileSync(exercisesFile, 'utf-8'));

    // 範例：加一個更新時間戳記
    data.lastUpdated = new Date().toISOString();

    fs.writeFileSync(exercisesFile, JSON.stringify(data, null, 2));
    console.log('✅ Exercises updated successfully at', data.lastUpdated);
  } else {
    console.error('❌ exercises.json not found');
    process.exit(1);
  }
}

updateExercises();
