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
            Teknik dan Metode yang Digunakan dalam Pembuatan Kerajinan
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Terdapat beberapa teknik dan metode yang digunakan dalam pembuatan
            kerajinan dari sampah. Berikut adalah materi terkait teknik-teknik
            tersebut: 1. Teknik Anyaman: - Deskripsi: Penggunaan teknik anyaman
            dengan menggunakan bahan seperti kertas, kain, atau plastik untuk
            membuat kerajinan tangan seperti tas, tikar, atau wadah penyimpanan.
            - Contoh: Tas dari kantong plastik anyaman, keranjang dari koran
            bekas, atau tikar dari tali rafia. 2. Pemotongan dan Penyusunan: -
            Deskripsi: Memanfaatkan teknik pemotongan dan penyusunan
            potongan-potongan sampah untuk membuat karya seni atau hiasan
            dinding. - Contoh: Lukisan mozaik dari pecahan kaca atau karya seni
            abstrak dari potongan kertas bekas. 3. Pencetakan atau Pembentukan:
            - Deskripsi: Menggunakan teknik cetak atau pembentukan untuk
            menciptakan pola atau bentuk tertentu dari sampah. - Contoh: Cetakan
            dari botol plastik untuk membuat vas bunga atau cetakan dari kertas
            bekas untuk pembuatan kartu ucapan. 4. Penggabungan atau Perekatan:
            - Deskripsi: Menggabungkan potongan-potongan sampah menggunakan
            perekat atau alat pengikat untuk membentuk struktur yang lebih besar
            atau kompleks. - Contoh: Membuat patung atau miniatur bangunan dari
            barang-barang elektronik bekas yang digabungkan dan ditempelkan. 5.
            Pembentukan 3D atau Pemodelan: - Deskripsi: Membuat kerajinan tiga
            dimensi (3D) dari sampah dengan menggunakan teknik pemodelan atau
            pembentukan bentuk tertentu. - Contoh: Membuat hewan miniatur dari
            kardus, plastik, atau logam bekas dengan membentuk dan merakit
            potongan-potongan sampah. 6. Pemanfaatan dan Pemangkasan: -
            Deskripsi: Menggunakan potongan-potongan atau bagian spesifik dari
            sampah untuk membuat karya seni atau barang lainnya. - Contoh:
            Membuat perhiasan dari potongan kancing atau membuat miniatur
            bangunan dari stik es krim bekas. Materi tentang teknik dan metode
            pembuatan kerajinan dari sampah dapat mencakup panduan langkah demi
            langkah, gambar, atau video tutorial yang menjelaskan bagaimana
            setiap teknik diterapkan pada berbagai jenis sampah untuk
            menciptakan karya seni atau kerajinan yang menarik dan bermanfaat.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
