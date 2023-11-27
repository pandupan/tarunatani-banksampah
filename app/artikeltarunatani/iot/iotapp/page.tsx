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
          <h2 className="text-xl text-center py-5">Pertanian Berbasis Aplikasi (mobile app)</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
          Pertanian berbasis aplikasi (mobile apps) telah menjadi bagian integral dalam memperbaiki efisiensi dan memfasilitasi petani serta pelaku usaha pertanian dalam mengelola operasi mereka. Berikut adalah beberapa contoh aplikasi pertanian yang berguna:

1. Aplikasi Pemantauan Pertanian:

FarmLogs: Memantau keadaan lahan pertanian dengan data cuaca, perencanaan tanam, manajemen inventaris, dan pelacakan hasil panen.
Cropio: Memberikan pemantauan lapangan yang mendalam, pemetaan, dan manajemen tanaman melalui data sensor dan penginderaan jauh.
2. Aplikasi Pemantauan Kesehatan Tanaman:

Plantix: Mendeteksi penyakit dan hama pada tanaman melalui gambar yang diunggah oleh petani, memberikan solusi dan rekomendasi untuk pengendalian.
AgriApp: Memberikan informasi tentang tanda-tanda penyakit pada tanaman, saran pengobatan, dan tip pertanian lainnya.
3. Aplikasi Manajemen Irigasi:

SmartIrrigation: Menggunakan data sensor dan cuaca untuk memberikan rekomendasi yang tepat waktu terkait irigasi tanaman.
Irrigate-IQ: Memantau tingkat kelembaban tanah dan mengatur sistem irigasi secara otomatis untuk mengoptimalkan penggunaan air.
4. Aplikasi Pemasaran Hasil Pertanian:

AgriMarket: Memberikan informasi harga pasar komoditas pertanian di berbagai lokasi, membantu petani untuk menjual hasil mereka dengan harga terbaik.
FarmersPal: Membantu petani dalam menjual hasil pertanian mereka secara langsung ke konsumen atau pasar lokal.
5. Aplikasi Pendidikan dan Pelatihan Pertanian:

AgriApp: Menyediakan akses ke berbagai informasi pertanian, seperti teknik penanaman, perawatan tanaman, dan manajemen peternakan.
Agrobase: Memberikan informasi ilmiah tentang pestisida, dosis pupuk, dan tindakan pengendalian lainnya.
6. Aplikasi Monitoring Peralatan dan Alat Pertanian:

AgriTask: Mengelola aktivitas lapangan dan pekerjaan pertanian dengan memantau aktivitas petani dan alat pertanian yang digunakan.
Agrivi: Mengelola inventaris peralatan pertanian, menyediakan peringatan perawatan, dan memantau kinerja peralatan.
7. Aplikasi untuk Pembiayaan Pertanian:

AgriDigital: Menyediakan platform untuk manajemen transaksi pertanian, pembiayaan pertanian, dan pembayaran kepada petani.
Kisan Rath: Memberikan akses ke layanan keuangan untuk petani, termasuk kredit, asuransi, dan manajemen keuangan.

Aplikasi pertanian ini menyediakan solusi yang berguna bagi petani dan pelaku usaha pertanian untuk meningkatkan produktivitas, efisiensi, serta meningkatkan akses mereka terhadap informasi yang relevan. Dengan teknologi ini, diharapkan dapat memajukan sektor pertanian ke arah yang lebih modern dan berkelanjutan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
