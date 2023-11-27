import { patuaFont } from "@/utils/font"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/perantani-1.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">
            Peran Taruna Tani dalam Masa Depan Pertanian Global
          </h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="relative w-[250px] h-[150px] my-10">
          <Image src="/images/perantani-2.png" alt="perantani" fill={true} />
        </div>
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>
            Peran Taruna Tani dalam Pertanian
          </p>
          <p className={patuaFont.className}>
            Taruna tani merupakan para pemuda yang tertarik dan berdedikasi pada
            pertanian modern. Mereka bukan hanya petani masa depan, tetapi juga
            inovator, pemimpin, dan pelopor perubahan dalam pertanian
          </p>
          <p className={patuaFont.className}>
            Pendidikan dan Pelatihan: Taruna tani diberi kesempatan untuk
            belajar mengenai teknologi terkini, praktik pertanian berkelanjutan,
            manajemen usaha pertanian, dan aspek lain yang berkaitan dengan
            dunia pertanian. Pendidikan formal dan pelatihan praktis membantu
            mereka memahami aspek ilmiah, teknis, dan manajerial pertanian.
          </p>
          <p className={patuaFont.className}>
            Inovasi Teknologi Pertanian: Taruna tani memainkan peran penting
            dalam mengadopsi dan mengembangkan teknologi terkini dalam
            pertanian, seperti penggunaan sensor, kecerdasan buatan, dan alat
            otomatisasi lainnya untuk meningkatkan produktivitas dan efisiensi.
            Mereka juga mendorong penggunaan teknologi ini di kalangan petani
            lainnya dan berkontribusi pada revolusi digital dalam pertanian.
          </p>
          <p className={patuaFont.className}>
            Pertanian Berkelanjutan: Para taruna tani memahami pentingnya
            praktik pertanian berkelanjutan seperti penggunaan pupuk organik,
            pengelolaan air yang bijaksana, serta praktik konservasi tanah dan
            sumber daya alam lainnya. Mereka mendorong adopsi praktik ini
            sebagai bagian dari sistem pertanian yang lebih ramah lingkungan.
          </p>
          <p className={patuaFont.className}>
            Kewirausahaan Pertanian: Taruna tani juga diberi wawasan dan
            keterampilan untuk menjadi wirausaha di bidang pertanian, merancang
            dan mengelola usaha pertanian mereka sendiri. Mereka mendorong dan
            mendukung pengembangan usaha kecil dan menengah di sektor pertanian.
          </p>
          <p className={patuaFont.className}>
            Pengembangan Komunitas dan Kesejahteraan Sosial: Para taruna tani
            aktif terlibat dalam memperkuat komunitas pertanian, bekerja untuk
            meningkatkan kesejahteraan petani, serta mendukung pemberdayaan
            petani kecil.
          </p>
          <p className={patuaFont.className}>
            Penelitian dan Pengembangan: Mereka juga terlibat dalam kegiatan
            penelitian dan pengembangan untuk menciptakan varietas tanaman
            unggul yang lebih tahan terhadap penyakit, lebih produktif, dan
            sesuai dengan kondisi lokal.
          </p>
        </div>
      </div>
    </>
  );
}

export default page
