import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonsProps {
    activeButton: 'primary' | 'secondary';
    src: string;
}

export function Button({ activeButton, src }: ButtonsProps) {
    return (
        <>
            {activeButton === 'primary' ?
                <a
                    className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
                    href={src}
                >
                    <DiscordLogo size={24} />
                    Comunidade do Discord
                </a>
                :
                <a
                    className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
                    href={src}
                >
                    <Lightning size={24} />
                    Acesse o Desafio
                </a>}
        </>
    )
}