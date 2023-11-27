import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/perantani-8.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Kapasitas Tukar Kation (CTK)
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Kapasitas Tukar Kation (CTK) adalah kemampuan suatu tanah untuk
            menyimpan dan melepaskan ion-ion kation seperti kalsium (Ca²⁺),
            magnesium (Mg²⁺), kalium (K⁺), dan natrium (Na⁺) ke permukaan
            partikel-partikel tanah. CTK sangat penting dalam menentukan
            kemampuan suatu tanah untuk menyediakan nutrisi penting bagi
            tanaman. Proses CTK:
          </p>
          <p className={patuaFont.className}>
            Penyimpanan Kation: Tanah memiliki partikel berpori kecil yang
            disebut koloid (termasuk lempung dan humus) yang memiliki muatan
            negatif. Ia menarik dan menyimpan ion-ion kation dengan muatan
            positif di sekitarnya. Pelepasan Kation: Ketika tanaman membutuhkan
            nutrisi, ion kation yang tersimpan dapat dilepaskan dari permukaan
            partikel-partikel tanah untuk diserap oleh akar tanaman.
          </p>
          <p className={patuaFont.className}>
            Pentingnya CTK dalam Pertanian: Ketersediaan Nutrisi: Kapasitas
            Tukar Kation sangat penting karena mempengaruhi ketersediaan nutrisi
            bagi tanaman. Tanah dengan CTK yang tinggi cenderung menyediakan
            lebih banyak nutrisi bagi tanaman karena memiliki kapasitas yang
            lebih besar untuk menyimpan ion-ion kation.
          </p>
          <p className={patuaFont.className}>
            Pemupukan yang Efisien: Dengan mengetahui CTK tanah, petani dapat
            merencanakan penggunaan pupuk secara lebih efisien. Tanah dengan CTK
            rendah mungkin membutuhkan aplikasi pupuk yang lebih sering untuk
            menyediakan nutrisi yang diperlukan bagi tanaman.
          </p>
          <p className={patuaFont.className}>
            Manajemen Tanah yang Tepat: Pengetahuan tentang CTK memungkinkan
            petani untuk memilih jenis tanaman yang sesuai dengan ketersediaan
            nutrisi dalam tanah dan menerapkan praktik manajemen tanah yang
            tepat, seperti penggunaan pupuk atau pupuk hijau untuk meningkatkan
            kesuburan tanah.
          </p>
          <p className={patuaFont.className}>
            Metode umum yang digunakan untuk mengukur CTK adalah dengan
            melakukan analisis kimia pada sampel tanah laboratorium. Analisis
            ini melibatkan penggunaan larutan yang mengandung kation tertentu
            dan pengukuran kation yang terikat pada tanah setelah reaksi
            tersebut. Faktor yang Mempengaruhi CTK: Jenis Tanah: Berbagai jenis
            tanah memiliki kapasitas tukar kation yang berbeda-beda. Misalnya,
            tanah liat umumnya memiliki CTK yang lebih tinggi daripada tanah
            pasir. Kandungan Organik: Kandungan bahan organik dalam tanah juga
            mempengaruhi CTK. Tanah dengan kandungan bahan organik yang tinggi
            cenderung memiliki CTK yang lebih tinggi. pH Tanah: Tingkat keasaman
            atau kebasaan tanah juga dapat memengaruhi CTK. Perubahan pH dapat
            mempengaruhi daya tukar kation tanah.
          </p>
          <p className={patuaFont.className}>
            Kapasitas Tukar Kation adalah salah satu aspek penting dalam
            pemahaman sifat-sifat tanah yang membantu petani dalam merencanakan
            manajemen tanah yang tepat guna meningkatkan kesuburan tanah dan
            produktivitas pertanian.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
