import ViewStyle from "../../styles/view/ViewStyle";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Content from "../../components/view/Content";
import Images from "../../components/view/ImageContent";

const View = () => {
  const router = useRouter();
  const { id } = router.query;
  const [work, setWork]: any = useState();
  const [state, setState]: any = useState(false);

  useEffect(() => {
    if (!id) return;
    axios.post("/api/view", { id }).then(res => {
      const { data } = res;
      setWork(data);
    });
  }, [id]);

  useEffect(() => {
    if (work) {
      setState(true);
    }
  }, [work]);

  return (
    <section id="view" >
      <div className="container contents">
        {work ? <Content work={work} /> : null }
        {work ? <Images data={work} /> : null}
      </div>
      <Loading state={state} />
      <style jsx>{ViewStyle}</style>
    </section>
  );
};

export default View;
