import Image from 'next/image';
import topImage from '../../public/image.png';

const TopImage = () => {
  return (
    <div className="absolute top-[-250px] w-[90%]">
      <Image src={topImage} alt="Top Image" className="w-full animate-spin-slow h-auto" />
    </div>
  );
}

export default TopImage;