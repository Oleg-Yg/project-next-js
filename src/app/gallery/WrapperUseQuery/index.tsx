import React, { useState } from "react";
import useQuery from "@/hooks/useQuery";
import {
  getPosts,
  getPostsAndUsers,
  getPostsAndUsersAll,
} from "@/api/fetchFunc";

// Написать хук useQuery, который загружает данные:
// - с возможностью передавать дженерик типа полученных данных
// - с возвратом всех состояний (isLoading, error, data)
// - с возможностью загружать данные сразу/при изменении зависимостей/вручную
// - с возможностью установить интервал повтора загрузки и количество
// - с возможностью преобразовать данные после загрузки
//   (если передали ф-ию преобразования, в data - будет преобразованный объект)
// - с кешированием данных (если уже загружали - не загружать больше)

// ТЕСТ: загрузить и отобразить данные с jsonplaceholder (users, posts)
// и отобразить в формате [
//  { email: userEmail1, posts: userPostTitles[] },
//  { email: userEmail2, posts: userPostTitles[] },
//  ...
// ]
// Endpoints:
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users

// interface TypeQuery {
//   id: number;
//   body: string;
//   title: string;
//   userId: number;
// }

interface TypePosts {
  id: number;
  body: string;
  title: string;
  userId: number;
}

interface TypeUsers {
  id: number;
  name: string;
  username: string;
  email: number;
}

interface TypeQuery {
  posts: TypePosts[];
  users: TypeUsers[];
}

const transformFunc = (data: TypeQuery) => {
  return data.users.reduce((acc, user) => {
    acc = [
      ...acc,
      {
        email: user.email,
        posts: data.posts.reduce((acc, post) => {
          if (post.userId === user.id) {
            acc = [...acc, post.title];
          }
          return acc;
        }, []),
      },
    ];

    return acc;
  }, []);
};

const WrapperUseQuery = () => {
  const [number, setNumber] = useState(0);

  const { isLoading, data, error, fetchData } = useQuery<TypeQuery>({
    // fetchFunc: getPosts,
    // fetchFunc: getPostsAndUsers,
    fetchFunc: getPostsAndUsersAll,
    // deps: [],
    // deps: [number],
    intervalConfig: { interval: 5000, count: 2 },
    transformFunc: transformFunc,
  });

  console.log("data: ", data);
  // console.log("error: ", error);
  // console.log("isLoading: ", isLoading);

  return (
    <div className="app">
      <h1>useQuery</h1>
      <br />
      <div>{number}</div>
      <button onClick={() => setNumber((prev) => prev + 1)}>
        Увеличить число на 1
      </button>
      <br />
      <button onClick={() => fetchData()}>Get data</button>
    </div>
  );
};

export default WrapperUseQuery;
