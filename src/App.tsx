import { Post, PostType } from "./components/Post.tsx";
import { Header } from "./components/Header.tsx";
import { Sidebar } from "./components/Sidebar.tsx";

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/7306693?v=4',
      name: 'Jimy Suenaga',
      role: 'Back-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia,'},
      { type: 'paragraph', content: 'Está sendo super legal trabalhar nesse projeto, agradeço a todos que participaram e construiram essa entrega incrível'},
      { type: 'link', content: 'jimy.back/doctorcare'},
    ],
    publisheAt: new Date('2025-03-02 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/35016568?v=4',
      name: 'Thales Souza',
      role: 'Product Designer'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋'},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     { type: 'link', content: 'thales.design/doctorcare'},
    ],
    publisheAt: new Date('2025-03-01 12:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}