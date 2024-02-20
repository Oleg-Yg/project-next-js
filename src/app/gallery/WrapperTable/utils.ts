export const getDataTable = (data: any, keys: string[]) => {
  return data.map((element: any) =>
    keys.reduce((acc, key: string) => {
      acc = { ...acc, [key]: element[key] };
      return acc;
    }, {})
  );
};
