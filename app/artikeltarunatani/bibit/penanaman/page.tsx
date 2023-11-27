import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-4.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Penanaman</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Penanaman: 1. Persiapan Lahan: Analisis Tanah: - Sebelum penanaman,
            lakukan analisis tanah untuk menentukan kandungan nutrisi dan pH
            tanah. - Hasil analisis membantu dalam menentukan jenis pupuk yang
            dibutuhkan. Pemupukan yang Tepat: - Berdasarkan analisis tanah,
            pilih pupuk dengan kandungan nutrisi yang sesuai. - Pastikan
            pemupukan dilakukan secara merata dan sesuai dengan kebutuhan
            tanaman. Pengolahan Tanah: - Lakukan pengolahan tanah untuk
            meningkatkan struktur tanah dan memudahkan akar tanaman menembus. -
            Hindari kerja tanah saat tanah terlalu basah untuk menghindari
            kompaksi. Drainase yang Baik: - Pastikan sistem drainase berfungsi
            dengan baik untuk menghindari genangan air. - Genangan air dapat
            merusak akar tanaman dan mengakibatkan kehilangan oksigen. 2. Teknik
            Penanaman: Kedalaman Tanam: - Pilih kedalaman tanam yang sesuai
            dengan jenis tanaman dan ukuran biji atau bibit. - Tanaman yang
            ditanam terlalu dalam atau terlalu dangkal dapat mengalami masalah
            pertumbuhan. Jarak Tanam yang Ideal: - Tentukan jarak tanam yang
            sesuai untuk masing-masing jenis tanaman. - Jarak yang tepat
            memastikan tanaman mendapatkan sinar matahari dan sirkulasi udara
            yang cukup. Perlakuan Pasca-Tanam: - Setelah penanaman, berikan
            perlakuan pasca-tanam yang diperlukan, seperti penyiraman awal dan
            pemupukan tambahan. - Pemantauan tanaman setelah penanaman membantu
            mendeteksi masalah dengan cepat. Perlindungan Terhadap Faktor
            Lingkungan: - Lindungi tanaman dari faktor lingkungan yang
            merugikan, seperti angin kencang atau sinar matahari berlebihan. -
            Gunakan penutup tanah atau mulsa untuk menjaga kelembaban dan
            mencegah pertumbuhan gulma. 3. Pentingnya Teknik Penanaman yang
            Tepat: Maksimalkan Pertumbuhan Awal: - Teknik penanaman yang tepat
            membantu tanaman memulai pertumbuhannya dengan baik. - Memastikan
            bahwa akar tanaman dapat menjangkau nutrisi dan air dengan efisien.
            Pencegahan Persaingan: - Jarak tanam yang tepat mengurangi
            persaingan antar tanaman untuk mendapatkan nutrisi, cahaya, dan air.
            - Persaingan dapat menghambat pertumbuhan dan produktivitas tanaman.
            Adaptasi Terhadap Lingkungan: - Penanaman yang optimal memungkinkan
            tanaman beradaptasi dengan baik terhadap kondisi lingkungan. -
            Tanaman yang ditanam dengan benar memiliki peluang lebih baik untuk
            berkembang dalam jangka panjang. Pemantauan Rutin: - Setelah
            penanaman, lakukan pemantauan rutin untuk mendeteksi tanda-tanda
            masalah seperti serangan hama atau penyakit. - Tindakan korektif
            dapat diambil dengan cepat untuk meminimalkan kerugian. Dengan
            persiapan lahan yang optimal dan penerapan teknik penanaman yang
            tepat, kita dapat memberikan tanaman fondasi yang kuat untuk
            pertumbuhan dan perkembangan yang sukses. Inilah langkah awal yang
            krusial dalam mencapai hasil panen yang optimal.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
