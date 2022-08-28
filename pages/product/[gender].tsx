import React from 'react'
import Product from '../../client/features/product';
import { GetStaticPropsContext } from "next";
import apiUrl from '../../globalUrl';
import { productType } from '../../client/features/product/product.types';

interface PropTypes {
  data:Array<productType> | null;
}
function Gender({data}:PropTypes) {
  return (
    <main>
       {
        data && (<Product data={data}/>)
       }
    </main>
  )
}

export default Gender;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { gender: "women" },
      },
      {
        params: { gender: "men" },
      },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  let data;
  try {
    let res = await fetch(`${apiUrl}/Products/${params?.gender}/1`);
    data = await res.json();
  } catch (error) {
    data = {
      isError: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}