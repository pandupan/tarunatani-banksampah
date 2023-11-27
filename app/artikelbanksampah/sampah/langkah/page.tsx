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
            Langkah Langkah Menghasilkan Kerajinan Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Berikut adalah langkah-langkah umum dalam menghasilkan kerajinan
            dari sampah: 1. Pemilihan Bahan Sampah: - Pilih Jenis Sampah:
            Tentukan jenis sampah yang akan dijadikan bahan kerajinan. Misalnya,
            kertas bekas, botol plastik, kaleng bekas, atau bahan lainnya. 2.
            Pemilahan dan Persiapan Bahan: - Pemilahan dan Pembersihan: Pisahkan
            dan bersihkan sampah untuk memastikan bahan siap untuk diolah
            menjadi kerajinan. - Pemotongan atau Pemisahan: Sesuaikan bentuk dan
            ukuran bahan sampah yang akan digunakan sesuai desain kerajinan yang
            diinginkan. 3. Rencana Desain dan Kreativitas: - Ide dan Rencana
            Desain: Buat rencana desain atau sketsa mengenai produk kerajinan
            yang ingin dibuat dari bahan sampah. - Kreativitas dan Inovasi:
            Eksplorasi dan aplikasikan ide kreatif untuk mengubah sampah menjadi
            produk yang unik dan bermanfaat. 4. Proses Produksi: - Penerapan
            Teknik Tertentu: Terapkan teknik yang sesuai dengan bahan dan desain
            kerajinan, seperti teknik anyaman, pemotongan, perekatan, atau
            pembentukan. - Penggunaan Alat atau Mesin: Jika diperlukan, gunakan
            alat atau mesin tertentu untuk membantu dalam proses produksi. 5.
            Perakitan dan Finishing: - Perakitan Produk: Rakit semua bagian
            kerajinan sesuai dengan rencana desain yang telah dibuat. -
            Finishing dan Detailing: Tambahkan sentuhan terakhir seperti
            pewarnaan, pola, atau detail tambahan untuk meningkatkan estetika
            produk. 6. Uji Coba dan Koreksi: - Evaluasi dan Perbaikan: Periksa
            hasil kerajinan dan lakukan evaluasi untuk melihat apakah ada bagian
            yang perlu diperbaiki atau ditingkatkan. 7. Presentasi atau
            Pemasaran: - Pameran atau Penjualan: Jika tujuan akhirnya adalah
            untuk menjual produk, siapkan produk kerajinan untuk dipamerkan atau
            dijual kepada konsumen. 8. Edukasi dan Kesadaran Lingkungan: -
            Bagikan Pengalaman: Bagikan pengalaman Anda dalam menghasilkan
            kerajinan dari sampah dan ceritakan manfaatnya untuk meningkatkan
            kesadaran lingkungan. Langkah-langkah ini dapat disesuaikan dengan
            jenis sampah dan desain kerajinan yang diinginkan. Penting untuk
            menjaga kreativitas, kesabaran, dan inovasi dalam proses mengubah
            sampah menjadi kerajinan yang bermanfaat dan estetis.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
