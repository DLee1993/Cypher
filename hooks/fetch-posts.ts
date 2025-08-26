import { ParamValue } from "next/dist/server/request/params";

const posts = ["test", "test1"];

export const FetchPostBySlug = (slug: ParamValue) => {
    const post = posts.find((post) => post === slug);

    if (post) {
        return post;
    } else {
        return false;
    }
};
