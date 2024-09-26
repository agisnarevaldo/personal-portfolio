import Card from "@/app/components/card";
import Heading from "@/app/components/heading";

export default function Projects() {
    return (
        <div className="px-4 lg:px-12 mb-2" id="project">

            <Heading title="Projects" />

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
    )
}