import Image from 'next/image';
import GithubMark from '@/components/GithubMark';

export default function Home() {
  return (
    <div className='main-content flex flex-col items-center justify-center'>
      <h1 className='main-title'>Everything</h1>
      <h2 className='main-title text-6xl'>everywhere</h2>
      <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
        <a href='https://github.com/RajabovIlyas/news-site' target='_blank'>
          <button className='main-button'>
            <GithubMark />
            GitHub repo
          </button>
        </a>
      </div>
    </div>
  );
}
