import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="container w-full border border-theme-green">

        <div className="flex flex-col justify-center pt-[-1] items-center w-[320px] h-full space-y-8 mx-auto mt-[75px] ">

            <h2 className="text-3xl text-left underline-offset-4 mt-10">1. Jenis Sayuran</h2>

            <Link href="/jenistanaman/jenissayur">
                <div>
                    <Image
                        src="/images/sayur-1.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

            <Link href="/jenistanaman/jenissayur">
                <div>
                    <Image
                        src="/images/sayur-2.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

            <Link href="/jenistanaman/jenissayur">
                <div>
                    <Image
                        src="/images/sayur-3.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

            <Link href="/jenistanaman/jenissayur">
                <div>
                    <Image
                        src="/images/sayur-4.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

            <Link href="/jenistanaman/jenissayur">
                <div>
                    <Image
                        src="/images/sayur-5.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

        </div>

        <div className="flex flex-col justify-center pt-[-1] items-center w-[320px] h-full space-y-8 mx-auto mt-[75px] ">

            <h2 className="text-3xl text-left underline-offset-4 mt-10">2. Jenis Buah</h2>
            
            <Link href="/jenistanaman/jenisbuah">            
                <div>
                    <Image
                        src="/images/buah-1.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>
            
            <Link href="/jenistanaman/jenisbuah">            
                <div>
                    <Image
                        src="/images/buah-2.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>
            
            <Link href="/jenistanaman/jenisbuah">            
                <div>
                    <Image
                        src="/images/buah-3.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>
            
            <Link href="/jenistanaman/jenisbuah">            
                <div>
                    <Image
                        src="/images/buah-4.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>
            
            <Link href="/jenistanaman/jenisbuah">            
                <div>
                    <Image
                        src="/images/buah-5.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>


        </div>

        <div className="flex flex-col justify-center pt-[-1] items-center w-[320px] h-full space-y-8 mx-auto mt-[75px] ">

            <h2 className="text-3xl text-left underline-offset-4 mt-10">2. Jenis Bunga</h2>

            <Link href="/jenistanaman/jenisbunga">            
                <div>
                    <Image
                        src="/images/bunga-1.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

            <Link href="/jenistanaman/jenisbunga">            
                <div>
                    <Image
                        src="/images/bunga-2.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

            <Link href="/jenistanaman/jenisbunga">            
                <div>
                    <Image
                        src="/images/bunga-3.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

            <Link href="/jenistanaman/jenisbunga">            
                <div>
                    <Image
                        src="/images/bunga-4.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
                </div>
            </Link>

            <Link href="/jenistanaman/jenisbunga">            
                <div>
                    <Image
                        src="/images/bunga-5.png"
                        alt="penjelasan"
                        width={350}
                        height={100}
                    />
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
