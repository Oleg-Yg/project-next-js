"use client";

import Tabs from "@/components/Tabs";
import Tab from "@/components/Tabs/Tab";
import Loader from "@/components/Loader";
import Button from "@/components/Button";
import Fake3d from "@/components/Fake3d";
import Calendar from "@/components/Calendar";
import WrapperButtons from "@/app/gallery/WrapperButtons";
import UpLoadedPictures from "@/components/UpLoadedPictures";
import WrapperTable from "@/app/gallery/WrapperTable";
import Auth from "@/components/Auth";
import WrapperUseQuery from "@/app/gallery/WrapperUseQuery";
import WrapperHookah from "@/app/gallery/WrapperHookah";

const Gallery = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Галерея компонентов</h1>
      <Tabs>
        <Tab title={"Hookah"} component={<WrapperHookah />} />
        <Tab title={"Use Query"} component={<WrapperUseQuery />} />
        <Tab title={"Auth"} component={<Auth />} />
        <Tab title={"Table"} component={<WrapperTable />} />
        <Tab
          title={"UpLoaded Pictures"}
          component={
            <UpLoadedPictures
              getUploadedImages={(array) => console.log(array)}
            />
          }
        />
        <Tab title={"Calendar"} component={<Calendar />} />
        <Tab title={"Fake3d"} component={<Fake3d />} />
        <Tab title={"Button"} component={<WrapperButtons />} />
        <Tab title={"Loader"} component={<Loader />} />
      </Tabs>
    </div>
  );
};

export default Gallery;
