let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];
// yêu cầu 1
let arr = courses.filter((element)=>element.rating>=4)
console.log(arr);
// yêu cầu 2
let arr1 = courses.filter((element)=>element.rating<4).map(element=>element.id+"-"+element.title+"-"+element.rating);
console.log(arr1);
// yêu cầu 3
let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 
  // let arr3 = [...courses,...addedCourses];
  // console.log(arr3);
  const arr3 = (courses,addedCourses) => [...courses,...addedCourses];
  console.log(arr3(courses,addedCourses));