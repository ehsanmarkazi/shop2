import React from 'react'
import Head from 'next/head'

import Product from '../../components/landingpage/product'
import Navbar from '../../components/landingpage/Navbar'
import axios from 'axios'


function Productpage({ getproduct , getsimilarproduct  }) {
        return (
          <div >
          <Head>
            <title>فروشگاه ||  صفحه محصولات  </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        <header>
      <Navbar />
        </header>
        <main>
      <Product  getproduct={getproduct} getsimilarproduct={getsimilarproduct} />
        </main>
        </div>
     )
  }

export const getServerSideProps = async (context)=>{
    const {productId} = context.params
    const getproduct = (
      await axios.get("/api/admin/posts/post", {
        params: { type: "product" , productId:productId },
      })
    ).data;
    const getsimilarproduct = (
      await axios.get("/api/admin/posts/post", {
        params: { type: "similarproduct" , productId:productId },
      })
    ).data;
    return{
        props:{
            productId,
            getproduct,
            getsimilarproduct,
        }
    }
}

export default Productpage