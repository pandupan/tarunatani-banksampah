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
          <h2 className="text-xl text-center py-5">Sampah Berbahaya</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Sampah berbahaya adalah jenis sampah yang mengandung bahan-bahan
            yang dapat menyebabkan ancaman serius terhadap kesehatan manusia dan
            lingkungan jika tidak dikelola dengan benar. Berikut adalah
            informasi penting terkait sampah berbahaya: 1. Jenis Sampah
            Berbahaya: - Limbah B3 (Bahan Berbahaya dan Beracun): Termasuk bahan
            kimia berbahaya, seperti cat, pelarut, pestisida, baterai, lampu
            neon, dan obat-obatan. - Limbah Elektronik (E-Waste): Elektronik
            bekas seperti komputer, telepon genggam, dan peralatan elektronik
            lainnya yang mengandung logam berat dan bahan beracun. - Limbah
            Medis: Limbah dari fasilitas kesehatan yang mengandung zat-zat
            infeksius, bahan kimia medis, dan jarum bekas. - Limbah Radioaktif:
            Limbah yang mengandung zat radioaktif, biasanya dihasilkan dari
            fasilitas nuklir atau penggunaan bahan radioaktif di industri
            tertentu. 2. Karakteristik Sampah Berbahaya: - Berpotensi Merusak
            Lingkungan: Bahan-bahan berbahaya dapat mencemari tanah, air, udara,
            serta merusak ekosistem. - Ancaman terhadap Kesehatan: Bahan kimia
            beracun dapat membahayakan kesehatan manusia melalui paparan
            langsung atau melalui rantai makanan. - Kehadiran Zat Beracun:
            Kandungan zat-zat beracun atau logam berat yang tidak ramah
            lingkungan. 3. Pengelolaan Sampah Berbahaya: - Pemilahan yang Tepat:
            Penting untuk memisahkan sampah berbahaya dari sampah lainnya untuk
            mengelola dan memprosesnya dengan benar. - Pengumpulan Aman:
            Menggunakan wadah khusus dan prosedur pengumpulan yang aman untuk
            mengurangi risiko paparan. 4. Daur Ulang dan Pengolahan yang Aman: -
            Daur Ulang yang Tepat: Beberapa sampah berbahaya dapat didaur ulang
            jika diolah dengan cara yang tepat. - Pengolahan Spesifik:
            Pengolahan dilakukan dengan teknologi dan metode khusus untuk
            memastikan tidak ada dampak buruk bagi lingkungan dan kesehatan. 5.
            Peraturan dan Standar Keselamatan: - Regulasi Khusus: Ada peraturan
            khusus dan standar keselamatan untuk pengelolaan dan pembuangan
            sampah berbahaya yang ditetapkan oleh pemerintah. - Pelatihan dan
            Kesadaran: Pelatihan dan kesadaran yang ditingkatkan sangat penting
            untuk memastikan pengelolaan yang aman dan benar. 6. Tanggung Jawab
            Produsen: - Prinsip Produsen Bertanggung Jawab: Produsen diharapkan
            untuk mempertimbangkan dampak lingkungan dari produk mereka dan
            memiliki tanggung jawab dalam pengelolaan limbah produk mereka.
            Pengelolaan sampah berbahaya memerlukan pendekatan yang sangat
            hati-hati dan sesuai dengan regulasi yang berlaku. Karena sifatnya
            yang berpotensi merusak lingkungan dan kesehatan, penanganan dan
            pemrosesan sampah berbahaya harus dilakukan dengan hati-hati untuk
            mengurangi risiko negatif bagi manusia dan ekosistem.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
