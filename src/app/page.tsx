import {BackgroundBeamsWithCollision} from "@/app/components/ui/background-beams-with-collision";
import Card from "@/app/components/card";
import Projects from "@/app/components/projects";
import About from "@/app/components/about";
// import Navbar from "@/app/components/navbar";

export default function Home() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                {/*<Navbar/>*/}
                <div>
                    <h2 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center   text-white font-sans tracking-tight">
                        Who am I ?{" "}
                        <div
                            className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div
                                className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-indigo-500 via-blue-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                <span className="">Agisna Revaldo.</span>
                            </div>
                            <div
                                className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 py-4">
                                <span className="">Agisna Revaldo.</span>
                            </div>
                        </div>
                    </h2>
                    <h2 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center   text-white font-sans tracking-tight">
                        What am I doing?{" "}
                        <div
                            className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div
                                className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-indigo-500 via-blue-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                <span className="">Learn Coding by Doing Something.</span>
                            </div>
                            <div
                                className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 py-4">
                                <span className="">Learn Coding by Doing Something.</span>
                            </div>
                        </div>
                    </h2>
                </div>

            </BackgroundBeamsWithCollision>

            <Projects />

            <About />
        </>
    );
}
