const { deleteFile } = require('../../utils/deletefile');
const cloudinary = require('../../config/cloudinary');
const Course = require('../models/Course');


const getCourse = async (req, res)=>{
    try{
        const {id} = req.params;
        const course = await Course.findById(id);
        return res.status(200).json(course);
        
    }catch(err){
        return res.status(404).json({message:"Could not find courses", error: err.message});
    }
}


const getCourses = async (req, res )=>{
    try{
        const courses = await Course.find();
        return res.status(200).json(courses);

    }catch{error}{
        return res.status(400).json(err);
    }
}


const postCourse = async (req, res) => {
  try {
    console.log("Archivo recibido:", req.file); // Verifica si el archivo llega correctamente
    console.log("Datos recibidos:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    const { title, description, categories } = req.body;

    if (!title || !categories) {
      return res.status(400).json({ message: "Title and categories are required" });
    }

    const newCourse = new Course({
      title,
      description,
      img: req.file.path, // Aquí guardamos la URL generada por Cloudinary
      categories,
    });

    const savedCourse = await newCourse.save();
    console.log("Curso creado:", savedCourse);

    return res.status(201).json(savedCourse);

  } catch (err) {
    console.error("Error creando el curso:", err.message);
    return res.status(500).json({ message: "Could not create the course", error: err.message });
  }
};



const deleteCourse = async (req, res) => {
    try{
        const {id} = req.params;
        const course = await Course.findById(id);
        deleteFile(course.img);
        await Course.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Course has been deleted",
            element : course
        });
        
    }catch(err){
        return res.status(400).json(err);
    }
}


const updateCourse = async (req, res, next) => {
    try {
        //Recuperamos el id de la url
        const { id } = req.params;
        //instanciamos un nuevo Character con la información del body
        const courseModify = new Course(req.body) 
        //añadimos la propiedad _id al personaje creado
        courseModify._id = id;
        // la opción new: true nos permitirá ver el documento ya actualizado en lugar del anterior a ser actualizado
        const courseUpdated = await Course.findByIdAndUpdate(id , courseModify, {new: true});
        return res.status(200).json(courseUpdated);
    } catch (error) {
        return next(error);
    }
  }




module.exports = {getCourse, getCourses, postCourse, deleteCourse, updateCourse};