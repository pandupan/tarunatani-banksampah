import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-11.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Inovasi dalam Kerajinan Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Inovasi dalam kerajinan dari sampah melibatkan penggunaan
            kreativitas dan teknologi untuk mengubah sampah menjadi produk yang
            berguna atau memiliki nilai estetika. Berikut beberapa konsep
            inovasi yang terkait dengan kerajinan dari sampah: 1. Teknologi
            Pengolahan yang Ramah Lingkungan: - Penggunaan Teknologi Canggih:
            Pengembangan metode dan mesin pengolahan sampah yang lebih efisien
            dan ramah lingkungan untuk menciptakan bahan baku berkualitas tinggi
            dari sampah. 2. Desain Produk yang Kreatif: - Desain Berkelanjutan:
            Perancangan produk yang tidak hanya estetis tetapi juga fungsional
            dan berkelanjutan dari bahan-bahan daur ulang. - Pemanfaatan Beragam
            Bahan: Penggabungan berbagai jenis sampah menjadi satu produk yang
            unik dan bermanfaat. 3. Pembelajaran Virtual dan Kolaborasi: -
            Platform Pembelajaran Online: Pembelajaran virtual atau tutorial
            daring tentang cara membuat kerajinan dari sampah untuk meningkatkan
            keterampilan kreatif masyarakat. - Kolaborasi dan Jaringan: Platform
            atau komunitas daring yang memungkinkan kolaborasi antarindividu
            dengan minat serupa dalam mengubah sampah menjadi kerajinan. 4.
            Penerapan Teknologi Digital: - Penggunaan Teknologi Digital:
            Pemanfaatan teknologi seperti pencetakan 3D atau desain
            komputerisasi untuk menciptakan kerajinan yang unik dari sampah. -
            Aplikasi Pemetaan Limbah: Pengembangan aplikasi yang membantu orang
            untuk menemukan bahan baku dari sampah di sekitar mereka untuk
            digunakan dalam kerajinan. 5. Pendidikan dan Kampanye Kesadaran: -
            Platform Edukasi Interaktif: Penggunaan permainan, aplikasi edukasi,
            atau video interaktif untuk meningkatkan kesadaran masyarakat
            tentang pentingnya daur ulang dan penggunaan kreatif sampah. -
            Program Pelatihan Kreatif: Penyelenggaraan program pelatihan kreatif
            bagi masyarakat atau sekolah untuk menciptakan kesadaran dan
            keterampilan dalam mengubah sampah menjadi kerajinan. 6. Pemanfaatan
            Energi Terbarukan: - Penggunaan Energi Terbarukan: Inovasi yang
            mengintegrasikan penggunaan energi terbarukan dalam proses produksi
            kerajinan dari sampah untuk menekan dampak lingkungan. 7.
            Pengembangan Material Ramah Lingkungan: - Penelitian Material
            Inovatif: Penelitian terus-menerus untuk mengembangkan material baru
            dari sampah yang lebih ramah lingkungan dan memiliki karakteristik
            yang berguna. 8. Kolaborasi dengan Industri Kreatif: - Kemitraan
            dengan Industri Kreatif: Kolaborasi dengan desainer, seniman, atau
            pelaku industri kreatif lainnya untuk menciptakan produk unik dari
            sampah dengan nilai jual yang tinggi. Inovasi dalam kerajinan dari
            sampah tidak hanya mencakup kreativitas dalam pembuatan
            barang-barang baru dari sampah, tetapi juga melibatkan perkembangan
            teknologi dan pendekatan edukatif untuk meningkatkan kesadaran dan
            keterampilan masyarakat dalam mengelola sampah secara kreatif dan
            bertanggung jawab.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
