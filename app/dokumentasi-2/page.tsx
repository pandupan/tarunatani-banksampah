import { moulFont } from "@/utils/font"
import Image from "next/image"

const page = () => {
  return (
    <div className="container w-full border border-theme-green">

        <div className="flex flex-col justify-center pt-[-1] items-center w-[320px] h-full space-y-8 mx-auto mt-[75px] ">

            <h2 className="text-3xl text-center mt-10">Dokumentasi</h2>

            <div>
                <Image
                    src="/images/dokumentasi-1.png"
                    alt="penjelasan"
                    width={350}
                    height={100}
                />
            </div>


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
