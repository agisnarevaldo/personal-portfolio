import {BackgroundBeamsWithCollision} from "@/app/components/ui/background-beams-with-collision";
import Card from "@/app/components/card";
// import Navbar from "@/app/components/navbar";

export default function Home() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                {/*<Navbar/>*/}
                <h2 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center   text-white font-sans tracking-tight">
                    Who Am I ?{" "}
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

            </BackgroundBeamsWithCollision>

            <div className="px-4 lg:px-12" id="project">
                <div
                    className="text-3xl font-semibold tracking-wide relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div
                        className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 from-indigo-500 via-blue-500 to-blue-900 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Projects</span>
                    </div>
                    <div
                        className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-900 py-2">
                        <span className="">Projects</span>
                    </div>
                </div>
                <p>Showcase of my works on frontend development.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                        title="Desa Dirgahayu"
                        description="Web Profile Desa Dirgahayu, sebuah desa yang terletak di Kecamatan Kadipaten, Kabupaten Tasikmalaya."
                        image="/desadirgahayu.png"
                    />
                    <Card
                        title="Desa Dirgahayu"
                        description="Web Profile Desa Dirgahayu, sebuah desa yang terletak di Kecamatan Kadipaten, Kabupaten Tasikmalaya."
                        image="/desadirgahayu.png"
                    />
                    <Card
                        title="Desa Dirgahayu"
                        description="Web Profile Desa Dirgahayu, sebuah desa yang terletak di Kecamatan Kadipaten, Kabupaten Tasikmalaya."
                        image="/desadirgahayu.png"
                    />
                </div>
            </div>
        </>
    );
}
