import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-9.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Prosess Daur Ulang
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Proses daur ulang merupakan serangkaian langkah yang dilakukan untuk
            mengubah sampah menjadi bahan yang dapat digunakan kembali. Berikut
            adalah tahapan umum dalam proses daur ulang: 1. Pengumpulan dan
            Pemilahan Sampah: - Pengumpulan: Sampah dikumpulkan dari berbagai
            sumber seperti rumah tangga, perkantoran, atau industri. - Pemilahan
            Awal: Sampah dipilah berdasarkan jenisnya, misalnya, plastik,
            kertas, logam, kaca, atau sampah organik. Pemilahan ini memudahkan
            proses selanjutnya. 2. Pengangkutan ke Fasilitas Daur Ulang: -
            Transportasi: Sampah yang telah dipilah dikirim ke pusat daur ulang
            atau fasilitas pengolahan khusus. 3. Proses Daur Ulang: - Proses
            Mekanis: Sampah seperti plastik, kertas, atau logam dapat
            dihancurkan, dilebur, atau diproses secara mekanis untuk diubah
            menjadi bahan baku baru. - Proses Kimia: Beberapa jenis sampah
            memerlukan proses kimia untuk diurai atau diubah menjadi bahan yang
            dapat digunakan kembali. - Proses Biologis: Sampah organik seperti
            limbah makanan dapat diurai secara alami melalui proses biologis,
            menghasilkan kompos atau energi biogas. 4. Pembersihan dan
            Pemurnian: - Pembersihan Tambahan: Beberapa bahan daur ulang mungkin
            memerlukan tahap pembersihan lebih lanjut untuk menghilangkan
            kontaminan atau zat-zat asing lainnya. - Pemurnian: Proses pemisahan
            atau penyaringan untuk mendapatkan bahan daur ulang yang lebih
            murni. 5. Pembentukan Produk Baru: - Rekayasa Produk: Bahan hasil
            daur ulang digunakan untuk membuat produk baru atau sebagai bahan
            baku dalam industri tertentu. - Inovasi Produk: Penggunaan bahan
            daur ulang dalam inovasi produk untuk mengurangi ketergantungan pada
            bahan baku baru. 6. Implementasi dalam Skala Besar: - Penerapan di
            Industri: Daur ulang digunakan dalam industri manufaktur,
            konstruksi, dan sektor lainnya untuk mengurangi limbah dan
            memanfaatkan kembali bahan. - Manfaat Ekonomi: Keuntungan ekonomi
            dari penggunaan bahan daur ulang dan pengelolaan sampah yang
            efisien. 7. Pendidikan dan Kesadaran Masyarakat: - Peran Masyarakat:
            Kesadaran akan pentingnya pemilahan sampah dan praktik daur ulang
            dalam lingkungan sehari-hari. - Edukasi Lingkungan: Pentingnya
            memberikan edukasi tentang praktik daur ulang dan pengelolaan sampah
            yang bertanggung jawab. 8. Teknologi dan Inovasi: - Penggunaan
            Teknologi: Penerapan teknologi terkini dalam memproses sampah
            menjadi bahan daur ulang. - Inovasi dalam Pengelolaan Sampah: Upaya
            untuk mengembangkan metode dan teknologi baru yang lebih efisien dan
            ramah lingkungan dalam proses daur ulang. Proses daur ulang
            melibatkan serangkaian langkah yang bertujuan untuk mengurangi
            limbah, memanfaatkan kembali sumber daya, dan menciptakan siklus
            yang lebih berkelanjutan dalam penggunaan bahan-bahan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
