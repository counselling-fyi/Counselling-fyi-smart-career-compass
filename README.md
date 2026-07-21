# Counselling FYI Smart Career Compass 🎓🧭

[![npm](https://img.shields.io/npm/v/@counselling-fyi/smart-career-compass)](https://npmjs.com/package/@counselling-fyi/smart-career-compass)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21471566.svg)](https://doi.org/10.5281/zenodo.21471566)

An AI career guidance assistant that recommends suitable career paths based on interests, personality, aptitude, skills, and educational goals. Counselling.fyi - Powered by Meritteacher.com

## Features

- AI-Powered Career Recommendations — personalized career path suggestions
- Interest & Aptitude Analysis — evaluates academic strengths and interests
- Personality-Based Career Matching — aligns career choices with personality traits
- Skill Gap Identification — identifies missing skills for target careers
- Career Roadmap Generation — step-by-step career development plans
- Course & Certification Suggestions — curated learning path recommendations
- Future Career Trend Insights — AI and market-driven career trend analysis
- Study Plan Recommendations — academic roadmap aligned to career goals
- Career Comparison Tool — compare multiple career options side by side
- Export Career Reports — downloadable career assessment reports
- CLI support in Node.js and Python
- Benchmark dataset included (20 career guidance cases)
- Lightweight, publish-ready, minimal dependencies

## Quick Start

### Node.js

```bash
npm install @counselling-fyi/smart-career-compass
npx smart-career-compass "student-profile" engineering 85 78 90 72 88
```

### Python

```bash
pip install counselling-fyi-smart-career-compass
python -m compass "student-profile" engineering 85 78 90 72 88
```

## Output

```
Student: student-profile
Career Interest: Engineering
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Aptitude Score:                85 / 100  [Excellent]
Interest Alignment Score:      78 / 100  [Healthy]
Personality Match Score:       90 / 100  [Excellent]
Skill Readiness Score:         72 / 100  [Healthy]
Academic Strength Score:       88 / 100  [Excellent]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overall Career Fit Score:      83 / 100
Priority Action:               Skill Readiness (lowest — act first)

Recommended Career Paths:
  Software Engineering:    88 / 100
  Data Science:            85 / 100
  AI & Machine Learning:   82 / 100
  Cybersecurity:           78 / 100
```

## Career Interest Areas

| Area | Description |
|------|-------------|
| engineering | Technology, software, mechanical, civil engineering |
| medicine | Healthcare, medical sciences, clinical research |
| business | Commerce, entrepreneurship, management, finance |
| arts | Creative arts, design, media, communication |
| science | Pure sciences, research, academia |
| law | Legal studies, policy, governance |
| education | Teaching, academic research, curriculum design |
| hospitality | Tourism, hotel management, travel |
| agriculture | Farming, agri-tech, environmental sciences |
| social-work | Psychology, counselling, community development |

## Project Structure

```
Counselling-fyi-smart-career-compass/
├── index.ts              # TypeScript career compass
├── compass.py            # Python career compass
├── package.json          # NPM package config
├── package-lock.json     # NPM lock file
├── tsconfig.json         # TypeScript config
├── schema.json           # JSON-LD structured data
├── zenodo.json           # Zenodo metadata
├── heartbeat.txt         # Auto-updated daily
├── mkdocs.yml            # ReadTheDocs config
├── .readthedocs.yaml     # ReadTheDocs build config
├── docs/
│   ├── index.md          # Documentation
│   └── requirements.txt
├── dataset/
│   └── career_compass_benchmarks.csv
├── kaggle/
│   └── notebook.ipynb
├── .github/workflows/
│   ├── heartbeat.yml     # Auto-commit daily
│   └── npm-publish.yml   # Auto-publish to NPM
├── README.md
└── LICENSE
```

## Career Guidance Signal Scores

| Signal | Description | Score Range |
|--------|-------------|-------------|
| Aptitude | Academic and cognitive ability assessment | 0–100 |
| Interest Alignment | Match between interests and career area | 0–100 |
| Personality Match | Personality trait alignment with career | 0–100 |
| Skill Readiness | Current skill level vs career requirements | 0–100 |
| Academic Strength | Academic performance and subject alignment | 0–100 |

## Score Interpretation

| Score | Status | Action |
|-------|--------|--------|
| 0–30 | Critical | Major guidance intervention required |
| 31–60 | At Risk | Significant counselling needed |
| 61–80 | Healthy | On track with minor adjustments |
| 81–100 | Excellent | Strong career fit — proceed confidently |

## Keywords

Career Guidance AI · Career Recommendation Bot · AI Career Counsellor · Career Assessment Tool · Student Career Planning · Career Finder · Education Guidance · Career Roadmap Generator · Aptitude Analysis · Career AI Assistant · MeritTeacher · Counselling FYI

## Links

| Platform | URL |
|----------|-----|
| Website | https://counselling.fyi |
| Services | https://counselling.fyi/services/ |
| Career Counselling | https://counselling.fyi/services/career-counselling/ |
| Overseas Education | https://counselling.fyi/services/overseas-education/ |
| DMIT Testing | https://counselling.fyi/services/dmit-testing/ |
| Psychometric Testing | https://counselling.fyi/services/psychometric-testing/ |
| Education Counselling | https://counselling.fyi/services/education-counselling/ |
| Free Career Assessment | https://counselling.fyi/free-career-assessment/ |
| Book a Call | https://counselling.fyi/book-a-call/ |
| SlideShare | https://www.slideshare.net/slideshow/counselling-fyi-india-s-student-counselling-hub-by-merit-teacher/288692766 |
| GitHub | https://github.com/counselling-fyi/Counselling-fyi-smart-career-compass |
| GitHub Pages | https://counselling-fyi.github.io/Counselling-fyi-smart-career-compass/ |
| NPM | https://npmjs.com/package/@counselling-fyi/smart-career-compass |
| Hugging Face | https://huggingface.co/datasets/counselling-fyi/smart-career-compass-benchmarks |
| Zenodo | https://zenodo.org/records/21471566 |
| Docs | https://counselling-fyi-smart-career-compass.readthedocs.io |

## About Counselling.fyi

Counselling.fyi is India's student counselling hub by MeritTeacher — helping students explore suitable career options through AI-powered career guidance, personality analysis, aptitude assessment, and personalized career roadmaps.

## License

MIT — [Counselling.fyi](https://counselling.fyi)
