#!/usr/bin/env python3
"""
Counselling FYI Smart Career Compass
An AI career guidance assistant that recommends suitable
career paths based on interests, personality, aptitude, skills, and
educational goals. An initiative by MeritTeacher.
https://counselling.fyi
"""

import sys


def get_status(score: int) -> str:
    if score <= 30:
        return "Critical"
    elif score <= 60:
        return "At Risk"
    elif score <= 80:
        return "Healthy"
    return "Excellent"


def get_priority_action(scores: dict) -> str:
    labels = {
        "aptitude": "Aptitude",
        "interest_alignment": "Interest Alignment",
        "personality_match": "Personality Match",
        "skill_readiness": "Skill Readiness",
        "academic_strength": "Academic Strength",
    }
    lowest_key = min(scores, key=scores.get)
    return f"{labels[lowest_key]} ({scores[lowest_key]}/100 — act first)"


def get_recommended_paths(interest: str, aptitude: int, personality: int) -> dict:
    base = round((aptitude + personality) / 2)
    paths = {
        "engineering": {
            "Software Engineering": min(100, base + 3),
            "Data Science": min(100, base),
            "AI & Machine Learning": min(100, base - 3),
            "Cybersecurity": min(100, base - 7),
        },
        "medicine": {
            "Clinical Medicine": min(100, base + 3),
            "Biomedical Research": min(100, base),
            "Pharmacy": min(100, base - 3),
            "Public Health": min(100, base - 7),
        },
        "business": {
            "Entrepreneurship": min(100, base + 3),
            "Finance & Banking": min(100, base),
            "Marketing": min(100, base - 3),
            "Human Resources": min(100, base - 7),
        },
        "arts": {
            "Graphic Design": min(100, base + 3),
            "Media & Journalism": min(100, base),
            "Fine Arts": min(100, base - 3),
            "Film & Animation": min(100, base - 7),
        },
        "science": {
            "Physics Research": min(100, base + 3),
            "Chemistry": min(100, base),
            "Mathematics": min(100, base - 3),
            "Environmental Science": min(100, base - 7),
        },
    }
    return paths.get(interest, {
        "Career Path 1": min(100, base + 3),
        "Career Path 2": min(100, base),
        "Career Path 3": min(100, base - 3),
        "Career Path 4": min(100, base - 7),
    })


def analyze_career(
    student_profile: str,
    career_interest: str = "engineering",
    aptitude: int = 85,
    interest_alignment: int = 78,
    personality_match: int = 90,
    skill_readiness: int = 72,
    academic_strength: int = 88,
) -> dict:
    """
    Analyze and score career guidance signals for students.

    Args:
        student_profile: Student name or profile identifier
        career_interest: Area of career interest
        aptitude: Aptitude score (0-100)
        interest_alignment: Interest alignment score (0-100)
        personality_match: Personality match score (0-100)
        skill_readiness: Skill readiness score (0-100)
        academic_strength: Academic strength score (0-100)

    Returns:
        dict with individual signal scores, overall fit, and recommended paths
    """
    scores = {
        "aptitude": aptitude,
        "interest_alignment": interest_alignment,
        "personality_match": personality_match,
        "skill_readiness": skill_readiness,
        "academic_strength": academic_strength,
    }
    overall_career_fit = round(sum(scores.values()) / 5)

    return {
        "student_profile": student_profile,
        "career_interest": career_interest,
        "aptitude_score": aptitude,
        "interest_alignment_score": interest_alignment,
        "personality_match_score": personality_match,
        "skill_readiness_score": skill_readiness,
        "academic_strength_score": academic_strength,
        "overall_career_fit": overall_career_fit,
        "priority_action": get_priority_action(scores),
        "recommended_paths": get_recommended_paths(career_interest, aptitude, personality_match),
    }


if __name__ == "__main__":
    student_profile = sys.argv[1] if len(sys.argv) > 1 else "student-profile"
    career_interest = sys.argv[2] if len(sys.argv) > 2 else "engineering"
    aptitude = int(sys.argv[3]) if len(sys.argv) > 3 else 85
    interest_alignment = int(sys.argv[4]) if len(sys.argv) > 4 else 78
    personality_match = int(sys.argv[5]) if len(sys.argv) > 5 else 90
    skill_readiness = int(sys.argv[6]) if len(sys.argv) > 6 else 72
    academic_strength = int(sys.argv[7]) if len(sys.argv) > 7 else 88

    result = analyze_career(
        student_profile, career_interest, aptitude,
        interest_alignment, personality_match, skill_readiness, academic_strength
    )

    print(f"Student: {result['student_profile']}")
    print(f"Career Interest: {result['career_interest']}")
    print("=" * 45)
    print(f"Aptitude Score:                {result['aptitude_score']}/100  [{get_status(result['aptitude_score'])}]")
    print(f"Interest Alignment Score:      {result['interest_alignment_score']}/100  [{get_status(result['interest_alignment_score'])}]")
    print(f"Personality Match Score:       {result['personality_match_score']}/100  [{get_status(result['personality_match_score'])}]")
    print(f"Skill Readiness Score:         {result['skill_readiness_score']}/100  [{get_status(result['skill_readiness_score'])}]")
    print(f"Academic Strength Score:       {result['academic_strength_score']}/100  [{get_status(result['academic_strength_score'])}]")
    print("=" * 45)
    print(f"Overall Career Fit Score:      {result['overall_career_fit']}/100")
    print(f"Priority Action:               {result['priority_action']}")
    print("\nRecommended Career Paths:")
    for path, score in result['recommended_paths'].items():
        print(f"  {path:<30} {score}/100")
