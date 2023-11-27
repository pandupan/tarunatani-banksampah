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
          Model dan Manfaat Ekonomi dan Sosial Bank Sampaherasional Bank Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Bank sampah memberikan manfaat ekonomi dan sosial yang signifikan
            bagi masyarakat dan lingkungan sekitarnya: Manfaat Ekonomi: 1.
            Pendapatan Tambahan: Masyarakat dapat menghasilkan pendapatan
            tambahan dari penjualan sampah yang mereka kumpulkan kepada bank
            sampah. Hal ini memberikan sumber pendapatan tambahan bagi individu
            atau keluarga yang membutuhkan. 2. Penciptaan Lapangan Kerja: Bank
            sampah menciptakan peluang kerja bagi penduduk lokal. Mereka yang
            terlibat dalam kegiatan pengumpulan, pemilahan, dan pengolahan
            sampah memiliki peluang untuk bekerja di bank sampah. 3. Nilai
            Ekonomis dari Daur Ulang: Bank sampah mengubah sampah menjadi barang
            yang memiliki nilai ekonomis. Proses daur ulang menciptakan
            produk-produk baru dari sampah yang dapat dijual kembali. 4.
            Mengurangi Biaya Pengelolaan Sampah: Dengan memilah sampah dan
            mengolahnya menjadi bahan yang dapat didaur ulang, bank sampah
            membantu mengurangi jumlah sampah yang masuk ke tempat pembuangan
            akhir (TPA). Hal ini dapat mengurangi biaya yang dikeluarkan untuk
            pengelolaan TPA. Manfaat Sosial: 1. Edukasi Lingkungan: Bank sampah
            menjadi pusat edukasi lingkungan bagi masyarakat sekitar. Mereka
            belajar tentang pentingnya pengelolaan sampah yang benar dan dampak
            positifnya terhadap lingkungan. 2. Pemberdayaan Masyarakat: Melalui
            bank sampah, masyarakat diajak untuk berpartisipasi aktif dalam
            pengelolaan sampah. Mereka merasa memiliki peran yang penting dalam
            menjaga kebersihan lingkungan dan merasa terlibat dalam upaya
            pelestarian lingkungan. 3. Peningkatan Kesehatan dan Kualitas Hidup:
            Dengan pengelolaan sampah yang baik, bank sampah membantu menjaga
            kebersihan lingkungan sekitar. Hal ini dapat berdampak positif pada
            kesehatan masyarakat dan meningkatkan kualitas hidup mereka. 4.
            Pembangunan Komunitas Berkelanjutan: Bank sampah dapat menjadi pusat
            kerjasama antara pemerintah, perusahaan, LSM, dan masyarakat lokal
            untuk menciptakan komunitas yang peduli terhadap lingkungan dan
            berkomitmen pada praktik berkelanjutan. Manfaat ekonomi dan sosial
            dari bank sampah mencakup peningkatan pendapatan, pemberdayaan
            masyarakat, edukasi lingkungan, dan peningkatan kualitas lingkungan
            sekitar. Dengan memanfaatkan sampah sebagai sumber daya, bank sampah
            menjadi salah satu solusi yang efektif dalam menjaga keberlanjutan
            lingkungan dan meningkatkan kesejahteraan masyarakat secara
            keseluruhan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
