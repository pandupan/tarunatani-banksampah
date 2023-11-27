import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-10.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Sampah An-Organik
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Sampah anorganik adalah jenis sampah yang terdiri dari material yang
            tidak mudah terurai oleh proses alami karena bersifat tidak organik
            atau bukan berasal dari bahan-bahan hidup. Berikut ini adalah materi
            tentang sampah anorganik: 1. Jenis Sampah Anorganik: - Plastik:
            Botol, kantong, wadah, dan peralatan plastik lainnya. - Kertas:
            Majalah, kardus, kertas bekas, dan kemasan kertas. - Logam: Kaleng,
            potongan logam, atau barang-barang logam lainnya. - Kaca: Botol,
            gelas, atau kaca pecah lainnya. 2. Karakteristik Sampah Anorganik: -
            Ketahanan Terhadap Penguraian: Material anorganik biasanya tidak
            mudah terurai oleh mikroorganisme dan proses alami. - Tidak Ramah
            Lingkungan: Beberapa bahan anorganik dapat menyebabkan masalah
            lingkungan jika tidak dikelola dengan baik. 3. Dampak Sampah
            Anorganik: - Pencemaran Lingkungan: Sampah anorganik yang tidak
            terurai dapat menimbulkan pencemaran jika dibuang secara
            sembarangan. - Kepadatan dan Volume: Sampah anorganik seringkali
            lebih padat dan dapat menumpuk lebih cepat dibandingkan dengan
            sampah organik. 4. Praktik Daur Ulang: - Daur Ulang Plastik, Kertas,
            Logam, dan Kaca: Praktik daur ulang sangat penting untuk mengurangi
            jumlah sampah anorganik yang masuk ke tempat pembuangan akhir (TPA).
            - Pemanfaatan Kembali Bahan: Material anorganik yang sudah didaur
            ulang dapat digunakan kembali dalam pembuatan produk baru. 5.
            Tantangan dalam Pengelolaan Sampah Anorganik: - Kompleksitas Daur
            Ulang: Beberapa jenis material anorganik memiliki tingkat kesulitan
            yang berbeda dalam proses daur ulangnya. - Kesadaran Masyarakat:
            Kesadaran akan pentingnya daur ulang dan pemilahan sampah anorganik
            masih menjadi tantangan di banyak tempat. 6. Pentingnya Pengelolaan
            yang Tepat: - Peraturan dan Kebijakan: Regulasi yang tepat sangat
            diperlukan untuk mengelola sampah anorganik dan mendorong praktek
            daur ulang. - Inovasi dalam Daur Ulang: Perlu adanya inovasi dalam
            teknologi dan metode daur ulang untuk mengatasi kompleksitas
            material anorganik. Sampah anorganik memiliki karakteristik yang
            berbeda dari sampah organik, dan pengelolaannya memerlukan
            pendekatan yang berbeda pula. Daur ulang dan pengelolaan yang tepat
            sangat penting untuk mengurangi dampak negatif sampah anorganik
            terhadap lingkungan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
