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
    name: "Иван Иванов",
    position: "Frontend-разработчик",
    experience: [
      { company: "Компания A", position: "Разработчик", years: "2021-2023" },
      { company: "Компания B", position: "Стажёр", years: "2020-2021" }
    ],
    skills: ["Vue.js", "Nuxt.js", "JavaScript", "CSS", "GitHub Actions"]
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
  