import Image from "next/image";

export default function Home() {
    return (
        <div className={`text-[30px] font-semibold font-sans dark:bg-black`}>
            A place where things are built, solved, and refactored.
            <div className="text-center">
                <a
                    href="https://github.com/solvospace"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Solvospace on GitHub"
                    className="text-[13px] text-blue-600 hover:text-blue-800 underline"
                >
                    Github
                </a>
            </div>
        </div>
    );
}
