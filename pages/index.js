import Head from "next/head";
import { useEffect, useState } from "react";
import { getProductList } from '../redux/prodSlice'
import { useSelector, useDispatch } from 'react-redux'
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [close, setClose] = useState(true);

  const dispatch = useDispatch()
  const { pizzaList } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}
