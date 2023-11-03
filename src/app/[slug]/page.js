import getCategoryColor from "@/helpers/get-category-color";
import Image from "next/image";
import styles from './style.module.sass'

const BlogDetails = () => (
  <div className="container pb-80">
    <div className="row mb-50">
      <div className="col_9">
        <div className={`h6 mb-20 c-${getCategoryColor('Desert')}`}>Desert</div>
        <h2>title</h2>
      </div>
    </div>

    <Image className={`${styles.featuredImage} mb-50`} src="/clatite-cu-branza-la-cuptor.jpg" alt="Featured Image" width="1280" height="387" />

    <div className="row">
      <div className="col col_9">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis aut dolorem delectus expedita temporibus placeat porro, deleniti maiores consequuntur quos nulla cumque magni magnam ipsa repellat! Nemo amet aut incidunt.</p>
      </div>
    </div>
  </div>
);

export default BlogDetails;