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
          <h2 className="text-xl text-center py-5">Sampah Spesifik</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Sampah spesifik mengacu pada jenis sampah tertentu yang memiliki
            karakteristik khusus dan mungkin memerlukan penanganan yang berbeda
            dari jenis sampah lainnya. Berikut beberapa contoh sampah spesifik
            dan informasi terkait: 1. Sampah Konstruksi dan Demolisi: -
            Karakteristik: Material bangunan bekas seperti batu bata, kayu,
            beton, dan logam dari proyek konstruksi atau penghancuran bangunan.
            - Penanganan: Memerlukan pemilahan dan pemrosesan yang berbeda untuk
            daur ulang dan penggunaan kembali material bangunan bekas. 2. Sampah
            Elektronik Rumah Tangga (E-Waste): - Karakteristik: Elektronik bekas
            seperti komputer, telepon genggam, perangkat elektronik rumah
            tangga, yang mengandung logam berat dan bahan beracun. - Penanganan:
            Diperlukan daur ulang khusus karena komponen-komponen elektronik
            dapat mencemari lingkungan jika tidak dikelola dengan benar. 3. Ban
            Bekas: - Karakteristik: Ban kendaraan bekas yang sudah tidak
            terpakai lagi. - Penanganan: Dapat diolah kembali untuk digunakan
            sebagai bahan baku dalam pembuatan produk lain seperti taman bermain
            atau bahan konstruksi. 4. Sampah Taman: - Karakteristik: Daun
            kering, ranting, potongan rumput, atau material tumbuhan lainnya
            dari pemeliharaan taman. - Penanganan: Dapat diolah menjadi kompos
            atau digunakan kembali dalam praktik pengomposan. 5. Sampah Medis: -
            Karakteristik: Limbah dari fasilitas kesehatan yang mengandung
            zat-zat infeksius, bahan kimia medis, dan jarum bekas. - Penanganan:
            Memerlukan penanganan khusus dan aman untuk menghindari penyebaran
            infeksi dan risiko kesehatan. 6. Limbah Konsumen Khusus: -
            Karakteristik: Sampah yang berasal dari barang-barang tertentu
            seperti kemasan produk konsumen, produk rumah tangga tertentu, atau
            limbah dari industri khusus. - Penanganan: Dapat memerlukan metode
            pengolahan atau daur ulang yang spesifik sesuai dengan bahan atau
            karakteristik limbah tersebut. Sampah spesifik memiliki
            karakteristik yang khas dan memerlukan penanganan yang sesuai agar
            dapat diolah kembali atau didaur ulang dengan efisien. Pengelolaan
            yang tepat diperlukan agar dapat mengurangi dampak negatifnya
            terhadap lingkungan serta memanfaatkan kembali sumber daya yang ada
            di dalamnya.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
