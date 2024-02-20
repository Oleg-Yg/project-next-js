import { authWithToken } from "@/api2";
import { useContext, useEffect, useState } from "react";
import { authContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";

interface Status {
  isLoading: boolean;
  error: string[];
  payload: any;
}

export const useQuery2 = (url: string, deps: any[] = []) => {
  const router = useRouter();
  const { isAuth, setIsAuth } = useContext(authContext);
  const [status, setStatus] = useState<Status>({
    isLoading: false,
    error: [],
    payload: null,
  });

  useEffect(() => {
    const getData = async () => {
      setStatus({
        isLoading: true,
        error: [],
        payload: null,
      });

      try {
        let response = await authWithToken(url);
        let result = await response.json();
        setStatus({ isLoading: false, error: [], payload: result });
      } catch (e) {
        console.log(e);
        setIsAuth(false);
        router.replace("/auth");
      }
    };
    getData();
  }, deps);

  return status;
};
