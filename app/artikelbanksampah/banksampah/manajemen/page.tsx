import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-8.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Manajemen Bank Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Manajemen Bank Sampah merupakan serangkaian kegiatan yang melibatkan
            perencanaan, pengorganisasian, penggerakan, pengendalian, dan
            penilaian yang sistematis dari semua aspek yang terkait dengan
            operasional bank sampah. Berikut adalah penjelasan lebih rinci
            mengenai aspek-aspek manajemen bank sampah: 1. Perencanaan Bank
            Sampah: - Perencanaan Strategis: Membuat visi, misi, dan tujuan
            jangka panjang bank sampah serta rencana strategi untuk mencapainya.
            - Perencanaan Operasional: Menyusun rencana kegiatan harian,
            mingguan, bulanan, dan tahunan untuk pengumpulan, pemilahan,
            pengolahan, dan pemasaran sampah. 2. Pengorganisasian Bank Sampah: -
            Struktur Organisasi: Menetapkan struktur organisasi yang jelas,
            termasuk tugas, tanggung jawab, dan hierarki antar bagian atau tim.
            - Pengelolaan Sumber Daya Manusia: Merekrut, melatih, dan
            mengembangkan tim kerja agar memiliki kompetensi yang diperlukan. 3.
            Penggerakan (Actuating): - Operasional Harian: Memastikan
            pengumpulan sampah berlangsung sesuai jadwal, melakukan pemilahan
            yang tepat, dan menjalankan proses pengolahan sampah. - Pengembangan
            Program Edukasi: Menggelar kegiatan sosialisasi dan edukasi kepada
            masyarakat untuk meningkatkan partisipasi dalam bank sampah. 4.
            Pengendalian (Controlling): - Pemantauan Kinerja: Melakukan
            monitoring terhadap volume sampah terkumpul, tingkat kebersihan,
            kualitas hasil daur ulang, serta efisiensi operasional. - Pengawasan
            Keuangan: Mengelola dan memantau arus keuangan bank sampah, termasuk
            pendapatan, pengeluaran, dan penggunaan dana. 5. Evaluasi dan
            Penilaian: - Evaluasi Program: Melakukan evaluasi berkala untuk
            mengevaluasi efektivitas program, menentukan pencapaian target,
            serta mengidentifikasi area yang perlu perbaikan. - Penilaian
            Kinerja: Menilai kinerja bank sampah secara keseluruhan serta
            menetapkan indikator kinerja yang dapat diukur. 6. Inovasi dan
            Pengembangan Berkelanjutan: - Pengembangan Teknologi: Terus
            mengembangkan teknologi yang lebih efisien untuk proses pengolahan
            sampah. - Riset dan Pengembangan: Melakukan riset untuk
            mengidentifikasi cara-cara baru dalam mengelola sampah serta
            mengeksplorasi peluang-peluang baru dalam daur ulang. 7. Kemitraan
            dan Jaringan: - Kerjasama dengan Pihak Eksternal: Membangun
            kerjasama dengan pemerintah, perusahaan, lembaga swadaya masyarakat,
            dan komunitas lokal untuk mendukung program bank sampah. Manajemen
            bank sampah yang efektif memerlukan perencanaan yang matang,
            pelaksanaan yang teratur, pengawasan yang cermat, serta evaluasi
            yang terus-menerus. Dengan pengelolaan yang baik, bank sampah dapat
            memberikan manfaat yang signifikan dalam mengurangi jumlah sampah
            yang mencemari lingkungan serta memberikan nilai ekonomis bagi
            masyarakat.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
