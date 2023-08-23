import { dnaData } from "./Dna-data";

function Cards() {
  const datas = dnaData.map((data) => (
    <p key={data.id} className="dna-card">
      {data.code} {data.name} {""}
      <span className="grey">{data.grey}</span>
    </p>
  ));
  return <div className="dna-container">{datas}</div>;
}

export default function Dna() {
  return (
    <> 
    <Cards />
    </>
  );
}
