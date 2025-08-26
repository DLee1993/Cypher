import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-screen h-screen grid place-content-center gap-1">
            <h1 className="text-center text-lg font-bold">404 - Page Not Found</h1>
            <p>We couldn&apos;t find what you were looking for.</p>
            <p className="mt-10">
                Please return to the <Link href="/" className="underline">homepage</Link> to continue
            </p>
        </div>
    );
}
