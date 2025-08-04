import { Separator } from "radix-ui";

export default function Header() {
    return (
        <header className="h-12 flex justify-between items-center px-4 border-b border-slate-50/15">
            <div className="flex justify-center items-center gap-5">
                <p className="font-semibold text-lg">Cipher</p>
                <Separator.Root
                    className="SeparatorRoot"
                    orientation="vertical"
                    decorative={true}
                />
            </div>
        </header>
    );
}
