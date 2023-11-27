import Image from "next/image"

const page = () => {
  return (
    <div className="container w-full mih-h-[100vh] border border-theme-green">
        
      <div className="flex flex-col  justify-center pt-10 items-center w-[320px] min-h-[100vh] space-y-8 mx-auto mb-[20px] mt-[75px]">
        <div className="flex flex-col justify-center w-[300px] h-[200px] gap-8">
            <h2 className="text-2xl text-center">
            Edukasi Taruna Tani
            </h2>

            <iframe
            className="w-full aspect-video rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/IEE9Rzn5hGM?si=pF8UiI7-BJ7AdcRe "
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            >
            </iframe>
            <iframe
            className="w-full aspect-video rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/DwmefD7Di4E?si=9hJkWB2nayWYUnHJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            >
            </iframe>
            <iframe
            className="w-full aspect-video rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/yJlFt0Fdkrs?si=lgziZ4-g0hR73KDe "
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            >
            </iframe>

        </div>

      </div>

      <div className="w-full h-auto flex items-center justify-between">
        <div>
          <Image
            src="/images/leaf-3-l.png"
            alt="leaf"
            width={120}
            height={80}
          />
        </div>
        <div>
          <Image
            src="/images/leaf-3-r.png"
            alt="leaf"
            width={120}
            height={80}
          />
        </div>
      </div>
    </div>
  )
}

export default page
