import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-8.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Pengertian dan Konsep Bank Sampah
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Bank Sampah adalah suatu lembaga atau unit kegiatan yang melakukan
            kegiatan pengumpulan, pemilahan, pengolahan, dan pemanfaatan sampah
            secara terorganisir. Tujuan utamanya adalah untuk mengurangi jumlah
            sampah yang berakhir di tempat pembuangan akhir (TPA) dengan cara
            mendaur ulang serta menjual hasil daur ulangnya. Pengertian Bank
            Sampah: Lembaga Pengelolaan Sampah: Bank Sampah adalah lembaga atau
            unit kegiatan yang bertanggung jawab atas kegiatan pengelolaan
            sampah secara terorganisir. Partisipasi Masyarakat: Bank Sampah
            melibatkan partisipasi aktif masyarakat dalam mendaur ulang sampah.
            Masyarakat disarankan untuk memisahkan sampah berdasarkan jenisnya
            sebelum diserahkan ke bank sampah. Pengumpulan Sampah: Bank Sampah
            melakukan pengumpulan sampah dari masyarakat sekitar. Sampah yang
            diambil dapat berupa sampah organik, non-organik, limbah elektronik,
            kertas, plastik, logam, dan lainnya. Pemilahan dan Pemrosesan
            Sampah: Setelah diumpulkan, sampah akan dipilah berdasarkan
            jenisnya. Hal ini penting untuk memisahkan sampah yang dapat didaur
            ulang dari yang tidak dapat didaur ulang. Daur Ulang dan Pengolahan:
            Sampah yang dapat didaur ulang kemudian diolah menjadi barang-barang
            yang memiliki nilai ekonomis. Misalnya, plastik dapat diolah menjadi
            biji plastik atau kertas dapat didaur ulang menjadi kertas baru.
            Pemasaran Hasil Daur Ulang: Barang-barang hasil daur ulang dijual
            untuk mendapatkan pendapatan bagi bank sampah. Pendapatan ini bisa
            digunakan untuk operasional bank sampah atau bagi hasil kepada
            masyarakat yang telah berkontribusi. Pendidikan Lingkungan: Bank
            Sampah juga memiliki peran dalam memberikan edukasi kepada
            masyarakat mengenai pentingnya pengelolaan sampah yang benar,
            manfaat daur ulang, serta dampak positifnya terhadap lingkungan.
            Konsep Bank Sampah: Pengumpulan Sampah: Bank Sampah mengumpulkan
            sampah dari masyarakat sekitar. Sampah yang dikumpulkan bisa berupa
            sampah organik maupun non-organik. Pemilahan Sampah: Setelah
            diumpulkan, sampah akan dipilah berdasarkan jenisnya. Pemilahan ini
            penting untuk memisahkan sampah yang bisa didaur ulang (plastik,
            kertas, logam, dll) dari yang tidak bisa (sampah organik, dll).
            Pengolahan dan Daur Ulang: Sampah yang sudah dipilah kemudian diolah
            menjadi barang yang memiliki nilai ekonomis melalui proses daur
            ulang. Misalnya, plastik didaur ulang menjadi biji plastik atau
            kertas didaur ulang menjadi kertas baru. Pemasaran Hasil Daur Ulang:
            Barang-barang hasil daur ulang dijual untuk mendapatkan pendapatan
            bagi bank sampah. Pendapatan ini kemudian bisa digunakan untuk
            operasional bank sampah atau dibagikan kembali kepada masyarakat
            yang telah berpartisipasi dengan cara menyetorkan sampahnya. Edukasi
            dan Sosialisasi: Bank Sampah juga berperan dalam memberikan edukasi
            kepada masyarakat tentang pentingnya pengelolaan sampah yang benar
            serta manfaat dari daur ulang. Sosialisasi dilakukan agar masyarakat
            lebih sadar akan peran mereka dalam menjaga lingkungan. Bank Sampah
            merupakan salah satu solusi dalam pengelolaan sampah yang
            berkelanjutan. Konsep ini tidak hanya membantu mengurangi jumlah
            sampah yang masuk ke TPA tetapi juga menciptakan nilai ekonomis dari
            sampah yang sebelumnya dianggap sebagai limbah. Dengan pendekatan
            yang tepat, bank sampah dapat menjadi model yang efektif dalam upaya
            pengelolaan sampah secara berkelanjutan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
