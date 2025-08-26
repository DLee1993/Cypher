"use client";

import { FetchPostBySlug } from "@/hooks/fetch-posts";
import { notFound, useParams } from "next/navigation";

export default function CipherEducationPage() {
    const slug = useParams().slug;
    const post = FetchPostBySlug(slug);

    if (!post) notFound();

    return <div>cipher education page</div>;
}
