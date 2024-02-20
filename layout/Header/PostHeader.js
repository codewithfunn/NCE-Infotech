import Image from 'next/image'
import React from 'react'
import Logo from "../../public/svg/logo.svg"
import styles from './styles.module.scss'
import Link from 'next/link'
const PostHeader = () => {
    const data = {
        heading:{
            logo:<Logo/>
        },
        links:[
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "About",
            link: "/about",
        },
        {
            id: 3,
            name: "Services",
            link: "/",
            subLinks:[
                {
                    id:1,
                    name:"IT Service",
                    link:"/"
                },
                {
                    id:2,
                    name:"Industries",
                    link:"/",
                    subLinks:[
                        {
                            id:1,
                            name:"Platform",
                            link:"/"
                        },
                        {
                            id:2,
                            name:"NCE Digital Services",
                            link:'/'
                        },
                        {
                            id:3,
                            name:"NCE Security",
                            link:'/'
                        },
                        {
                            id:4,
                            name:"Software Solution",
                            link:'/'
                        },
                        {
                            id:5,
                            name:"Payroll Solution",
                            link:"/"
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Resources",
            link: "/resources"
        },
        {
            id: 5,
            name: "Career",
            link: "/career"
        },
        {
            id:6,
            name:"Contact",
            link:"/contact"
        }
    ]}
  return (
    <div className={styles.PostHeader}>
       <div className={styles.PostHeader__logo}>
            {data?.heading?.logo}
       </div>
       <ul className={styles.PostHeader__links}>
        {
            data?.links?.map((link)=>{
                return(
                    <li key={link?.id} className={styles.PostHeader__links__link} >
                        <Link href={link?.link}>{link?.name}</Link>
                    </li>
                )
            })
        }
       </ul>
       
    </div>
  )
}

export default PostHeader