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
          <h2 className="text-xl text-center py-5">Klasifikasi Sampah</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Sampah dapat diklasifikasikan berdasarkan lokasi asalnya, yang
            menggambarkan sumber atau tempat di mana sampah tersebut dihasilkan.
            Berikut adalah beberapa kategori sampah berdasarkan lokasi asal: 1.
            Sampah Rumah Tangga: - Karakteristik: Sampah yang dihasilkan oleh
            aktivitas sehari-hari di rumah tangga seperti sisa makanan, kemasan,
            kertas, plastik, dan barang-barang konsumen lainnya. - Pengelolaan:
            Pemilahan yang tepat diperlukan untuk mendaur ulang bahan yang dapat
            didaur ulang dan pengelolaan yang aman untuk sampah berbahaya. 2.
            Sampah Komersial: - Karakteristik: Limbah yang dihasilkan dari
            kegiatan bisnis atau komersial seperti kantor, restoran, toko, dan
            fasilitas umum lainnya. - Pengelolaan: Biasanya mencakup pembuangan,
            daur ulang, atau pengelolaan limbah organik seperti sisa makanan. 3.
            Sampah Industri: - Karakteristik: Limbah yang dihasilkan oleh
            kegiatan industri atau manufaktur seperti limbah dari proses
            produksi, pengemasan, atau pemrosesan. - Pengelolaan: Memerlukan
            penanganan khusus dan sering kali dilakukan melalui proses
            pengolahan sebelum dibuang. 4. Sampah Konstruksi dan Demolisi: -
            Karakteristik: Material bangunan bekas seperti batu bata, kayu,
            beton, logam, dan limbah lainnya dari proyek konstruksi atau
            penghancuran bangunan. - Pengelolaan: Memerlukan pemilahan dan
            pemrosesan khusus untuk daur ulang atau penggunaan kembali material
            bangunan bekas. 5. Sampah Publik: - Karakteristik: Sampah yang
            ditemukan di tempat umum seperti taman kota, trotoar, atau fasilitas
            umum lainnya. - Pengelolaan: Meliputi program kebersihan kota,
            pengangkutan sampah, dan sistem pengelolaan sampah umum. 6. Sampah
            Medis: - Karakteristik: Limbah dari fasilitas kesehatan seperti
            rumah sakit, klinik, atau laboratorium yang mengandung zat-zat
            infeksius, bahan kimia medis, dan limbah medis lainnya. -
            Pengelolaan: Memerlukan penanganan khusus dan pengelolaan yang aman
            untuk menghindari penyebaran penyakit atau risiko kesehatan.
            Klasifikasi berdasarkan lokasi asal sampah membantu dalam
            merencanakan strategi pengelolaan yang lebih efektif dan
            memungkinkan untuk mengembangkan solusi yang sesuai dengan sumber
            sampah tersebut. Hal ini penting untuk memastikan pengelolaan sampah
            yang lebih efisien dan ramah lingkungan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
