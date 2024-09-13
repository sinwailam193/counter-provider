import { useEffect, useState } from "react";

import { getPublicRepos } from "./api/repos";
import { CounterContextProvider } from "./providers/counterProvider";
import Children from "./components/Children";
import SecondChildren from "./components/SecondChildren";

function App() {
    const [publicRepos, setPublicRepos] = useState<
        { full_name: string; id: number }[]
    >([]);

    useEffect(() => {
        callApi();
    }, []);

    async function callApi() {
        const data = await getPublicRepos();
        setPublicRepos(data);
    }

    return (
        <CounterContextProvider>
            <>
                <div className="m-2">
                    <ul>
                        {publicRepos.map((repo) => (
                            <li key={repo.id}>{repo.full_name}</li>
                        ))}
                    </ul>
                </div>

                <Children />
                <SecondChildren />
            </>
        </CounterContextProvider>
    );
}

export default App;
