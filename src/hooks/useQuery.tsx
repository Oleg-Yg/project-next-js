import { useCallback, useEffect, useRef, useState } from "react";
interface Result<T> {
  data: T | null;
  error: null | Error;
  isLoading: boolean;
}

export default function useQuery<T, D = any>({
  fetchFunc,
  deps,
  intervalConfig,
  transformFunc,
}: {
  fetchFunc(): Promise<T>;
  deps?: any[];
  intervalConfig?: { interval: number; count: number };
  transformFunc?: (data: T) => D;
}) {
  const [{ data, error, isLoading }, setStatus] = useState<Result<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const intervalIdRef = useRef<NodeJS.Timeout>();

  const fetchData = useCallback(async () => {
    try {
      setStatus((prev) => ({ ...prev, error: null, isLoading: true }));
      const result = await fetchFunc();
      setStatus((prev) => ({ ...prev, data: result, isLoading: false }));
    } catch (error) {
      setStatus((prev) => ({
        ...prev,
        error: error as Error,
        isLoading: false,
      }));
    }
  }, [fetchFunc]);

  const fetchInterval = useCallback(() => {
    fetchData();
    if (!intervalConfig) return;
    let intervalCount = 0;
    intervalIdRef.current = setInterval(() => {
      if (intervalCount === intervalConfig.count) {
        return clearInterval(intervalIdRef.current);
      }
      fetchData();
      intervalCount++;
    }, intervalConfig.interval);
  }, [fetchData, intervalConfig]);

  useEffect(() => {
    if (!deps) return;
    fetchInterval();
    return () => clearInterval(intervalIdRef.current);
  }, [fetchInterval, ...(deps || [])]);

  return {
    isLoading,
    error,
    data: transformFunc && data ? transformFunc(data) : data,
    fetchData: fetchInterval,
  };
}
