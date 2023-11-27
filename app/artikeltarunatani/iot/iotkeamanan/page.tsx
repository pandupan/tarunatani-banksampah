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
          <h2 className="text-xl text-center py-5">Penerapan Sistem Keamanan dan Jaringan Komputer dalam Peratian</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
          Penerapan sistem keamanan dan jaringan komputer dalam pertanian menjadi semakin penting seiring dengan perkembangan teknologi. Beberapa aspek penting yang terkait dengan penggunaan sistem keamanan dan jaringan komputer dalam pertanian meliputi:

1. Keamanan Data Pertanian:

Perlindungan Data: Melindungi data sensitif seperti informasi pengelolaan lahan, informasi pelanggan, dan data keuangan pertanian dari akses yang tidak sah atau serangan siber.
Enkripsi Data: Menggunakan teknik enkripsi untuk melindungi data yang disimpan atau ditransmisikan sehingga hanya dapat diakses oleh pihak yang berwenang.

2. Jaringan Komputer Pertanian:

Pengelolaan Jaringan: Memastikan jaringan komputer yang digunakan dalam operasi pertanian memiliki lapisan keamanan yang tepat untuk melindungi data dan infrastruktur.
Jaringan Sensor: Mengelola jaringan sensor yang digunakan dalam pemantauan pertanian untuk memastikan data yang terkumpul aman dari potensi gangguan atau manipulasi.

3. Keamanan Perangkat dan Sistem:

Pemantauan Perangkat: Memastikan bahwa perangkat keras dan perangkat lunak yang digunakan dalam pertanian telah diperbarui, dilindungi dari malware, dan memiliki tingkat keamanan yang memadai.
Pembaruan Keamanan: Rutin melakukan pembaruan keamanan pada sistem komputer dan perangkat IoT yang digunakan dalam operasi pertanian.

4. Penggunaan Sistem Sensor dan IoT:

Keamanan Sensor dan IoT: Melindungi sistem sensor dan perangkat Internet of Things (IoT) yang digunakan dalam pemantauan tanaman dan lingkungan pertanian dari akses yang tidak sah.

5. Aplikasi dan Perangkat Lunak Pertanian:

Keamanan Aplikasi: Mengamankan aplikasi pertanian yang digunakan untuk manajemen tanaman, pemantauan kebun, manajemen persediaan, dan transaksi bisnis pertanian.

6. Pemantauan Akses dan Identifikasi Pengguna:

Kontrol Akses: Mengatur dan memantau akses ke sistem dan data pertanian, memberikan hak akses yang sesuai dengan tingkat keamanan yang telah ditetapkan.
Manajemen Identitas: Memiliki sistem manajemen identitas yang baik untuk memastikan hanya orang yang berwenang yang dapat mengakses data dan sistem yang sensitif.

Penggunaan sistem keamanan dan jaringan komputer dalam pertanian sangat penting untuk melindungi data, infrastruktur teknologi, dan operasi pertanian dari berbagai risiko keamanan seperti akses ilegal, peretasan, atau kerusakan sistem. Ini juga membantu dalam menjaga kelangsungan operasi pertanian tanpa gangguan yang tidak diinginkan.

Penerapan biokimia dan bioteknologi dalam pertanian membawa dampak yang signifikan dalam meningkatkan produksi, mengurangi kerusakan lingkungan, serta menghasilkan tanaman yang lebih tahan terhadap tantangan eksternal. Terus berlanjutnya penelitian dan pengembangan dalam bidang ini diharapkan akan membawa inovasi yang lebih baik untuk pertanian di masa depan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
