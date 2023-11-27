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
            Pengaruh Positif Mengubah Sampah Menjadi Kerajinan
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Mengubah sampah menjadi kerajinan memiliki sejumlah pengaruh
            positif, baik bagi lingkungan, sosial, maupun ekonomi. Beberapa
            dampak positif dari mengubah sampah menjadi kerajinan antara lain:
            1. Pengurangan Limbah: - Mengurangi Pencemaran Lingkungan: Proses
            mengubah sampah menjadi kerajinan mengurangi jumlah sampah yang
            masuk ke tempat pembuangan akhir (TPA) atau yang berserakan di
            lingkungan. 2. Kreativitas dan Edukasi: - Meningkatkan Kreativitas:
            Mengubah sampah menjadi kerajinan mendorong kreativitas dalam
            menciptakan barang-barang baru dari bahan yang dianggap tidak
            berguna. - Pendidikan Lingkungan: Proses ini juga dapat menjadi alat
            pendidikan lingkungan yang efektif, meningkatkan kesadaran akan
            pentingnya daur ulang dan pengelolaan sampah yang bertanggung jawab.
            3. Pembangunan Ekonomi: - Peningkatan Peluang Ekonomi: Kegiatan
            mengubah sampah menjadi kerajinan dapat menjadi peluang ekonomi
            dengan menjual kerajinan yang dihasilkan. - Pemberdayaan Ekonomi
            Lokal: Mendorong usaha mikro dan menengah serta membantu
            pemberdayaan ekonomi masyarakat lokal dengan membuat barang-barang
            yang dapat dijual. 4. Pembelajaran Keterampilan: - Peningkatan
            Keterampilan: Proses membuat kerajinan dari sampah dapat
            meningkatkan keterampilan dan keahlian tangan serta kreativitas pada
            individu yang terlibat. - Pengembangan Kemampuan Kewirausahaan:
            Melalui proses pembuatan kerajinan, individu dapat belajar tentang
            manajemen usaha kecil dan pemasaran produk. 5. Pengurangan
            Penggunaan Bahan Baru: - Penghematan Sumber Daya: Mengubah sampah
            menjadi kerajinan membantu dalam pengurangan penggunaan bahan baru,
            sehingga mengurangi tekanan pada sumber daya alam. 6. Kesadaran
            Lingkungan dan Sosial: - Peningkatan Kesadaran Lingkungan: Melalui
            karya seni dan kerajinan dari sampah, masyarakat dapat lebih peka
            terhadap masalah lingkungan dan pentingnya pengelolaan sampah yang
            berkelanjutan. - Pemberdayaan Sosial: Proses ini juga dapat
            membangun kesadaran sosial, menggalang dukungan komunitas, dan
            membangun kebersamaan dalam mengatasi masalah lingkungan. 7. Solusi
            Inovatif: - Inovasi Dalam Pengelolaan Sampah: Mengubah sampah
            menjadi kerajinan adalah contoh solusi inovatif dalam mengatasi
            masalah pengelolaan sampah, serta mengubah persepsi negatif terhadap
            sampah menjadi sesuatu yang bermanfaat. Mengubah sampah menjadi
            kerajinan memiliki dampak yang positif pada lingkungan, ekonomi, dan
            sosial. Ini dapat menjadi langkah awal yang signifikan dalam upaya
            kita untuk mengurangi dampak negatif sampah terhadap lingkungan
            sekaligus memanfaatkannya secara kreatif.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
