import { patuaFont } from "@/utils/font"
import Image from "next/image"

const page = () => {
  return (
    <div className="container w-full border border-theme-green">
      <div className="flex flex-col justify-center pt-10 items-center w-[320px] h-full space-y-8 mx-auto mt-[75px] ">
        <h2 className="text-2xl text-center">
          Explore Pengetahuan Taruna Tani
        </h2>

        <h3 className="text-xl text-center text-theme-green">Sejarah Singkat</h3>

        <p className="text-base text-center text-theme-green">
          <span className={patuaFont.className}>
            Taruna Tani dan Bank Sampah memiliki hubungan yang saling terkait.
            Bank Sampah sudah ada sejak 10 Januari 2022, sebelum kemudian Taruna
            Tani didirikan. Hal ini disebabkan sebagian sampah organik tidak dapat
            didaur ulang, sehingga sampah tersebut digunakan untuk keperluan
            pertanian, dan inilah yang mendorong pendirian Taruna Tani pada 23
            Februari 2023. Maka dari itu, Taruna Tani dan Bank Sampah memiliki
            keterkaitan yang erat, dengan keduanya dipimpin oleh individu yang
            sama, yaitu Bapak Nanang Somantri. Selain itu, keduanya telah dikenal
            oleh berbagai pejabat, termasuk walikota dan pejabat lainnya. Kegiatan
            ini juga sering meraih prestasi, salah satunya adalah kemenangan dalam
            Lomba Kebersihan dan Inovasi beberapa bulan yang lalu, yang pernah
            diliput oleh salah satu stasiun televisi.
          </span>
        </p>
      </div>

      <div className="w-full h-auto flex items-center justify-between">
        <div>
          <Image
            src="/images/leaf-3-l.png"
            alt="leaf"
            width={120}
            height={80}
          />
        </div>
        <div>
          <Image
            src="/images/leaf-3-r.png"
            alt="leaf"
            width={120}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}

export default page
