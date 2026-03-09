
import { Text } from "./Text";
import type { ReactNode } from "react";

interface Props{
    title?: string;
    text?: string;
    icon?: ReactNode

}


export default function InfoCard({title, text, icon} : Props) {
    return (
        <div className="bg-bgTertiary border border-primaryBorder rounded-2xl p-5 w-full max-w-sm">

            <div className="flex gap-4 items-start">

                <div className="flex items-center justify-center size-10 sm:size-12 rounded-xl bg-[#271b09] border border-primaryBorder text-bgSecondary text-lg sm:text-xl shrink-0">
                {icon}
                </div>

                <div>
                <h3 className="text-textPrimary font-semibold text-base sm:text-lg leading-tight">
                    {title}
                </h3>

                <Text className="text-sm mt-2">
                    {text}
                </Text>
                </div>

            </div>

        </div>
    );
}