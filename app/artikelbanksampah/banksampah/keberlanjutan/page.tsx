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
            Keberlanjutan dan Keberlangsungan Bank Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Keberlanjutan dan keberlangsungan bank sampah merujuk pada kemampuan
            bank sampah untuk terus beroperasi dan memberikan dampak positif
            dalam jangka panjang baik dari segi lingkungan, sosial, maupun
            ekonomi. Berikut adalah poin-poin yang lebih mendetail tentang
            keberlanjutan dan keberlangsungan bank sampah: 1. Aspek
            Keberlanjutan Ekonomi: - Pendapatan dan Kemandirian Keuangan:
            Menciptakan model bisnis yang berkelanjutan sehingga bank sampah
            dapat menghasilkan pendapatan yang cukup untuk menutupi biaya
            operasionalnya. - Diversifikasi Pendapatan: Melakukan diversifikasi
            dalam sumber pendapatan, misalnya dari penjualan hasil daur ulang,
            layanan pendauran ulang, atau kerjasama dengan pihak swasta. 2.
            Aspek Keberlanjutan Lingkungan: - Efisiensi dalam Pengelolaan
            Sampah: Mengadopsi teknologi dan metode pengolahan yang ramah
            lingkungan untuk mengurangi dampak negatif pada lingkungan sekitar.
            - Promosi Prinsip 3R (Reduce, Reuse, Recycle): Mendorong masyarakat
            untuk mengurangi sampah, menggunakan kembali barang-barang, dan
            mendaur ulang sebanyak mungkin. 3. Aspek Keberlanjutan Sosial: -
            Partisipasi Masyarakat yang Berkelanjutan:Mengembangkan
            program-program yang dapat mempertahankan minat dan partisipasi
            masyarakat dalam kegiatan bank sampah. - Pemberdayaan Masyarakat:
            Memberdayakan masyarakat lokal melalui pelatihan, edukasi, dan
            kesempatan kerja terkait pengelolaan sampah. 4. Pengelolaan Risiko
            dan Tantangan: - Manajemen Risiko: Mengidentifikasi dan mengelola
            risiko-risiko yang mungkin dihadapi oleh bank sampah, seperti
            fluktuasi harga bahan baku daur ulang atau perubahan kebijakan
            pemerintah terkait sampah. - Mengatasi Tantangan Operasional:
            Menghadapi tantangan dalam hal infrastruktur, kebijakan, atau
            perubahan perilaku masyarakat dengan strategi yang adaptif. 5.
            Pemantauan dan Evaluasi Berkelanjutan: - Pemantauan Kinerja:
            Melakukan pemantauan terus-menerus terhadap kinerja bank sampah,
            termasuk dalam hal jumlah sampah terkumpul, tingkat daur ulang, dan
            dampak lingkungan. - Evaluasi dan Penyesuaian Strategi: Melakukan
            evaluasi berkala dan penyesuaian strategi untuk meningkatkan
            efektivitas dan efisiensi bank sampah. 6. Kemitraan dan Kolaborasi:
            - Kerjasama dengan Pihak Eksternal: Membangun kemitraan yang kuat
            dengan pemerintah, perusahaan, LSM, dan komunitas lokal untuk
            mendukung keberlanjutan bank sampah. Keberlanjutan bank sampah
            sangatlah penting untuk memastikan bahwa upaya pengelolaan sampah
            yang dilakukan dapat berlangsung secara berkelanjutan. Dengan
            pendekatan yang holistik dan strategi yang adaptif, bank sampah
            dapat menjadi salah satu model yang efektif dalam mengelola sampah,
            memberikan manfaat ekonomi, sosial, dan lingkungan, serta
            memberdayakan masyarakat untuk terlibat secara aktif dalam menjaga
            lingkungan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
