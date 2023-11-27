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
            Pendidikan Lingkungan Hidup Melalui Bank Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Pendidikan lingkungan hidup melalui bank sampah merupakan pendekatan
            yang efektif untuk meningkatkan kesadaran masyarakat tentang
            pentingnya pengelolaan sampah yang benar dan praktik ramah
            lingkungan. Berikut adalah beberapa cara bagaimana bank sampah dapat
            menjadi sarana untuk memberikan pendidikan lingkungan hidup kepada
            masyarakat: 1. Edukasi Tentang Pentingnya Memilah Sampah: -
            Penyuluhan dan Workshop: Bank sampah dapat menyelenggarakan sesi
            penyuluhan dan workshop bagi masyarakat setempat tentang pentingnya
            memilah sampah. - Kampanye Sosial: Melakukan kampanye secara rutin
            melalui media sosial, spanduk, brosur, dan kegiatan komunitas untuk
            meningkatkan kesadaran akan pentingnya memilah sampah. 2.
            Demonstrasi Proses Daur Ulang: - tur Bank Sampah: Mengundang
            masyarakat untuk mengunjungi bank sampah dan memberikan demonstrasi
            mengenai proses pengumpulan, pemilahan, dan pengolahan sampah
            menjadi barang yang dapat didaur ulang. - Kegiatan Praktikum atau
            Pelatihan: Mengadakan kegiatan praktikum atau pelatihan bagi pelajar
            atau kelompok masyarakat tertentu untuk memberikan pengalaman
            langsung tentang proses daur ulang. 3. Program Pendidikan Lingkungan
            di Sekolah: - Kerjasama dengan Sekolah: Melakukan kerjasama dengan
            sekolah-sekolah untuk mengintegrasikan pendidikan lingkungan ke
            dalam kurikulum, termasuk kunjungan ke bank sampah dan
            program-program pendidikan terkait. - Kompetisi dan Program Kreatif:
            Mengadakan kompetisi atau program kreatif tentang lingkungan di
            sekolah yang berfokus pada pengelolaan sampah dan daur ulang. 4.
            Promosi Gaya Hidup Berkelanjutan: - Penekanan pada 3R (Reduce,
            Reuse, Recycle): Mengajak masyarakat untuk menerapkan prinsip 3R
            dalam kehidupan sehari-hari: mengurangi, menggunakan kembali, dan
            mendaur ulang barang-barang. - Promosi Barang Bekas yang Layak
            Pakai: Mendorong masyarakat untuk membeli atau menggunakan
            barang-barang bekas yang masih layak pakai untuk mengurangi limbah.
            5. Program Insentif bagi Partisipan: - Reward System: Menerapkan
            sistem insentif atau reward bagi masyarakat yang aktif
            berpartisipasi dalam program pengumpulan sampah, baik dalam bentuk
            hadiah, poin, atau diskon di tempat usaha mitra bank sampah. 6.
            Kampanye Kesadaran Lingkungan Masyarakat: - Kampanye Lingkungan yang
            Berkelanjutan: Menjadi pusat informasi untuk kampanye lingkungan
            yang berkelanjutan, tidak hanya seputar sampah tetapi juga tentang
            pelestarian lingkungan secara keseluruhan. Pendidikan lingkungan
            hidup melalui bank sampah bukan hanya mengenai pengelolaan sampah,
            tetapi juga tentang perubahan perilaku masyarakat menuju gaya hidup
            yang lebih ramah lingkungan. Dengan pendekatan yang kreatif dan
            terintegrasi, bank sampah dapat menjadi sarana yang efektif dalam
            meningkatkan kesadaran lingkungan dan mendorong tindakan yang
            bertanggung jawab terhadap lingkungan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
