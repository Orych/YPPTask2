<template>
    <div class="container">
      <header>
        <h1>{{ resume.name }}</h1>
        <p>{{ resume.position }}</p>
      </header>
      <section>
        <h2>Опыт работы</h2>
        <ul>
          <li v-for="job in resume.experience" :key="job.company">
            <strong>{{ job.company }}</strong> — {{ job.position }} ({{ job.years }})
          </li>
        </ul>
      </section>
      <section>
        <h2>Навыки</h2>
        <ul>
          <li v-for="skill in resume.skills" :key="skill">{{ skill }}</li>
        </ul>
      </section>
    </div>
</template>
  
<script setup>
  const resume = {
    name: "Видякин Егор Викторович",
    position: "Frontend-разработчик",
    experience: [
      { company: "Network Graphics", position: "Frontend-разработчик", years: "2021-2025" },
      { company: "Ispring", position: "Frontend-разработчик, стажёр", years: "2020-2021" }
    ],
    skills: [
      "Vue 2", 
      "Vue 3",
      "Electron js",
      "Node.js",
      "JavaScript", 
      "CSS", 
      "SCSS",
      "Git"
    ]
  };
</script>
  
<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    color: #42b983;
  }
</style>
  