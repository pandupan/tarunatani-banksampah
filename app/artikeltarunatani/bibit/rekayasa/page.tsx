import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/bibit-5.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Rekayasa Genetik dan Inovasi dalam Pengembangan Bibit</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Rekayasa Genetik dan Inovasi dalam Pengembangan Bibit: 1. Penelitian
            dan Pengembangan: Definisi Rekayasa Genetik: - Rekayasa genetik
            adalah proses manipulasi materi genetik sebuah organisme untuk
            menghasilkan sifat-sifat yang diinginkan. Tujuan Pengembangan: -
            Penggunaan rekayasa genetik dan teknologi modern dalam penelitian
            dan pengembangan tanaman bertujuan untuk menciptakan varietas yang
            lebih unggul. Hasil yang Lebih Unggul: - Fokus pada peningkatan
            hasil tanaman, baik dari segi kuantitas maupun kualitas. - Varietas
            yang lebih unggul dapat meningkatkan produktivitas pertanian.
            Ketahanan terhadap Hama: - Introduksi gen ketahanan terhadap hama
            membantu mengurangi ketergantungan pada pestisida kimia. - Tanaman
            yang tahan terhadap hama dapat menghasilkan panen yang lebih stabil.
            Adaptabilitas terhadap Perubahan Iklim: - Pengembangan tanaman yang
            dapat beradaptasi dengan baik terhadap perubahan iklim yang cepat. -
            Varietas yang tangguh terhadap suhu ekstrem atau kondisi cuaca yang
            tidak stabil. 2. Metode Rekayasa Genetik: Teknologi CRISPR-Cas9: -
            Metode rekayasa genetik terkini menggunakan teknologi CRISPR-Cas9
            untuk memodifikasi DNA tanaman secara presisi. - Memungkinkan
            peneliti untuk menargetkan gen spesifik dan menggantinya dengan
            cepat. Transfer Gen: - Pemindahan gen dari organisme lain yang
            memiliki sifat yang diinginkan ke dalam genom tanaman. -
            Memungkinkan peningkatan sifat-sifat tertentu tanaman. Mutasi
            Terarah: - Menciptakan mutasi yang diarahkan pada level gen untuk
            menghasilkan variasi yang diinginkan. - Memberikan fleksibilitas
            dalam mengembangkan sifat-sifat tanaman yang spesifik. 3. Keuntungan
            Rekayasa Genetik dalam Pengembangan Bibit: Efisiensi dalam Perubahan
            Gen: - Rekayasa genetik memungkinkan perubahan gen yang lebih cepat
            dan tepat dibandingkan dengan metode tradisional. - Proses
            pengembangan varietas dapat dipercepat. Peningkatan Ketahanan
            Tanaman: - Pengenalan sifat-sifat ketahanan, seperti ketahanan
            terhadap hama atau penyakit, membantu tanaman menghadapi tekanan
            eksternal. Adaptasi Cepat terhadap Perubahan Iklim: - Tanaman hasil
            rekayasa genetik dapat dirancang untuk lebih tahan terhadap
            perubahan iklim yang cepat. - Meningkatkan kemampuan tanaman untuk
            beradaptasi dengan kondisi lingkungan yang berubah. Peningkatan
            Kualitas dan Kuantitas Hasil: - Varietas yang dihasilkan dapat
            memiliki kualitas dan kuantitas hasil yang lebih baik, memenuhi
            kebutuhan pertanian dan konsumen. 4. Pertimbangan Etika dan
            Keamanan: Keterbukaan Informasi: - Penting untuk memberikan
            informasi yang transparan tentang metode rekayasa genetik kepada
            masyarakat. - Mendorong dialog terbuka tentang etika dan keamanan.
            Keamanan Pangan dan Lingkungan: - Evaluasi dampak rekayasa genetik
            terhadap keamanan pangan dan lingkungan. - Perlunya regulasi yang
            ketat untuk memastikan keselamatan dan keberlanjutan. Pertimbangan
            Sosial: - Pertimbangkan dampak sosial dari pengembangan varietas
            rekayasa genetik terhadap petani dan masyarakat setempat. - Libatkan
            pihak-pihak yang terpengaruh dalam proses pengembangan. Rekayasa
            genetik dan inovasi dalam pengembangan bibit memiliki potensi besar
            untuk meningkatkan ketahanan pangan dan mendukung pertanian
            berkelanjutan. Namun, perlu ada perhatian serius terhadap
            pertimbangan etika, keamanan, dan dampak sosial serta lingkungan.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
