import React from "react";
import CourseCard from "./CourseCard";
const course = {
  title: "Software Engineering",
  university: "DTU",
  term: "Fall",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos animi facere iusto minus unde veniam vero nemo. Adipisci aut vel accusantium id dolore laudantium sit, veritatis enim mollitia. Obcaecati.
  Dicta doloremque inventore unde veritatis fugiat. Aliquid quos porro aut voluptate fugit amet? Iste excepturi, reiciendis officiis dolorem cumque sequi quasi omnis veniam quod sapiente in expedita repudiandae error. Pariatur.
  Quis laudantium in qui natus, nesciunt possimus officia cupiditate rerum excepturi libero sed doloribus ad fugit. Ipsa voluptas impedit natus quaerat similique rerum doloribus, inventore voluptatum vitae eaque sequi fugit?
  Sit consequatur fuga quaerat, minus, culpa delectus voluptas, cum voluptatem reprehenderit adipisci quidem blanditiis incidunt ad atque magnam harum aliquam eligendi? Tenetur nisi mollitia esse facilis nesciunt sapiente sint incidunt.
  Alias nam magni atque consequatur. Laudantium sequi consequuntur, a illum nulla officia, eligendi adipisci quas recusandae debitis exercitationem, repudiandae hic magnam inventore sed sint tempore sit! Est, error. Numquam, voluptas?`,
  ects: 5,
  degree: "Bachelor",
  department: "Computer Science",
};

const CardGrid = () => {
  return (
    <div className="fixed-grid has-12-cols">
      <div className="grid ">
        <CourseCard className="cell is-col-span-6" course={course} />
        <CourseCard className="cell is-col-span-6" course={course} />
        <CourseCard className="cell is-col-span-6" course={course} />
        <CourseCard className="cell is-col-span-6" course={course} />
      </div>
    </div>
  );
};

export default CardGrid;
