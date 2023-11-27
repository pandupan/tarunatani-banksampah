import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-10.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Sampah Organik</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Sampah organik adalah jenis sampah yang berasal dari material alami
            yang mudah terurai oleh mikroorganisme. Sampah organik biasanya
            terdiri dari sisa-sisa makanan, tumbuhan, dan bahan-bahan organik
            lainnya. Berikut adalah beberapa poin penting tentang sampah
            organik: 1. Komposisi Sampah Organik: - Sisa Makanan: Sisa-sisa
            makanan seperti sisa sayuran, buah-buahan, daging, atau produk susu
            yang telah kedaluwarsa. - Daun dan Rumput: Daun yang jatuh, ranting,
            rumput potong, dan material tumbuhan lainnya dari kebun atau taman.
            2. Proses Penguraian dan Pengomposan: - Penguraian Alami: Sampah
            organik mengalami proses penguraian alami oleh bakteri, jamur, dan
            mikroorganisme lainnya. - Pengomposan: Proses penguraian sampah
            organik secara terkontrol, dimana bahan organik ini diatur dalam
            lingkungan yang sesuai untuk mendukung pertumbuhan mikroorganisme
            pengurai. 3. Manfaat dari Pengelolaan Sampah Organik: - Kompos:
            Sampah organik yang diolah dengan baik dapat diubah menjadi kompos
            yang kaya akan nutrisi untuk tanah. Kompos ini berguna sebagai pupuk
            organik untuk taman, kebun, atau pertanian. - Reduksi Limbah:
            Mengolah sampah organik mengurangi volume sampah yang dikirim ke
            tempat pembuangan akhir (TPA). 4. Pengelolaan Sampah Organik di
            Rumah Tangga: - Pemisahan Sampah: Penting untuk memisahkan sampah
            organik dari sampah non-organik agar dapat diolah dengan benar. -
            Pengomposan di Rumah: Proses pengomposan sederhana dapat dilakukan
            di rumah untuk mengubah sampah organik menjadi kompos yang berguna.
            5. Pentingnya Daur Ulang Sampah Organik: - Aspek Lingkungan:
            Mengurangi jumlah sampah yang masuk ke TPA, mengurangi emisi gas
            metana dari pembusukan sampah organik di tempat pembuangan akhir. -
            Kesuburan Tanah: Pemakaian kompos meningkatkan kesuburan tanah dan
            memperbaiki struktur tanah. 6. Tantangan dalam Pengelolaan Sampah
            Organik: - Perencanaan yang Tepat: Memerlukan perencanaan dan
            manajemen yang baik untuk memastikan proses pengomposan berjalan
            dengan efisien tanpa menghasilkan bau atau masalah lingkungan
            lainnya. - Kesadaran Masyarakat: Pendidikan dan kesadaran masyarakat
            tentang pengelolaan sampah organik memainkan peran penting dalam
            kesuksesan praktik pengomposan. Sampah organik memiliki potensi
            besar untuk diubah menjadi sumber daya yang berguna seperti kompos.
            Mengelola sampah organik dengan baik dapat membantu dalam menjaga
            lingkungan, mengurangi limbah, dan meningkatkan kesuburan tanah.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
