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
          Penggunaan robotika dan automasi dalam pertanian telah menjadi solusi inovatif yang membantu meningkatkan efisiensi operasional, produktivitas, dan meminimalkan ketergantungan pada tenaga kerja manusia. Berikut beberapa penerapan robotika dan automasi dalam pertanian

1. Robotic Harvesting (Pemetikan Otomatis):

Pemetikan Buah dan Sayuran: Robot dapat digunakan untuk memetik buah-buahan atau sayuran secara otomatis, mempercepat proses panen dan mengurangi ketergantungan pada pekerja manual.

2. Automated Seeding (Penyemaian Otomatis):

Mesin Penabur Otomatis: Mesin ini mengatur dan menabur benih tanaman secara otomatis dengan presisi yang tinggi, meningkatkan kecepatan dan akurasi tanam.

3. Autonomous Tractors (Traktor Otonom):

Traktor yang Dikendalikan Secara Otomatis: Traktor yang dapat beroperasi tanpa pengemudi manusia, melakukan tugas seperti membajak, menyiram, atau menyemprotkan pestisida sesuai dengan rencana yang telah ditentukan.

4. Monitoring dan Perawatan Tanaman:

Robot Pemantau Tanaman: Robot yang dilengkapi dengan sensor-sensor dapat diprogram untuk memantau kesehatan tanaman, mendeteksi hama atau penyakit, serta memberikan perawatan secara tepat waktu.

5. Automated Sorting and Packaging (Pengklasifikasian dan Pengemasan Otomatis):

Mesin Pengklasifikasi Buah: Mesin ini mengklasifikasikan buah berdasarkan ukuran, bentuk, atau kualitasnya, memungkinkan pengemasan yang lebih efisien.

6. Drones untuk Pemetaan dan Monitoring:

Drone Pemantauan Pertanian: Drones dilengkapi dengan kamera dan sensor untuk pemetaan tanah, pemantauan pertumbuhan tanaman, serta identifikasi masalah pada lahan pertanian

7. Greenhouse Automation (Automasi Rumah Kaca):

Pengendalian Iklim Otomatis: Sistem otomatis yang mengontrol suhu, kelembaban, ventilasi, dan pencahayaan dalam rumah kaca untuk memastikan kondisi yang ideal bagi pertumbuhan tanaman.

8. Weeding Robots (Robot Penyiang Gulma):

Robot Penyiang Gulma: Robot yang dirancang untuk mengenali dan menghapus gulma di antara tanaman, mengurangi ketergantungan pada herbisida dan tenaga kerja manual.

Penerapan teknologi robotika dan automasi ini membantu meningkatkan efisiensi, mengurangi biaya produksi, serta meningkatkan produktivitas dalam pertanian. Dengan kemajuan teknologi, harapannya adalah penggunaan robotika dan automasi akan semakin meluas dalam berbagai aspek pertanian untuk mendukung pertanian modern yang lebih efisien dan berkelanjutan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
