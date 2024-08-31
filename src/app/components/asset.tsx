type AssetProps = {
    title: string;
    image: string;
    description: string;
}

const asset: React.FC<AssetProps> = ({asset}) => {
    const {title, description, image} = asset
    return (
        <div className="w-96 rounded-xl overflow-hidden shadow-lg p-8 bg-slate-500/20">
          <h3>{title}</h3>
          <div className="py-5 flex justify-center items-center"><img src={image}></img></div>
          <p>{description}</p>
        </div>
    );
}

export default asset

