export async function getPublicRepos() {
    const results = await fetch("https://api.github.com/user/repos", {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
        },
    }).then((resp) => resp.json());

    return results;
}
