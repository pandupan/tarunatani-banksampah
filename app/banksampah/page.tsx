import { moulFont } from "@/utils/font"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="container w-full border border-theme-green">

        <div className="flex flex-col justify-center pt-10 items-center w-[320px] h-full space-y-8 mx-auto mt-[75px] ">

            <h2 className="text-2xl text-center">Explore Pengetahuan Bank Sampah</h2>

            <Link href="/artikelbanksampah">
                <div className="rounded-[45px] w-[332px] h-[163px] border text-white flex justify-center items-center text-2xl bg-card-4">
                    <div className={moulFont.className}>Artikel Edukasi</div>
                </div>
            </Link>

            <Link href="/videobanksampah">
                <div className="rounded-[45px] w-[332px] h-[163px] border text-white flex justify-center items-center text-2xl bg-card-5">
                    <div className={moulFont.className}>Video Edukasi</div>
                </div>
            </Link>

            <Link href="/jenissampah">
                <div className="rounded-[45px] w-[332px] h-[163px] border text-white flex justify-center items-center text-2xl bg-card-5">
                    <div className={moulFont.className}>Jenis Sampah</div>
                </div>
            </Link>

        </div>

        <div className="w-full h-auto flex items-center justify-between">
            <div>
                <Image 
                src="/images/leaf-2-l.png"
                alt="leaf"
                width={100}
                height={80}
                />
            </div>
            <div>
                <Image 
                src="/images/leaf-2-r.png"
                alt="leaf"
                width={100}
                height={80}
                />
            </div>

        </div>
    </div>
  )
}

export default page
