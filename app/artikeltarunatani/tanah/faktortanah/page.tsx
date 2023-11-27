import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/perantani-2.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Faktor yang Membuat Tanah Ideal
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="relative w-[250px] h-[150px] my-10">
          <Image src="/images/perantani-3.png" alt="perantani" fill={true} />
        </div>
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>Faktor yang Membuat Tanah Ideal</p>
          <p className={patuaFont.className}>
            Beberapa faktor yang membuat tanah menjadi ideal untuk pertumbuhan
            tanaman antara lain:
          </p>
          <p className={patuaFont.className}>
            Struktur Tanah yang Baik: Tanah yang ideal memiliki struktur yang
            baik, artinya memiliki keseimbangan antara partikel tanah (pasir,
            lumpur, dan liat). Tanah yang terlalu berat atau terlalu ringan bisa
            mempengaruhi drainase dan aerasi tanah. Tanah yang berstruktur baik
            memungkinkan akar tanaman untuk tumbuh dengan baik dan memperoleh
            air, udara, serta nutrisi dengan efisien.
          </p>
          <p className={patuaFont.className}>
            Kemasaman (pH) yang Sesuai: pH tanah yang ideal bervariasi
            tergantung pada jenis tanaman yang akan ditanam. Sebagian besar
            tanaman lebih suka tanah dengan pH netral (sekitar 6 hingga 7),
            tetapi ada tanaman tertentu yang membutuhkan pH yang lebih asam atau
            lebih basa. Memeriksa dan menyesuaikan pH tanah sesuai kebutuhan
            tanaman sangat penting untuk penyerapan nutrisi yang optimal.
          </p>
          <p className={patuaFont.className}>
            Kandungan Organik yang Baik: Tanah yang kaya akan bahan organik
            seperti humus dapat meningkatkan kesuburan dan struktur tanah. Bahan
            organik membantu mempertahankan kelembaban tanah, meningkatkan
            tekstur, dan menyediakan nutrisi penting bagi tanaman.
          </p>
          <p className={patuaFont.className}>
            Drainase yang Baik: Tanah yang baik harus memiliki drainase yang
            cukup baik sehingga air tidak menggenang di sekitar akar tanaman.
            Tanah yang terlalu lembab bisa menyebabkan masalah bagi tanaman
            dengan mengakibatkan pembusukan akar atau perkembangan penyakit.
          </p>
          <p className={patuaFont.className}>
            Ketersediaan Nutrisi: Tanah yang subur harus menyediakan nutrisi
            esensial seperti nitrogen, fosfor, kalium, serta unsur hara lainnya
            yang diperlukan oleh tanaman. Pemupukan atau penggunaan pupuk
            organik dapat membantu menjaga ketersediaan nutrisi tersebut.
          </p>
          <p className={patuaFont.className}>
            Tekstur yang Cocok: Tekstur tanah yang baik mencakup kerikil, pasir,
            lumpur, dan liat dalam proporsi yang tepat. Ini mempengaruhi retensi
            air, drainase, dan aerasi tanah.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
