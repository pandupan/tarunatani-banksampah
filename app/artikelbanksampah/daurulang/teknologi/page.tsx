import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-9.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Teknologi Pengolahan Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Teknologi pengolahan sampah terus berkembang untuk mengatasi masalah
            limbah dan mempromosikan praktik pengelolaan sampah yang lebih
            berkelanjutan. Berikut adalah beberapa teknologi yang digunakan
            dalam pengolahan sampah: 1. Pemilahan Otomatis: - Conveyor Belts &
            Magnetic Separators: Digunakan untuk memisahkan logam dari sampah. -
            Optical Sorters: Mesin yang menggunakan sensor optik untuk memilah
            sampah berdasarkan warna, bentuk, atau jenisnya. 2. Pengolahan
            Mekanis: - Incinerators (Pengoven): Memusnahkan sampah dengan
            membakarnya pada suhu tinggi, sering kali digunakan untuk mengurangi
            volume sampah. - Shredders (Penghancur): Menghancurkan sampah
            menjadi potongan kecil untuk mempermudah proses daur ulang. 3.
            Pengolahan Kimia dan Biologis: - Komposting: Mengurai sampah organik
            menjadi kompos yang dapat digunakan sebagai pupuk. - Anaerobic
            Digestion (Pencernaan Anaerobik):Mengolah sampah organik menjadi
            biogas dan pupuk dengan menggunakan bakteri dalam kondisi tanpa
            udara. 4. Daur Ulang Lanjutan: - Pyrolysis: Proses pemanasan sampah
            pada suhu tinggi tanpa udara untuk mengubahnya menjadi gas, minyak,
            dan arang. - Gasification: Mengubah sampah padat menjadi gas
            sintetis yang dapat digunakan sebagai bahan bakar. 5. Internet of
            Things (IoT) dan Automatisasi: - Sensor dan IoT: Penggunaan sensor
            untuk pemantauan yang lebih efisien dalam pengumpulan, pemilahan,
            dan pengolahan sampah. - Robotika: Penggunaan robot dalam proses
            pemilahan sampah yang lebih akurat dan cepat. 6. Reverse Vending
            Machines (RVMs): - Mesin otomatis yang memungkinkan orang menukarkan
            botol dan kaleng bekas dengan imbalan seperti uang atau kupon. 7.
            Advanced Landfill Technologies: - Sanitary Landfills (TPA Terpadu):
            Meningkatkan metode pembuangan sampah tradisional dengan penggunaan
            teknologi yang lebih canggih untuk mengurangi dampak lingkungan. 8.
            Waste-to-Energy (Pengolahan Sampah menjadi Energi): - Pembangkit
            Listrik Tenaga Sampah: Mengkonversi sampah menjadi energi listrik
            atau panas. - Biogas Plants: Menggunakan proses anaerobik untuk
            menghasilkan biogas dari sampah organik. 9. Efisiensi Energi dan
            Penghematan: - Energy Recovery Systems: Memanfaatkan panas yang
            dihasilkan dari proses pembakaran sampah untuk menghasilkan energi
            listrik atau panas. 10. Pengembangan Teknologi Ramah Lingkungan: -
            Inovasi Bahan Biodegradable: Penggunaan bahan yang dapat terurai
            secara alami dan ramah lingkungan. - Recycling Innovation:
            Pengembangan teknologi baru untuk mendaur ulang sampah yang sulit
            didaur ulang sebelumnya. Teknologi-teknologi ini memiliki peran
            penting dalam mengelola sampah secara efisien, mengurangi dampak
            lingkungan, dan menciptakan sumber daya yang dapat digunakan
            kembali. Kombinasi dari berbagai teknologi ini dapat membantu
            mengatasi tantangan pengelolaan sampah di berbagai skala, mulai dari
            rumah tangga hingga industri.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
