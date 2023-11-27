import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-2.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Produksi Bibit</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Produksi bibit merupakan tahap awal dalam proses budidaya tanaman.
            Proses ini melibatkan beberapa langkah penting untuk memastikan
            kualitas bibit yang dihasilkan. Berikut penjelasan mengenai beberapa
            aspek produksi bibit, termasuk pembibitan yang baik, teknik
            penyemaian, dan perawatan bibit: 1. Pembibitan yang Baik: Tujuan
            Pembibitan: - Memastikan ketersediaan bibit yang sehat dan unggul. -
            Menghasilkan tanaman yang memiliki pertumbuhan optimal dan
            produktivitas tinggi. Langkah-langkah Penting: - Pemilihan benih
            berkualitas tinggi. - Penggunaan media tanam yang sesuai. -
            Pemberian nutrisi awal yang dibutuhkan oleh bibit. - Pengaturan
            kondisi lingkungan yang mendukung pertumbuhan optimal. Pentingnya
            Pemeliharaan Awal: - Memastikan kelembaban tanah yang optimal. -
            Melakukan perlindungan terhadap bibit dari faktor lingkungan yang
            merugikan (misalnya, angin kencang atau sinar matahari berlebihan).
            - Menyediakan sistem drainase yang baik untuk mencegah rasa air. 2.
            Teknik Penyemaian: Pemilihan Benih: - Pilih benih yang berkualitas
            tinggi dan bebas dari penyakit. - Pastikan benih sesuai dengan
            spesies tanaman yang diinginkan. Media Tanam: - Gunakan media tanam
            yang steril dan memiliki struktur yang baik. - Pastikan media tanam
            memiliki kelembaban yang cukup. Ketebalan Tanam: - Tanam benih pada
            kedalaman yang sesuai. - Ketebalan tanam yang tepat memastikan benih
            dapat menerima oksigen dengan baik. Suhu dan Kelembaban: - Pahami
            suhu dan kelembaban optimal untuk perkecambahan benih. - Suhu tanah
            yang tepat akan meningkatkan keberhasilan perkecambahan. 3.
            Perawatan Bibit: Pemberian Nutrisi: - Berikan pupuk atau nutrisi
            tambahan yang diperlukan bibit. - Pantau kebutuhan nutrisi selama
            fase pertumbuhan awal. Irigasi yang Tepat: - Pastikan penyiraman
            cukup, tetapi hindari genangan air. - Sistem irigasi yang efisien
            membantu mencegah kelebihan atau kekurangan air. Perlindungan dari
            Hama dan Penyakit: - Terapkan langkah-langkah pengendalian hama yang
            tepat. - Gunakan pestisida organik atau kimia secara bijaksana.
            Kondisi Lingkungan: - Pastikan kondisi lingkungan seperti cahaya,
            suhu, dan kelembaban sesuai dengan kebutuhan tanaman. - Lindungi
            bibit dari cuaca ekstrem. Melalui implementasi langkah-langkah di
            atas, produksi bibit yang baik dapat meningkatkan kesuksesan dalam
            budidaya tanaman selanjutnya. Proses ini memastikan bahwa tanaman
            yang ditanam memiliki dasar yang kuat untuk pertumbuhan dan
            perkembangan yang optimal.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
