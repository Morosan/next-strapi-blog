import Card from './components/card/card';
import { IconTypes } from './components/button/button';

const Home = () => (
  <div className="container pb-80">
    <Card 
      label="Product Reviews"
      title="Clatite cu branza dulce la cuptor"
      summary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam labore architecto recusandae blanditiis saepe, velit voluptates officia ut animi veniam."
      href="#"
      btnIcon={IconTypes.ARROW_RIGHT}
      className="mb-30"
    />
    <div className="row">
      <div className="col col-4 m-mw-100">
        <Card 
          label="Opinions"
          title="Clatite cu branza dulce la cuptor"
          summary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam labore architecto recusandae blanditiis saepe, velit voluptates officia ut animi veniam."
          href="#"
          btnIcon={IconTypes.ARROW_RIGHT}
          className="mb-30"
        />
      </div>
      <div className="col col-4 m-mw-100">
        <Card 
          label="Product Reviews"
          title="Clatite cu branza dulce la cuptor"
          summary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam labore architecto recusandae blanditiis saepe, velit voluptates officia ut animi veniam."
          href="#"
          btnIcon={IconTypes.ARROW_RIGHT}
          className="mb-30"
        />
      </div>
      <div className="col col-4 m-mw-100">
        <Card 
          label="Travel Guides"
          title="Clatite cu branza dulce la cuptor"
          summary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam labore architecto recusandae blanditiis saepe, velit voluptates officia ut animi veniam."
          href="#"
          btnIcon={IconTypes.ARROW_RIGHT}
          className="mb-30"
        />
      </div>
    </div>
  </div>
);

export default Home;