import type { ReactNode } from "react";
import { LiaPlusSolid } from "react-icons/lia";

interface Props {
    text: string;
    text2: string;
    icon: ReactNode;
}

export default function StatCard({ text, text2, icon }: Props) {
    return (
        <div className="flex flex-col items-center w-full max-w-27.5 sm:max-w-35 lg:max-w-45 py-2 sm:py-3 px-2 bg-bgTertiary rounded-xl border border-primaryBorder">

            <div className="flex items-center text-textPrimary">

                <span className="text-bgSecondary text-base sm:text-lg lg:text-xl">
                    {icon}
                </span>

                <p className="font-semibold ml-1 text-xl sm:text-2xl lg:text-3xl">
                    {text}
                </p>

                <LiaPlusSolid className="text-base sm:text-lg lg:text-xl" />

            </div>

            <p className="text-textSecondary text-center text-xs sm:text-sm lg:text-base leading-tight">
                {text2}
            </p>

        </div>
    );
}