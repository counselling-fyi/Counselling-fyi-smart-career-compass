#!/usr/bin/env node

interface CareerInput {
  studentProfile: string;
  careerInterest: string;
  aptitude: number;
  interestAlignment: number;
  personalityMatch: number;
  skillReadiness: number;
  academicStrength: number;
}

interface CareerOutput {
  studentProfile: string;
  careerInterest: string;
  aptitudeScore: number;
  interestAlignmentScore: number;
  personalityMatchScore: number;
  skillReadinessScore: number;
  academicStrengthScore: number;
  overallCareerFit: number;
  priorityAction: string;
  recommendedPaths: Record<string, number>;
}

function getStatus(score: number): string {
  if (score <= 30) return "Critical";
  if (score <= 60) return "At Risk";
  if (score <= 80) return "Healthy";
  return "Excellent";
}

function getPriorityAction(scores: Record<string, number>): string {
  const labels: Record<string, string> = {
    aptitude: "Aptitude",
    interestAlignment: "Interest Alignment",
    personalityMatch: "Personality Match",
    skillReadiness: "Skill Readiness",
    academicStrength: "Academic Strength",
  };
  const lowest = Object.entries(scores).reduce((a, b) => a[1] < b[1] ? a : b);
  return `${labels[lowest[0]]} (${lowest[1]}/100 — act first)`;
}

function getRecommendedPaths(interest: string, aptitude: number, personality: number): Record<string, number> {
  const base = Math.round((aptitude + personality) / 2);
  const paths: Record<string, Record<string, number>> = {
    engineering: {
      "Software Engineering": Math.min(100, base + 3),
      "Data Science": Math.min(100, base),
      "AI & Machine Learning": Math.min(100, base - 3),
      "Cybersecurity": Math.min(100, base - 7),
    },
    medicine: {
      "Clinical Medicine": Math.min(100, base + 3),
      "Biomedical Research": Math.min(100, base),
      "Pharmacy": Math.min(100, base - 3),
      "Public Health": Math.min(100, base - 7),
    },
    business: {
      "Entrepreneurship": Math.min(100, base + 3),
      "Finance & Banking": Math.min(100, base),
      "Marketing": Math.min(100, base - 3),
      "Human Resources": Math.min(100, base - 7),
    },
    arts: {
      "Graphic Design": Math.min(100, base + 3),
      "Media & Journalism": Math.min(100, base),
      "Fine Arts": Math.min(100, base - 3),
      "Film & Animation": Math.min(100, base - 7),
    },
    science: {
      "Physics Research": Math.min(100, base + 3),
      "Chemistry": Math.min(100, base),
      "Mathematics": Math.min(100, base - 3),
      "Environmental Science": Math.min(100, base - 7),
    },
  };
  return paths[interest] ?? {
    "Career Path 1": Math.min(100, base + 3),
    "Career Path 2": Math.min(100, base),
    "Career Path 3": Math.min(100, base - 3),
    "Career Path 4": Math.min(100, base - 7),
  };
}

export function analyzeCareer(input: CareerInput): CareerOutput {
  const scores = {
    aptitude: input.aptitude,
    interestAlignment: input.interestAlignment,
    personalityMatch: input.personalityMatch,
    skillReadiness: input.skillReadiness,
    academicStrength: input.academicStrength,
  };
  const overallCareerFit = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / 5
  );
  return {
    studentProfile: input.studentProfile,
    careerInterest: input.careerInterest,
    aptitudeScore: input.aptitude,
    interestAlignmentScore: input.interestAlignment,
    personalityMatchScore: input.personalityMatch,
    skillReadinessScore: input.skillReadiness,
    academicStrengthScore: input.academicStrength,
    overallCareerFit,
    priorityAction: getPriorityAction(scores),
    recommendedPaths: getRecommendedPaths(input.careerInterest, input.aptitude, input.personalityMatch),
  };
}

const args = process.argv.slice(2);
const studentProfile = args[0] || "student-profile";
const careerInterest = args[1] || "engineering";
const aptitude = parseInt(args[2]) || 85;
const interestAlignment = parseInt(args[3]) || 78;
const personalityMatch = parseInt(args[4]) || 90;
const skillReadiness = parseInt(args[5]) || 72;
const academicStrength = parseInt(args[6]) || 88;

const result = analyzeCareer({
  studentProfile, careerInterest, aptitude,
  interestAlignment, personalityMatch, skillReadiness, academicStrength,
});

console.log(`Student: ${result.studentProfile}`);
console.log(`Career Interest: ${result.careerInterest}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Aptitude Score:                ${result.aptitudeScore}/100  [${getStatus(result.aptitudeScore)}]`);
console.log(`Interest Alignment Score:      ${result.interestAlignmentScore}/100  [${getStatus(result.interestAlignmentScore)}]`);
console.log(`Personality Match Score:       ${result.personalityMatchScore}/100  [${getStatus(result.personalityMatchScore)}]`);
console.log(`Skill Readiness Score:         ${result.skillReadinessScore}/100  [${getStatus(result.skillReadinessScore)}]`);
console.log(`Academic Strength Score:       ${result.academicStrengthScore}/100  [${getStatus(result.academicStrengthScore)}]`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Overall Career Fit Score:      ${result.overallCareerFit}/100`);
console.log(`Priority Action:               ${result.priorityAction}`);
console.log("\nRecommended Career Paths:");
Object.entries(result.recommendedPaths).forEach(([path, score]) => {
  console.log(`  ${path.padEnd(28)} ${score}/100`);
});
