import Card from "./components/card";
function App(props) {
  return (
    <div className="flex row m-5 gap-5">
      <Card countryName="China" btnText="china" para="China is a Good Country"/>
      <Card countryName="India" btnText="india" para="India is a Great Country"/>
      <Card countryName="America" btnText="America"/>
    </div>
  );
}

export default App;
