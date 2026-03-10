import { Text } from "./Text";
import type { ReactNode } from "react";

interface Props{
    title?: string;
    text?: string;
    icon?: ReactNode
}

export default function InfoCard({title, text, icon} : Props) {
    return (
        <div className="bg-bgTertiary border border-primaryBorder rounded-xl lg:rounded-2xl p-4 sm:p-6 w-full">

            <div className="flex gap-3 sm:gap-4 items-start">

                <div className="flex items-center justify-center size-10 sm:size-11 lg:size-12 rounded-lg lg:rounded-xl bg-[#271b09] border border-primaryBorder text-bgSecondary text-lg sm:text-xl lg:text-2xl shrink-0">
                    {icon}
                </div>

                <div>
                    <h3 className="text-textPrimary font-semibold text-base sm:text-lg lg:text-xl leading-tight">
                        {title}
                    </h3>

                    <Text className="text-sm sm:text-base mt-1 sm:mt-2">
                        {text}
                    </Text>
                </div>

            </div>

        </div>
    );
}