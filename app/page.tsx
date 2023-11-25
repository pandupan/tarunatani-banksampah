import Link from "next/link"
import {patuaFont} from "../utils/font"

export default function Home() {
  return (
    <main className="container w-full h-full text-white ">
      <div className="flex mt-[75px] flex-col items-center w-full min-h-[95vh] bg-hero p-8">
        <div className="my-8 pb-12">
          <div className="tracking-wider text-center my-3">
            <h1 className="text-4xl">WELCOME</h1>
            <div className="bg-white py-[2.5px] w-[200px] my-4 mx-auto"/>
          </div>
          <div className="text-center  my-1">
            <h1 className="text-3xl">TARUNA TANI &</h1>
            <h1 className="text-3xl">WEBSITE BANK SAMPAH</h1>
          </div>
        </div>
        <div className="text-center text-xl tracking-widest">
            <p className={patuaFont.className}>
              &quot;Taruna tani kita menari dengan kegembiraan di tanah subur. Bersama bank sampah, kita beriringan melodi kebaikan untuk lingkungan yang lebih baik.&quot;
            </p>
        </div>
        <Link href="/profile">
          <button className="bg-theme-green rounded-2xl text-white px-10 py-2 border-solid border-2 border-white mt-24">
            Masuk
          </button>
        </Link>
      </div>
    </main>
  )
}
