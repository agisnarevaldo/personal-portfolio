import Image from "next/image";

export default function Card() {
    return (
        <div className="border border-neutral-500 p-8 flex flex-col gap-2 w-[420px] rounded-lg">
            <h2 className="text-2xl font-semibold">Desa Dirgahayu</h2>
            <p>
                Web Profile Desa Dirgahayu, sebuah desa yang terletak di Kecamatan Kadipaten, Kabupaten Tasikmalaya.
            </p>
            <Image src="/desadirgahayu.png" alt="Desa Dirgahayu" width={400} height={100} />
        </div>
    )
}