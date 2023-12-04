'use client'
import React ,{useState} from 'react'
import Image from 'next/image'



const Page = () => {
    const [projectName, setProjectName] = useState('');
    const [projectInfo, setProjectInfo] = useState('');
    const [projectComponents, setProjectComponents] = useState('');
    const [target, setTarget] = useState('');
    const [requiredDate, setRequiredDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="bg-slate-950 container flex mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-400 w-[30vw] max-w-md mx-auto p-5 px-10 mt-20 mb-20">
                <div className="mb-4">
                    <label htmlFor="projectName" className="block mb-2 font-bold">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        className="bg-slate-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="projectInfo" className="block mb-2 font-bold">
                        Project Info
                    </label>
                    <textarea
                        type="text"
                        id="projectInfo"
                        className="bg-slate-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        rows='4'
                        limit='10'
                        value={projectInfo}
                        onChange={(e) => setProjectInfo(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="projectComponents" className="block mb-2 font-bold">
                        Project Components
                    </label>
                    <textarea
                        type="text"
                        id="projectComponents"
                        className="bg-slate-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        value={projectComponents}
                        rows='10'
                        placeholder='Enter the components required for your project'
                        onChange={(e) => setProjectComponents(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="target" className="block mb-2 font-bold">
                        Target
                    </label>
                    <input
                        type="text"
                        id="target"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="requiredDate" className="block mb-2 font-bold">
                        Required Date
                    </label>
                    <input
                        type="text"
                        id="requiredDate"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder='DD/MM/YYYY'    
                        value={requiredDate}
                        onChange={(e) => setRequiredDate(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Page;

