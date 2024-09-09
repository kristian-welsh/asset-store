import Asset from "../components/asset.tsx";
import Navbar from "../components/Navbar.tsx";

const faceAsset = {
  title: "Chat Face",
  image: "./nyan.png",
  description: "you have arrived at the store preview page",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <div className="flex place-items-center">
        <Asset asset={faceAsset}/>
      </div>
    </main>
  );
}
