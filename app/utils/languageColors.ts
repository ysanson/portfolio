const LANGUAGE_COLORS: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Go: "#00ADD8",
    Rust: "#dea584",
    Java: "#b07219",
    Kotlin: "#A97BFF",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Vue: "#41b883",
    Shell: "#89e051",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    Scala: "#c22d40",
    Swift: "#F05138",
    Dart: "#00B4AB",
    Dockerfile: "#384d54",
    Makefile: "#427819",
};

export function languageColor(name: string): string {
    return LANGUAGE_COLORS[name] ?? "#8a8a8a";
}
