import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="w-full flex justify-center text-center items-center mt-[32px]">
        <a
          className="beaufort uppercase text-[16px]"
          href="https://github.com/Lachetquentin/whoisthatchampion"
        >
          Github
        </a>
        <p className="px-[6px] beaufort">-</p>
        <Link href="/about">
          <p className="beaufort uppercase text-[16px]">About</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
