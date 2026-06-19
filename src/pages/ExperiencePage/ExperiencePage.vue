<template>
  <div class="experience-page page-container">
    <h1 class="page-title">// EXPERIENCE</h1>

    <section class="exp-section">
      <h2 class="exp-section-title">Work</h2>
      <div class="timeline">
        <div v-for="job in jobs" :key="job.company" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="job-company">{{ job.company }}</span>
              <span class="job-location">{{ job.location }}</span>
            </div>
            <h3 class="job-title">{{ job.role }}</h3>
            <p class="job-period">[ {{ job.period }} ]</p>
            <p class="job-desc">{{ job.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="exp-section">
      <h2 class="exp-section-title">Education</h2>
      <div class="timeline">
        <div v-for="edu in education" :key="edu.institution" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="job-company">{{ edu.institution }}</span>
              <span class="job-location">{{ edu.location }}</span>
            </div>
            <h3 class="job-title">{{ edu.degree }}</h3>
            <p class="job-period">[ {{ edu.period }} ]</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const jobs = [
  {
    company: 'Cybermeister',
    location: 'Deventer, Netherlands',
    role: 'Intern Software Engineer',
    period: '02/2026 – 07/2026',
    description:
      "Researched, architected, and developed an automated Assessment & Onboarding Tool to streamline the company's traineeship recruitment pipeline.",
  },
  {
    company: 'Everbridge',
    location: 'Deventer, Netherlands',
    role: 'Intern Software Engineer',
    period: '09/2025 – 02/2026',
    description:
      'Conducted a SIEM market landscape analysis to design a cost-effective cloud solution, driving down future product operational expenditures while maintaining strict security benchmarks.',
  },
  {
    company: 'X-Guard',
    location: 'Hengelo, Netherlands',
    role: 'Intern Software Engineer',
    period: '09/2024 – 02/2025',
    description:
      "Built a role-based conditional logic engine allowing survey interfaces to dynamically adapt depending on the user's specific role in the incident.",
  },
]

const education = [
  {
    institution: 'Saxion University',
    location: 'Deventer, Netherlands',
    degree: 'BSc in Software Engineering',
    period: '02/2023 – 10/07/2026',
  },
  {
    institution: 'Twente Pathway College',
    location: 'Enschede, Netherlands',
    degree: 'Foundation Diploma — Engineering & Technology',
    period: '09/2019 – 08/2020',
  },
]
</script>

<style>
@import './style.css';
</style>
