import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full flex text-xl justify-center text-center items-center pb-2">
      <a href="https://github.com/Lachetquentin/whoisthatchampion">Github</a>
      <p className="p-4">{'-'}</p>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Footer;
