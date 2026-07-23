import Image from "next/image";

export default function Home() {
    return (
        <div className={`flex flex-col flex-1 items-center justify-center text-[30px] font-semibold
                        bg-zinc-50 font-sans dark:bg-black`}
        >
            A place where things are built, solved, and refactored.
        </div>
    );
}
