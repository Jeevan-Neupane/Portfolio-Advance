export type SkillGroup = {
    category: string;
    items: string[];
};

const SkillsSet: SkillGroup[] = [
    {
        category: "Programming Languages",
        items: ["Python", "C/C++", "JavaScript", "TypeScript"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Redux", "HTML/CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "FastAPI", "Socket.io", "Nest.js"],
    },
    {
        category: "AI/ML",
        items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "PyTorch"],
    },
    {
        category: "Databases",
        items: ["MongoDB", "MySQL"],
    },
    {
        category: "Operating Systems",
        items: ["Linux (Ubuntu, Debian)", "Windows"],
    },
    {
        category: "DevOps & Cloud",
        items: ["Docker", "AWS (Basic)"],
    },
];

export default SkillsSet;