import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-5.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Penanaman</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Manajemen Pasca-Tanam: 1. Pemeliharaan Bibit: Irigasi yang Tepat: -
            Jadwalkan irigasi dengan cermat untuk memastikan tanaman mendapatkan
            air yang cukup. - Perhatikan kondisi cuaca dan kebutuhan tanaman
            dalam menentukan frekuensi dan volume irigasi. Pengendalian Gulma: -
            Terapkan metode pengendalian gulma yang efektif untuk mencegah
            persaingan tanaman dengan gulma. - Penyiangan manual atau penggunaan
            mulsa dapat membantu mengurangi pertumbuhan gulma. Pemupukan
            Lanjutan: - Lakukan pemupukan tambahan sesuai dengan fase
            pertumbuhan tanaman. - Pemantauan nutrisi tanaman membantu
            menentukan jenis dan jumlah pupuk yang diperlukan. Perlindungan dari
            Hama dan Penyakit: - Terapkan strategi perlindungan terhadap hama
            dan penyakit dengan menggunakan metode biologis atau bahan kimia
            yang aman. - Pemantauan rutin membantu mendeteksi serangan hama atau
            penyakit secara dini. 2. Pemantauan Pertumbuhan: Pengamatan Visual:
            - Amati secara visual perkembangan tanaman, termasuk warna daun,
            struktur tanaman, dan tanda-tanda ketidaknormalan. - Perubahan pada
            penampilan tanaman dapat menjadi indikator masalah kesehatan.
            Pengukuran Pertumbuhan: - Ukur tinggi tanaman, jumlah cabang, dan
            luas daun untuk memonitor perkembangan tanaman. - Alat pengukuran
            atau pencatatan manual dapat digunakan untuk melacak pertumbuhan.
            Pemantauan Fase Pertumbuhan: - Perhatikan fase pertumbuhan tanaman,
            seperti pembentukan bunga atau buah. - Pengetahuan ini membantu
            dalam menyesuaikan pemeliharaan dan mempersiapkan tanaman untuk
            perubahan dalam siklus hidupnya. Analisis Kesehatan Tanaman: -
            Analisis kesehatan tanaman melibatkan identifikasi gejala penyakit
            atau gangguan pertumbuhan. - Penilaian ini membantu dalam menentukan
            apakah tindakan korektif atau perlindungan tambahan diperlukan. 3.
            Tindakan Korektif: - **Respons Cepat terhadap Masalah:** - Tanggapi
            dengan cepat terhadap masalah yang terdeteksi selama pemantauan. -
            Tindakan korektif termasuk pemberian pupuk tambahan, perbaikan
            drainase, atau pengendalian hama yang lebih intensif. Penyesuaian
            Strategi Perawatan: - Revaluasi strategi perawatan berdasarkan
            pemantauan pertumbuhan dan kesehatan tanaman. - Sesuaikan jadwal
            irigasi, pemupukan, dan perlindungan hama jika diperlukan.
            Pemeliharaan Keseimbangan Ekosistem: - Upayakan untuk menjaga
            keseimbangan ekosistem di sekitar tanaman dengan menggunakan metode
            pertanian berkelanjutan. - Penggunaan pestisida atau pupuk kimia
            harus diimbangi dengan praktik-praktik yang mendukung keberlanjutan
            tanaman. 4. Pentingnya Pemantauan dan Tindakan Korektif: -
            **Maksimalkan Hasil Panen:** - Pemantauan dan tindakan korektif
            membantu memaksimalkan hasil panen dengan mengatasi masalah
            pertumbuhan atau kesehatan tanaman. Pertahankan Keseimbangan
            Lingkungan: - Upayakan untuk mengelola tanaman dengan cara yang
            tidak merusak lingkungan sekitar. - Penggunaan bahan kimia harus
            bijaksana untuk mencegah dampak negatif. Perbaikan Metode Pertanian:
            - Hasil pemantauan dapat memberikan wawasan untuk memperbaiki metode
            pertanian dan strategi perawatan di masa depan. Keberlanjutan
            Produksi: - Dengan memantau pertumbuhan dan kesehatan tanaman,
            pertanian dapat dijalankan dengan lebih berkelanjutan dan efisien.
            Manajemen pasca-tanam yang baik melibatkan pemeliharaan dan
            pemantauan yang terus-menerus untuk memastikan tanaman berkembang
            dengan baik dan mencapai potensi produksinya. Ini merupakan langkah
            penting dalam mencapai keberhasilan pertanian jangka panjang.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
