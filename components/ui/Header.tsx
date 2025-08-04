import Image from "next/image";

export default function Header() {
    return (
        <header className="h-12 flex justify-between items-center border-b border-gray-6 px-2 sm:px-4">
            <div className="flex justify-center items-center gap-5">
                <div className="flex gap-2">
                    <Image src="/assets/logo.svg" alt="logo" width={16} height={16} />
                    <p className="font-semibold text-lg">Cipher</p>
                </div>
            </div>
        </header>
    );
}
