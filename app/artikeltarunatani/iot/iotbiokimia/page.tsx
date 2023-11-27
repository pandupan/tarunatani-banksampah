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
          <h2 className="text-xl text-center py-5">Biokimia dan Bioteknologi dalam Pertanian</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
          Biokimia dan bioteknologi memainkan peran penting dalam pengembangan inovasi dalam sektor pertanian, mulai dari peningkatan produksi tanaman hingga pengembangan solusi yang ramah lingkungan. Berikut beberapa konsep dan penerapan dari kedua bidang ini dalam pertanian:

1. Bioteknologi Tanaman:

Pemuliaan Tanaman: Penggunaan teknik bioteknologi seperti rekayasa genetika untuk menghasilkan varietas tanaman yang lebih tahan terhadap penyakit, hama, atau kondisi lingkungan tertentu.
Pengembangan Varietas Unggul: Teknik seperti kloning dan rekayasa genetika membantu dalam menghasilkan varietas tanaman yang memiliki sifat-sifat yang diinginkan seperti ketahanan terhadap kondisi lingkungan ekstrem atau ketersediaan nutrisi yang lebih baik.

2. Penggunaan Enzim dan Mikroba:

Biokontrol Hama dan Penyakit: Penggunaan mikroorganisme tertentu atau produk-produk biokimia untuk mengendalikan populasi hama dan penyakit tanaman secara alami.
Peningkatan Kualitas Tanah: Penerapan enzim dan mikroba dalam pupuk organik atau kompos dapat meningkatkan kesehatan tanah dan ketersediaan nutrisi bagi tanaman.

3. Pengembangan Pupuk dan Pestisida Ramah Lingkungan:

Pupuk Organik: Menggunakan bahan-bahan organik dan biodegradable untuk memperkaya tanah dan menyediakan nutrisi bagi tanaman.
Pestisida Biologis: Penggunaan mikroba, feromon, atau ekstrak tanaman sebagai alternatif untuk pengendalian hama dan penyakit tanaman.

4. Bioteknologi untuk Konservasi Tanah dan Air:

Bioremediasi Tanah: Penggunaan mikroba untuk membersihkan tanah dari toksin atau polutan yang merusak.
Biofilter dan Penjernihan Air: Penggunaan organisme hidup untuk membersihkan air limbah pertanian atau menjaga kualitas air di area pertanian.

5. Penelitian Genomik dan Proteomik:

Analisis Genomik Tanaman: Penggunaan analisis genomik untuk memahami gen dan karakteristik genetik tanaman yang dapat digunakan dalam pemuliaan tanaman.
Proteomik Tanaman: Studi tentang struktur dan fungsi protein dalam tanaman, membantu memahami bagaimana protein memengaruhi pertumbuhan tanaman dan respons terhadap lingkungan.

6. Penggunaan Teknologi CRISPR/Cas9:

Edit Genetik Presisi: Teknologi baru ini memungkinkan manipulasi gen dengan tingkat presisi yang tinggi, membantu dalam pengembangan varietas tanaman yang lebih unggul secara genetik.

Penerapan biokimia dan bioteknologi dalam pertanian membawa dampak yang signifikan dalam meningkatkan produksi, mengurangi kerusakan lingkungan, serta menghasilkan tanaman yang lebih tahan terhadap tantangan eksternal. Terus berlanjutnya penelitian dan pengembangan dalam bidang ini diharapkan akan membawa inovasi yang lebih baik untuk pertanian di masa depan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
