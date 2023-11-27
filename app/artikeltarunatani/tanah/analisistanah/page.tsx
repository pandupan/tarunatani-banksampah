import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/perantani-10.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Analisis Tanah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
          Analisis tanah adalah proses penting dalam pertanian yang bertujuan untuk memahami komposisi dan karakteristik tanah untuk meningkatkan pertumbuhan tanaman. Proses analisis ini melibatkan pengujian fisik, kimia, dan biologi tanah untuk mengevaluasi kesehatan dan kesuburan tanah. Berikut adalah beberapa aspek penting dalam analisis tanah:

Pengambilan Sampel Tanah: Langkah awal dalam analisis tanah adalah pengambilan sampel tanah yang representatif dari area pertanian yang akan dianalisis. Sampel diambil dari berbagai titik di lapangan untuk mewakili variasi yang ada.
Uji Fisik Tanah: Melibatkan penilaian tekstur tanah (kandungan pasir, lumpur, dan debu), struktur tanah (gumpalan tanah, pori-pori, dan agregat), serta tingkat kepadatan yang dapat mempengaruhi drainase, retensi air, dan pertumbuhan akar tanaman.
Uji Kimia Tanah: Menilai kandungan nutrisi penting dalam tanah seperti nitrogen (N), fosfor (P), kalium (K), kalsium, magnesium, sulfur, serta mikronutrien seperti besi, tembaga, seng, dan lainnya. Pengukuran pH tanah juga dilakukan dalam uji kimia karena pH dapat memengaruhi ketersediaan nutrisi bagi tanaman.
Analisis Kandungan Organik: Menilai kandungan bahan organik dalam tanah yang mempengaruhi kesuburan tanah. Bahan organik membantu meningkatkan struktur tanah dan menyediakan nutrisi bagi mikroba serta tanaman.
Pemantauan Kesehatan Tanah: Selain uji fisik dan kimia, analisis tanah juga bisa mencakup evaluasi mikroba dan aktivitas biologis dalam tanah. Ini penting untuk memahami kesehatan tanah dan aktivitas mikroba yang membantu dalam dekomposisi bahan organik serta siklus nutrisi.
Interpretasi Hasil dan Rekomendasi: Setelah analisis selesai, hasilnya diinterpretasikan untuk memberikan rekomendasi pemupukan, penyesuaian pH, dan manajemen tanah lainnya yang diperlukan untuk meningkatkan kesuburan tanah sesuai dengan kebutuhan tanaman yang akan ditanam.

Penggunaan analisis tanah secara teratur membantu petani untuk mengoptimalkan penggunaan pupuk, memperbaiki kondisi tanah, dan mempertahankan kesuburan tanah dalam jangka panjang. Hal ini juga membantu dalam praktik pertanian yang berkelanjutan dan efisien secara ekonomi.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
