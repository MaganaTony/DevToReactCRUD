import LogCard from "@/components/LogCard";
import PostCard from "@/components/PostCard";
import { userLogged } from "@/hooks";
import MainLayout from "@/layouts/mainLayout";
import clsx from "clsx";
import sidemenulinks from "@/collections/sidemenulinks.json";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

    const user = userLogged();

    return (
        <MainLayout>
            <main className="grid grid-cols-1 2xl:grid-cols-[18rem_1fr_18rem] p-3">
                <section className="grid xl:col-start-2 md:grid-cols-[15rem_1fr] lg:grid-cols-[1fr_35rem_1fr] xl:grid-cols-[15rem_1fr_23rem]">
                    <aside className="hidden md:flex md:flex-col gap-4">
                        {/* Login aside car */}
                        {!user && <LogCard />}
                        <div className="flex flex-col px-2 gap-2">
                            {sidemenulinks.map((item) => {
                                const url = item.split(" ").join("_");
                                return (
                                    <Link
                                        href="/"
                                        key={item}
                                        className="flex flex-row gap-3 w-full rounded-lg p-2 font-light hover:bg-blue-600/10 hover:text-blue-600 hover:underline"
                                    >
                                        {item && (
                                            <Image
                                                src={`/${url}.svg`}
                                                alt={item}
                                                width={24} // Adjust width as needed
                                                height={24} // Adjust height as needed
                                            />
                                        )}
                                        <p>{item}</p>
                                    </Link>
                                )
                            })}

                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold px-2">Other</p>
                            <Link 
                            className="flex flex-row gap-3 w-full rounded-lg p-2 font-light hover:bg-blue-600/10 hover:text-blue-600 hover:underline"
                            href="/"><Image
                            src={`/Code_of_Conduct.svg`}
                            width={24} // Adjust width as needed
                            height={24} // Adjust height as needed
                            />Code of Conduct</Link>

                        </div>
                    </aside>
                    <section>
                        <PostCard />
                    </section>
                    <aside>

                    </aside>
                </section>
            </main>
        </MainLayout>
    )
}