import Asset from "./components/asset.tsx";

const faceAsset = {
  title: "Chat Face",
  image: "./nyan.png",
  description: "nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>top nav bar</h1>
      </div>

      <div className="flex place-items-center">
      <a href="preview">
        <Asset asset={faceAsset}/>
      </a>
      </div>
    </main>
  );
}
