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
            Konsep Dasar Daur Ulang
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Konsep dasar daur ulang melibatkan proses mengubah sampah menjadi
            bahan yang dapat digunakan kembali. Di bawah ini terdapat beberapa
            poin penting yang membentuk konsep dasar dari daur ulang: 1. Prinsip
            3R (Reduce, Reuse, Recycle): - Reduce (Mengurangi): Prinsip pertama
            dalam daur ulang adalah mengurangi jumlah sampah yang dihasilkan
            dengan cara mengurangi konsumsi, membeli produk yang lebih tahan
            lama, dan menghindari penggunaan bahan yang tidak dapat didaur
            ulang. - Reuse (Menggunakan Kembali): Menggunakan kembali barang
            atau bahan yang masih dapat dipakai untuk tujuan yang sama atau
            berbeda, seperti mengisi ulang botol air minum atau memperbaiki
            barang yang rusak. - Recycle (Mendaur Ulang): Proses mengumpulkan,
            memilah, mengolah, dan mengubah sampah menjadi bahan baku baru yang
            dapat digunakan untuk membuat produk baru. Daur ulang memungkinkan
            penggunaan kembali sumber daya yang sudah ada. 2. Pemilahan dan
            Pengumpulan Sampah: - Pemilahan: Tahap awal dalam daur ulang, di
            mana sampah dipisahkan berdasarkan jenisnya, seperti plastik,
            kertas, logam, kaca, atau sampah organik. - Pengumpulan: Setelah
            pemilahan, sampah yang telah dipisahkan dikumpulkan untuk diolah
            lebih lanjut. Pengumpulan yang teratur dan sistematis diperlukan
            untuk memastikan efektivitas dalam proses daur ulang. 3.
            Transformasi dari Sampah menjadi Bahan Baku: - Pengolahan dan
            Transformasi: Setelah dipilah, sampah diolah melalui berbagai proses
            mekanis, kimia, atau biologis. Tujuan dari proses ini adalah
            mengubah sampah menjadi bahan baku yang dapat digunakan kembali. 4.
            Pemanfaatan Kembali Bahan yang Didaur Ulang: - Penggunaan Kembali
            Bahan Hasil Daur Ulang: Bahan yang telah didaur ulang kemudian
            digunakan kembali untuk membuat produk baru atau sebagai bahan baku
            bagi industri tertentu. 5. Peran Masyarakat dan Kesadaran
            Lingkungan: - Peran Masyarakat: Kesadaran masyarakat tentang
            pentingnya memilah sampah, mendukung praktik daur ulang, dan
            menggunakan produk yang telah didaur ulang sangat penting dalam
            mendorong praktek daur ulang yang efektif. - Edukasi Lingkungan:
            Pentingnya pendidikan dan sosialisasi untuk meningkatkan kesadaran
            masyarakat tentang prinsip 3R dan praktik daur ulang yang
            bertanggung jawab. Konsep dasar daur ulang menggarisbawahi
            pentingnya memanfaatkan kembali sumber daya yang ada, mengurangi
            sampah yang dihasilkan, serta menciptakan siklus yang lebih
            berkelanjutan bagi bahan-bahan yang sebelumnya dianggap sebagai
            sampah. Hal ini menjadi salah satu langkah kunci dalam upaya menjaga
            lingkungan dan memperpanjang umur pakai sumber daya alam.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
