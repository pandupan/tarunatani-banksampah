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
            Sampah yang Dapat Diubah Menjadi Kerajinan
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Terdapat banyak jenis sampah yang dapat diubah menjadi kerajinan
            kreatif. Berikut beberapa materi terkait jenis sampah yang bisa
            dijadikan kerajinan: 1. Kertas Bekas: - Kerajinan: Pembuatan kartu
            ucapan, origami, buku catatan, bingkai foto, atau hiasan dinding
            dari kertas bekas, majalah, atau kardus. 2. Botol Plastik: -
            Kerajinan: Membuat vas bunga, tempat pensil, boneka, keranjang
            penyimpanan, atau hiasan taman dari botol plastik bekas. 3. Kaleng
            Bekas: - Kerajinan: Membuat lampu hias, pot bunga, dekorasi dinding,
            atau mainan anak-anak dari kaleng bekas. 4. Kain Bekas: - Kerajinan:
            Membuat tas belanja, bunga kain, gantungan kunci, atau bantal dari
            potongan kain bekas atau pakaian tidak terpakai. 5. Barang
            Elektronik Bekas: - Kerajinan: Membuat lampu tidur dari keyboard
            bekas, robot dari komponen elektronik, atau lukisan dari komponen
            papan sirkuit cetak. 6. Kemasan Plastik dan Karton: - Kerajinan:
            Membuat boneka, bunga, tas belanja, atau hiasan dinding dari kemasan
            plastik dan karton seperti kantong, botol, atau kotak. 7. Bahan
            Organik: - Kerajinan: Membuat kompos, hiasan dinding dari cangkang
            telur, kerajinan tangan dari batang kayu, atau patung miniatur dari
            material organik. 8. Barang-Barang Sekunder: - Kerajinan: Membuat
            perhiasan dari kancing, lukisan dari pena bekas, atau miniatur
            bangunan dari stik es krim atau korek api bekas. 9. Barang-Barang
            Rumah Tangga Tidak Terpakai: - Kerajinan: Membuat perabot mini dari
            kardus, hiasan dinding dari cermin pecah, atau karya seni dari
            bingkai foto bekas. Materi tentang jenis-jenis sampah yang dapat
            diubah menjadi kerajinan bisa meliputi ide-ide kreatif tentang
            bagaimana mengolah sampah menjadi barang yang berguna, dekoratif,
            atau bermanfaat. Penting juga untuk memperlihatkan proses pengolahan
            dan inspirasi desain untuk memotivasi orang-orang dalam menciptakan
            kerajinan dari sampah.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
