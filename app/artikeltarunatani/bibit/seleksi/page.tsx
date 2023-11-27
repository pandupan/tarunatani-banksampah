import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-1.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Seleksi Bibit</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Seleksi bibit merupakan langkah krusial dalam budidaya tanaman, yang
            dapat memengaruhi hasil panen dan keberhasilan pertanian secara
            keseluruhan. Berikut adalah beberapa poin terkait seleksi bibit,
            dengan fokus pada pemilihan varietas yang tepat dan kualitas bibit:
            Pemilihan Varietas yang Tepat: Adaptasi terhadap Iklim: Pilih
            varietas yang cocok dengan kondisi iklim tempat budidaya. Beberapa
            tanaman lebih tahan terhadap suhu ekstrem atau perubahan iklim
            daripada yang lain. Kecocokan dengan Jenis Tanah: Pertimbangkan
            jenis tanah di lokasi budidaya. Beberapa varietas dapat lebih baik
            berkembang di tanah liat, sedangkan yang lain cocok untuk tanah
            berpasir. Tujuan Panen: Tentukan tujuan panen Anda (misalnya, apakah
            tanaman tersebut untuk konsumsi langsung, industri, atau
            penyimpanan). Pilih varietas yang menghasilkan hasil sesuai dengan
            kebutuhan Anda. Periode Pertumbuhan: Perhatikan periode pertumbuhan
            tanaman. Beberapa varietas memiliki siklus hidup yang lebih singkat,
            yang dapat sesuai dengan lamanya musim tanam di wilayah Anda.
            Kualitas Bibit: Kesehatan Tanaman: Pilih bibit yang tampak sehat dan
            bebas dari gejala penyakit atau infeksi. Bibit yang sehat memiliki
            kemungkinan lebih tinggi untuk tumbuh kuat dan produktif. Kebebasan
            dari Hama: Pastikan bibit tidak terinfeksi oleh hama yang dapat
            merusak pertumbuhan tanaman. Inspeksi teliti dapat membantu
            mengidentifikasi adanya hama. Cacat Fisik: Periksa bibit secara
            menyeluruh untuk memastikan tidak ada cacat fisik yang dapat
            memengaruhi pertumbuhan tanaman. Misalnya, perhatikan apakah ada
            daun yang rusak atau akar yang terpotong. Asal Usul dan Metode
            Produksi: Pilih bibit dari sumber yang terpercaya. Bibit yang
            dihasilkan dengan metode produksi yang baik memiliki kemungkinan
            lebih besar untuk berhasil tumbuh. Kemurnian Genetik: Pastikan bibit
            berasal dari varietas yang diinginkan dan tidak tercampur dengan
            varietas lain yang dapat mengurangi kualitas hasil panen. Penting
            untuk mencatat bahwa pemilihan varietas dan kualitas bibit dapat
            berbeda tergantung pada jenis tanaman yang dibudidayakan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
