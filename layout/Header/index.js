import React from 'react'
import PreHeader from './PreHeader'
import PostHeader from './PostHeader'
import styles from './styles.module.scss'
import MobileHeader from './MobileHeader'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
const Index = () => {
  const recursiveLink = (data) => {
    return (
      <ul onMouseEnter={() => console.log("hii")}>
        {data?.subLinks?.map((link) => (
          <li key={link?.id}>
            <Link href={link?.link} className="flex flex-row items-center justify-between">
              <span>{link?.name}</span>
              {link.subLinks && <FaChevronRight />}
            </Link>
            {link?.subLinks && recursiveLink(link)}
          </li>
        ))}
      </ul>
    );
  };
  return (<>
    <div className={styles.__header}>
        <PreHeader/>
        <PostHeader />
    </div>
    <MobileHeader recursiveLink={recursiveLink}/>
  </>
  )
}

export default Index