import LogCard from "@/components/LogCard";
import { userLogged } from "@/hooks";
import MainLayout from "@/layouts/mainLayout";
import clsx from "clsx";

export default function Home() {

    const user = userLogged();

    return (
        <MainLayout>
            <main className="grid grid-cols-1 2xl:grid-cols-[18rem_1fr_18rem] p-3">
                <section className="grid xl:col-start-2 md:grid-cols-[15rem_1fr] lg:grid-cols-[1fr_35rem_1fr] xl:grid-cols-[15rem_1fr_23rem]">
                    <aside className="hidden md:block">
                        {/* Login aside car */}
                        {!user && <LogCard/>}
                        
                    </aside>
                    <section>

                    </section>
                    <aside>

                    </aside>
                </section>
            </main>
        </MainLayout>
    )
}