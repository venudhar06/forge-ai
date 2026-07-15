import { useState } from "react";

import UploadHeader from "../components/repository/UploadHeader";
import UploadTabs from "../components/repository/UploadTabs";

import GitHubPanel from "../components/repository/GitHubPanel";
import URLPanel from "../components/repository/URLPanel";
import ZIPPanel from "../components/repository/ZIPPanel";

function RepositoryUploadPage() {

    const [activeTab, setActiveTab] = useState("github");

    return (

        <div className="min-h-screen bg-[#030712]">

            <div className="mx-auto max-w-6xl px-8 py-10">

                <UploadHeader />

                <UploadTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {activeTab === "github" && <GitHubPanel />}

                {activeTab === "url" && <URLPanel />}

                {activeTab === "zip" && <ZIPPanel />}

            </div>

        </div>

    );

}

export default RepositoryUploadPage;