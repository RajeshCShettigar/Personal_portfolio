import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="flex flex-col items-center justify-center text-6xl text-gray-200">
          <h1 className="font-bold">Hello, I'm <span className="text-blue-500">Rajesh C Shettigar</span></h1>
          <h2 className="font-light">I'm a <span className="text-blue-500">Software Developer</span></h2>
        </div>
    </main>
  )
}
