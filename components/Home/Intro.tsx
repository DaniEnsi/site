import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { mdxComponents } from "../Prose";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import { intro } from "../../constants";

export default function Intro() {
    
    const [serialized, setSerialized] = useState(null);

    useEffect(() => {
        const serializeContent = async () => {
            const result = await serialize(intro, {
                mdxOptions: {
                    development: process.env.NODE_ENV === 'development',
                },
            });
            setSerialized(result);
        };

        serializeContent();
    }, []);

    if (!serialized) return <div>Loading...</div>;

    return (
        <dl className="list-container">
            <dt className="list-title border-none pb-4 pt-0 leading-relaxed sm:pb-0">
                <h1 className="flex items-center gap-1 text-neutral-800 dark:text-white">
                    <Link href="/" className="[font-variation-settings:'wght'_550]">
                        Daniel Ensminger
                    </Link>
                </h1>
                <h2 className="text-neutral-500 dark:text-silver-dark">
                    Web Developer
                </h2>
            </dt>
            <dd className="list-content border-none pt-0">
                <MDXRemote {...serialized} components={mdxComponents} />
            </dd>
        </dl>
    );
}