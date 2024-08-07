import { CheckIcon } from 'lucide-react';
import Link from 'next/link'
import ShineBorder from '../magicui/shine-border';

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  recommended: boolean;
}

const PricingCard = ({ title, price, features, recommended }: PricingCardProps) => {
  return (
    <ShineBorder className="rounded-xl h-full w-[350px]">
      <div className="bg-white/90 backdrop-blur-sm h-full flex flex-col items-start justify-start p-4">
        {recommended && <div className='flex self-end bg-primary px-5 py-1 rounded-full text-white text-sm'>Recommended</div>}
        <div className="flex-grow text-lg">
          <h3 className="text-2xl font-bold text-primary">{title}</h3>
          <div className="flex items-baseline my-4 text-primary">
            <span className="text-4xl font-bold">{price}</span>
          </div>
          <ul className="text-gray-600 space-y-2 mt-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon size={20} className="mr-2 text-primary flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center mt-6 w-full">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-base text-white hover:bg-secondary transition-colors"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </div>
    </ShineBorder>
  )
}

export default PricingCard