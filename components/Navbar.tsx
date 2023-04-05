import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <Link href='/'>
        <div className='flex items-center cursor-pointer'>
          <Image src='/logo.png' alt='logo' height={35} width={45} />
          <span className='font-bold ml-2 text-primary'>New Blog Post</span>
        </div>
      </Link>
      <ul className='flex items-center'>
        <li className='mr-6 font-medium text-gray-600'>
          <Link href='/createPostPage' className='hover:text-gray-400'>
            Create Post
          </Link>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
          <a href='#' className='hover:text-gray-400'>
            Log in
          </a>
        </li>
        <li className='font-medium text-gray-600'>
          <a
            href='#'
            className='bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all'
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
