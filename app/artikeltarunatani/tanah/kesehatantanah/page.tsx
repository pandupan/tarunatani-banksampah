import { patuaFont } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container w-full border border-theme-green">
        <div className="relative w-full h-[250px] mt-[74px]">
          <Image src="/images/perantani-5.png" alt="perantani" fill={true} />
        </div>

        <div className="flex flex-col  justify-start items-center w-[320px] space-y-8 mx-auto ">
          <h2 className="text-xl text-center py-5">Kesehatan Tanah dan Pertumbuhan Tanaman</h2>
        </div>
      </div>
      <div className="container flex items-center flex-col w-full h-auto bg-theme-green ">
        <div className="relative w-[250px] h-[350px] my-10">
            <Image src="/images/perantani-6.png" alt="perantani" fill={true} />
            </div>
        <div className="flex text-white text-sm flex-col p-4 mb-5 text-justify space-y-4">
          <p className={patuaFont.className}>Kesehatan tanah dan pertumbuhan tanaman memiliki keterkaitan yang erat. Kondisi tanah yang sehat berperan penting dalam mendukung pertumbuhan tanaman yang optimal. Beberapa faktor yang mempengaruhi kesehatan tanah dan bagaimana hal ini berdampak pada pertumbuhan tanaman meliputi:</p>
          <p className={patuaFont.className}>
          Kandungan Nutrisi Tanah: Kesehatan tanah yang baik ditandai dengan ketersediaan nutrisi yang cukup bagi tanaman. Kandungan nutrisi seperti nitrogen, fosfor, kalium, serta unsur hara mikro lainnya sangat penting bagi pertumbuhan tanaman yang sehat.
          </p>
          <p className={patuaFont.className}>
          Struktur Tanah: Struktur tanah yang baik memainkan peran penting dalam kesehatan tanah dan pertumbuhan tanaman. Tanah yang memiliki struktur yang gembur memungkinkan akar tanaman untuk tumbuh dengan baik, meningkatkan aerasi dan drainase, serta memudahkan penyerapan air dan nutrisi.
          </p>
          <p className={patuaFont.className}>
          Kandungan Bahan Organik: Kandungan bahan organik dalam tanah, seperti humus, merupakan indikator kesehatan tanah yang baik. Bahan organik membantu dalam menjaga kesuburan tanah, meningkatkan struktur tanah, dan menyediakan nutrisi bagi tanaman.
          </p>
          <p className={patuaFont.className}>
          Ketersediaan Air: Tanah yang sehat memiliki kemampuan yang baik dalam menahan air dan menyediakan kelembaban yang tepat bagi tanaman. Drainase yang baik juga penting untuk menghindari genangan air yang dapat merusak akar tanaman.
          </p>
          <p className={patuaFont.className}>
          pH Tanah yang Seimbang: Tingkat pH tanah yang tepat sangat penting. Tanah yang terlalu asam atau terlalu basa dapat memengaruhi ketersediaan nutrisi bagi tanaman.
          </p>
          <p className={patuaFont.className}>
          Keseimbangan Mikroorganisme Tanah: Mikroorganisme dalam tanah, seperti bakteri dan cacing tanah, berperan penting dalam siklus nutrisi dan dekomposisi bahan organik. Keseimbangan mikroorganisme ini mendukung kesehatan tanah dan tanaman.
          </p>
          <p className={patuaFont.className}>
          Pengendalian Hama dan Penyakit Tanah: Tanah yang sehat lebih mampu menahan serangan hama dan penyakit. Memelihara kesehatan tanah dapat membantu dalam mengurangi risiko infestasi hama dan penyakit yang merusak tanaman.
          </p>
          <p className={patuaFont.className}>
          Pengendalian Hama dan Penyakit Tanah: Tanah yang sehat lebih mampu menahan serangan hama dan penyakit. Memelihara kesehatan tanah dapat membantu dalam mengurangi risiko infestasi hama dan penyakit yang merusak tanaman.
          </p>
          Oleh karena itu, menjaga kesehatan tanah dengan pemupukan yang tepat, penggunaan pupuk organik, praktik rotasi tanaman, pertanian tanaman penutup, pengelolaan air yang baik, serta pengendalian hama dan penyakit yang tepat, semua ini dapat memberikan lingkungan yang optimal bagi pertumbuhan tanaman yang sehat. Tanah yang sehat akan mendukung akar tanaman yang kuat, penyerapan nutrisi yang optimal, dan pertumbuhan yang produktif bagi tanaman yang ditanam.
        </div>
      </div>
    </>
  );
};

export default page;
