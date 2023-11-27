import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-6.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Internet of Things (IoT) dalam Pertanian</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
          Internet of Things (IoT) memiliki peran penting dalam memajukan sektor pertanian dengan memungkinkan pengumpulan data secara real-time, pemantauan, dan pengambilan keputusan yang lebih baik. Berikut adalah beberapa penerapan IoT dalam pertanian:

1. Sensor Tanah dan Lingkungan:

Sensor Kelembaban Tanah: Mengukur tingkat kelembaban tanah untuk menentukan kapan tanaman perlu disiram.
Sensor Iklim: Pemantauan suhu udara, kelembaban, dan intensitas cahaya matahari yang memengaruhi pertumbuhan tanaman.
2. Sistem Irigasi Cerdas:

Pengontrol Irigasi Otomatis: Memanfaatkan data dari sensor untuk mengatur irigasi secara otomatis berdasarkan kebutuhan tanaman.
3. Pengelolaan Stok dan Produksi:

Pemantauan Ketersediaan Persediaan: Sensor yang memantau persediaan pupuk, pestisida, atau bahan lainnya untuk memastikan ketersediaan yang tepat pada waktu yang tepat.
Pemantauan Produksi: Penggunaan sensor untuk memantau tingkat produksi, kesehatan tanaman, dan perkiraan hasil panen.
4. Pemantauan Hama dan Penyakit:

Deteksi Dini Hama dan Penyakit: Sensor yang memantau tanda-tanda awal hama atau penyakit pada tanaman untuk tindakan pencegahan dini.
5. Pertanian Berbasis Drone:

Pemetaan Lapangan: Drone yang dilengkapi dengan sensor yang dapat memetakan lapangan pertanian, memantau perkembangan tanaman, serta mendeteksi masalah yang mungkin terjadi.
6. Pemantauan Ternak:

Kesehatan Ternak: Penggunaan sensor untuk memantau kesehatan ternak, aktivitas, dan lokasi mereka di peternakan.
7. Sistem Manajemen Pintar:

Platform Pengelolaan Pertanian: Penggunaan aplikasi atau platform yang memanfaatkan data dari sensor untuk memberikan panduan dan rekomendasi kepada petani.
8. Analitika Data dan Prediksi:

Analisis Data Tanaman: Menggunakan data yang terkumpul untuk menganalisis dan memprediksi perkembangan pertumbuhan tanaman, kebutuhan air, dan pupuk.

Penerapan IoT dalam pertanian dapat meningkatkan efisiensi penggunaan sumber daya seperti air dan pupuk, mengurangi risiko kehilangan hasil pertanian, serta memberikan informasi yang lebih akurat bagi petani untuk mengambil keputusan yang tepat waktu. Hal ini membantu meningkatkan produktivitas dan keberlanjutan dalam sektor pertanian.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
