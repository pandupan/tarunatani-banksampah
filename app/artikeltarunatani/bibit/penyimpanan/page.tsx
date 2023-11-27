import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-3.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Penyimpanan Bibit</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Penyimpanan dan Transportasi Bibit: 1. Kondisi Penyimpanan yang
            Baik: Suhu dan Kelembaban: Bibit perlu disimpan pada suhu yang
            sesuai dengan kebutuhan spesifik tanaman tersebut. Kelembaban ruang
            penyimpanan juga harus dijaga agar bibit tidak mengalami dehidrasi
            atau kelembaban berlebihan. Ventilasi yang Baik: Pastikan ruang
            penyimpanan memiliki ventilasi yang cukup untuk mencegah terjadinya
            penumpukan gas yang merugikan. Ventilasi membantu menjaga kualitas
            udara di sekitar bibit. Proteksi dari Cahaya Langsung: Hindari
            penyimpanan bibit di tempat yang terkena sinar matahari langsung.
            Cahaya berlebihan dapat merusak bibit dan mengakibatkan stres pada
            tanaman. Pemantauan Kesehatan Bibit: Rutin memeriksa kondisi bibit
            untuk mendeteksi tanda-tanda penyakit atau gangguan pertumbuhan.
            Isolasi bibit yang terinfeksi untuk mencegah penyebaran penyakit.
            Pemeliharaan Nutrisi: Bibit mungkin membutuhkan suplemen nutrisi
            selama masa penyimpanan. Pemantauan dan penambahan nutrisi jika
            diperlukan untuk menjaga kesehatan bibit. 2. Transportasi yang Aman:
            Packing yang Aman: Gunakan kemasan yang aman dan kokoh untuk
            melindungi bibit dari kerusakan selama transportasi. Pastikan bahwa
            bibit terkunci dengan baik di dalam kemasan untuk mencegah gesekan
            dan benturan. Kendaraan yang Sesuai: Pilih kendaraan yang sesuai
            dengan jenis bibit yang diangkut. Pastikan kendaraan dilengkapi
            dengan fasilitas penyangga untuk mengurangi getaran selama
            perjalanan. Pengaturan Suhu: Jika memungkinkan, kendalikan suhu
            dalam kendaraan untuk mencocokkan kebutuhan bibit. Hindari paparan
            bibit pada suhu ekstrem yang dapat merusak kualitasnya. Perencanaan
            Rute yang Teliti: Rencanakan rute transportasi dengan cermat untuk
            menghindari jalan yang berat dan kondisi jalan yang buruk. Hindari
            transportasi selama kondisi cuaca ekstrem jika memungkinkan.
            Pemantauan Selama Transportasi: Lakukan pemantauan terus-menerus
            selama transportasi untuk mendeteksi dan menanggapi masalah segera.
            Pastikan bahwa bibit tiba dengan kondisi baik dan tanpa kerusakan
            yang signifikan. Dengan menjaga kondisi penyimpanan dan melaksanakan
            transportasi yang aman, kita dapat memastikan bahwa bibit tetap
            dalam kondisi optimal sebelum ditanam. Ini merupakan langkah penting
            dalam menjaga kualitas tanaman dan memastikan keberhasilan pada
            tahap berikutnya dalam siklus pertanian.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
