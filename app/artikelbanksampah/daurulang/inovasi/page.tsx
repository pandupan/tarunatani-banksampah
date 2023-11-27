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
            Inovasi dalam Pengolahan Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Inovasi dalam pengelolaan sampah terus berkembang sebagai upaya
            untuk mengurangi dampak lingkungan, meningkatkan efisiensi, dan
            mempromosikan praktik yang lebih berkelanjutan. Berikut adalah
            beberapa inovasi yang terjadi dalam pengelolaan sampah: 1.
            Penggunaan Teknologi Sensor dan Pemantauan: - Sensor Pintar:
            Penggunaan sensor untuk memonitor dan mengelola sampah, memungkinkan
            pemantauan real-time terhadap volume dan jenis sampah yang
            terkumpul. - Internet of Things (IoT): Integrasi sensor ke dalam
            sistem IoT untuk pengelolaan yang lebih efisien dan peningkatan
            dalam pengumpulan dan pemilahan sampah. 2. Daur Ulang yang Lebih
            Efisien: - Pengembangan Bahan Daur Ulang: Inovasi dalam teknologi
            daur ulang yang memungkinkan pengolahan material yang sulit didaur
            ulang sebelumnya. - Penggunaan Kembali Sampah Plastik: Inovasi dalam
            penggunaan ulang plastik untuk menghasilkan bahan baru, seperti
            serat untuk tekstil atau bahan bangunan. 3. Penggunaan Energi
            Terbarukan: - Pengolahan Sampah menjadi Energi: Pengembangan
            teknologi yang memungkinkan sampah untuk dikonversi menjadi energi
            listrik atau panas. - Biogas dari Sampah Organik: Proses pemecahan
            sampah organik menjadi biogas yang dapat digunakan sebagai bahan
            bakar alternatif. 4. Aplikasi dan Perangkat Lunak: - Aplikasi
            Pemantauan Sampah: Pengembangan aplikasi untuk mempermudah
            masyarakat dalam memahami praktik daur ulang dan manajemen sampah di
            lingkungan mereka. - Sistem Manajemen Limbah: Penggunaan perangkat
            lunak khusus untuk memantau, mengatur, dan melacak aliran sampah
            dari sumber hingga pengolahan akhir. 5. Inovasi Pembuangan Akhir: -
            Teknologi Pengelolaan TPA: Pengembangan metode pengolahan sampah di
            tempat pembuangan akhir (TPA) yang lebih ramah lingkungan untuk
            mengurangi dampak negatifnya terhadap lingkungan. 6. Desain Produk
            yang Ramah Lingkungan: - Desain Produk Berkelanjutan: Perusahaan
            berinovasi untuk merancang produk dengan mempertimbangkan siklus
            hidup produk, bahan baku yang dapat didaur ulang, dan pembuangan
            yang lebih ramah lingkungan. 7. Pendidikan dan Kesadaran Masyarakat:
            - Program Edukasi Lingkungan: Inovasi dalam menyampaikan informasi
            dan pendidikan kepada masyarakat mengenai pentingnya praktik
            pengelolaan sampah yang bertanggung jawab. 8. Sistem Penghargaan: -
            Inisiatif Penghargaan dan Insentif: Program insentif untuk mendorong
            partisipasi masyarakat dalam praktik daur ulang dan pengelolaan
            sampah yang lebih baik. Inovasi-inovasi dalam pengelolaan sampah
            sangat penting untuk mengatasi tantangan lingkungan dan menemukan
            solusi yang lebih efektif serta berkelanjutan dalam memanfaatkan
            sumber daya alam dan mengurangi limbah. Kombinasi teknologi,
            edukasi, dan kesadaran masyarakat menjadi kunci dalam meningkatkan
            praktek pengelolaan sampah secara holistik.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
