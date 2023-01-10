import axios from "axios";
import { SearchResponse } from "../types/News";
import { QueryFunctionContext } from "@tanstack/react-query";

export const searchNews = async (ctx: QueryFunctionContext) => {
  const res = await axios.get<SearchResponse>(
    "https://hn.algolia.com/api/v1/search?",
    {
      params: {
        page: ctx.queryKey[1],
        query: ctx.queryKey[2],
      },
    }
  );
  return res.data;
};
