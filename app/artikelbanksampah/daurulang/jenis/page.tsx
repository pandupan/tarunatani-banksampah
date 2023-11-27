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
            Jenis Sampah yang Dapat diDaur Ulang
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Banyak jenis sampah yang dapat didaur ulang untuk mengurangi jumlah
            limbah yang masuk ke tempat pembuangan akhir (TPA) dan memanfaatkan
            kembali sumber daya alam. Berikut adalah beberapa jenis sampah yang
            sering didaur ulang: 1. Plastik: - Botol Plastik: Seperti botol air
            minum atau botol minuman lainnya yang terbuat dari PET (Polyethylene
            Terephthalate) bisa didaur ulang menjadi serat poliester untuk
            tekstil. - Kemasan Plastik: Daur ulang plastik dari kemasan makanan
            atau bungkus produk konsumen ke dalam bahan daur ulang untuk
            pembuatan kemasan baru. 2. Kertas: - Kertas Bekas: Kertas dari
            surat, kardus, atau majalah dapat didaur ulang menjadi kertas baru
            setelah proses pemrosesan. - Kardus: Kardus bekas dari kemasan
            barang juga dapat didaur ulang menjadi bahan kardus baru. 3. Logam:
            - Kaleng Aluminium: Kaleng minuman yang terbuat dari aluminium bisa
            didaur ulang menjadi aluminium baru. - Logam Lainnya: Logam seperti
            baja, tembaga, dan besi juga dapat didaur ulang untuk pembuatan
            produk logam baru. 4. Kaca: - Botol Kaca: Botol minuman atau wadah
            makanan yang terbuat dari kaca dapat didaur ulang menjadi kaca baru.
            - Piring, Gelas, dan Cermin: Kaca dari peralatan rumah tangga juga
            dapat didaur ulang. 5. Limbah Organik: - Sampah Makanan: Limbah
            organik seperti sisa makanan dapat diolah menjadi kompos atau
            digunakan untuk pembangkit biogas. 6. Elektronik (E-Waste): -
            Komputer, Telepon Genggam, Elektronik Lama: Bahan elektronik yang
            sudah tidak terpakai bisa didaur ulang untuk mendaur ulang logam dan
            bahan lainnya di dalamnya. 7. Ban Bekas: - Ban Kendaraan: Ban bekas
            bisa diolah kembali menjadi bahan baku untuk produk-produk seperti
            taman bermain atau lantai karet. 8. Kain dan Tekstil: - Pakaian
            Lama: Tekstil dan pakaian bekas bisa didaur ulang menjadi serat
            tekstil baru untuk membuat kain atau produk tekstil lainnya. 9.
            Kayu: - Pallet dan Papan Kayu: Material kayu bekas bisa didaur ulang
            menjadi papan kayu atau bahan baku untuk produk kayu lainnya. 10.
            Minyak Goreng Bekas: - Limbah Minyak Goreng: Dapat didaur ulang
            menjadi bahan bakar alternatif atau bahan kimia lainnya setelah
            proses pengolahan tertentu. Melalui proses daur ulang, sampah-sampah
            ini dapat diperbarui dan digunakan kembali dalam pembuatan berbagai
            produk, membantu mengurangi pencemaran lingkungan serta
            memperpanjang siklus hidup sumber daya alam.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
