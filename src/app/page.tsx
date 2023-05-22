import Image from 'next/image'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
//import DraftEditor from './components/DraftEditor/DraftEditor'


const MyDraftEditor= dynamic(()=> import("./components/DraftEditor/DraftEditor"), {ssr:false})

export default function Home() {
  return (
   <div className={styles.container}>My editor
     <MyDraftEditor/>
   </div>
  )
}
