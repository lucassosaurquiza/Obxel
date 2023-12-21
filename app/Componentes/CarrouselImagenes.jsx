import Link from "next/link"

const CarrouselImagenes = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#18181B] transition-all ease-in-out duration-500 overflow-x-auto scrollbar-hide">
      <div className="container px-4 md:px-6 flex flex-no-wrap justify-start gap-8 animate-scroll slow">
        <div className="flex-shrink-0 flex flex-col space-y-4">
          <img
            alt="Blog post thumbnail"
            className="rounded"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <h2 className="text-2xl font-bold tracking-tighter">Blog Post Title 1</h2>
          <p className="max-w-[200px] text-gray-300 md:text-lg">Brief introduction or summary of the blog post.</p>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
            Read More
          </Link>
        </div>
        <div className="flex-shrink-0 flex flex-col space-y-4">
          <img
            alt="Blog post thumbnail"
            className="rounded"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <h2 className="text-2xl font-bold tracking-tighter">Blog Post Title 2</h2>
          <p className="max-w-[200px] text-gray-300 md:text-lg">Brief introduction or summary of the blog post.</p>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
            Read More
          </Link>
        </div>
        <div className="flex-shrink-0 flex flex-col space-y-4">
          <img
            alt="Blog post thumbnail"
            className="rounded"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <h2 className="text-2xl font-bold tracking-tighter">Blog Post Title 3</h2>
          <p className="max-w-[200px] text-gray-300 md:text-lg">Brief introduction or summary of the blog post.</p>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CarrouselImagenes