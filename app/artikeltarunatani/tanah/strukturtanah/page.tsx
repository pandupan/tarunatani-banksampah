import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/perantani-3.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Struktur Tanah</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>Faktor yang Membuat Tanah Ideal</p>
          <p className={patuaFont.className}>
            Struktur tanah yang optimal untuk pertumbuhan tanaman secara umum
            memiliki beberapa karakteristik yang mendukung perkembangan akar,
            retensi air, serta pergerakan udara dan nutrisi dalam tanah.
            Beberapa sifat yang membentuk struktur tanah yang ideal untuk
            pertumbuhan tanaman antara lain:
          </p>
          <p className={patuaFont.className}>
            Agregat yang Baik: Gumpalan-gumpalan Tanah (Agregat): Agregat tanah
            yang terbentuk dari partikel-partikel tanah yang saling terikat
            membentuk gumpalan kecil hingga sedang. Ini memungkinkan ruang
            pori-pori udara dan air, serta menyediakan ruang yang optimal bagi
            pertumbuhan akar.
          </p>
          <p className={patuaFont.className}>
            Keseimbangan Antara Retensi Air dan Drainase: Kemampuan Retensi Air
            yang Cukup: Struktur tanah yang baik memungkinkan tanah untuk
            menyimpan air yang diperlukan bagi tanaman, mempertahankan
            kelembaban optimal untuk pertumbuhan tanaman. Drainase yang Baik:
            Tanah yang ideal juga memiliki kemampuan untuk mengalirkan air
            berlebih dengan cepat, mencegah genangan yang dapat merusak akar
            tanaman.
          </p>
          <p className={patuaFont.className}>
            Porositas yang Tepat: Pori-pori Udara dan Air yang Seimbang:
            Struktur tanah yang ideal memiliki ruang pori yang cukup untuk udara
            dan air. Pori-pori ini penting untuk pertukaran gas dan penyerapan
            air oleh akar tanaman.
          </p>
          <p className={patuaFont.className}>
            Kondisi Kepadatan yang Sesuai: Kepadatan yang Tidak Terlalu Padat:
            Tanah yang terlalu padat bisa menghambat pertumbuhan akar dan
            menghambat pergerakan air serta pertukaran udara. Tanah dengan
            kepadatan yang optimal memfasilitasi pertumbuhan akar dan aktivitas
            mikroba.
          </p>
          <p className={patuaFont.className}>
            Bahan Organik yang Cukup: Kandungan Bahan Organik yang Sehat: Bahan
            organik seperti humus membantu dalam membentuk agregat tanah,
            memperbaiki tekstur, dan menyediakan nutrisi bagi tanaman serta
            mikroba tanah.
          </p>
          <p className={patuaFont.className}>
            Mengelola struktur tanah yang optimal melibatkan praktik-praktik
            seperti penggunaan pupuk organik, penanaman kembali sisa tanaman,
            rotasi tanaman, tanaman penutup tanah, dan menghindari penggunaan
            bahan kimia yang berlebihan yang dapat merusak struktur tanah.
            Dengan menjaga struktur tanah yang baik, pertumbuhan tanaman dapat
            dioptimalkan, dan kesuburan tanah dapat dipertahankan dalam jangka
            panjang.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
