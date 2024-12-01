import { useEffect, useState } from "react";
import axios from "axios";

export default function usBookSearch(querry, pageNumber) {
  axios({
    method: "GET",
    url: "http://openlibrary.org/dearvh.json",
    params: { q: querry, page: pageNumber },
  }).then((res) => {
    console.log(res.data);
  });
  useEffect(() => {}, [querry, pageNumber]);
  return null;
}
