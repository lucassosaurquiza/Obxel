import Link from "next/link"

const IA = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-1 p-4 my-40">
      <div>
        La inteligencia artificial (IA) representa la cúspide de décadas de avances tecnológicos, transformando la interacción con la información y automatizando procesos complejos.
        A través del aprendizaje automático y el procesamiento de grandes conjuntos de datos, la IA permite a las máquinas tomar decisiones, aprender de experiencias pasadas y adaptarse a cambios.
        Desde asistentes virtuales hasta sistemas de conducción autónoma, la IA ha dejado una marca indeleble, impulsando la eficiencia e innovación en diversos sectores, desafiando límites y prometiendo un futuro de automatización inteligente.
      </div>

      <div className="w-full max-w-2xl p-4 mx-2 rounded-md shadow-md dark:bg-gray-700">
        <img
          alt="Blog cover"
          className="w-full h-64 rounded-md object-cover"
          height={300}
          src="/placeholder.svg"
          style={{
            aspectRatio: "500/300",
            objectFit: "cover",
          }}
          width={500}
        />
        <div className="mt-2">
          <Link
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            href="#"
          >
            IA and its importance
          </Link>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur velit...
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a className="text-blue-600 dark:text-blue-400 hover:underline" href="#">
            Read more
          </a>
          <div className="flex items-center">
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">Jun 1, 2023</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IA