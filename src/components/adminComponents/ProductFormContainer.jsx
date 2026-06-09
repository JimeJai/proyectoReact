import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productsService";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  ////////////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    //esta funcion arma el producto nuevo
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    //Imagen
    const file = e.target.files[0] || null;
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.prevendDefault();
    setErrors({}); //vacia los posibles errores q hayan quedado
    setLoading(true);

    const newErrors = validateProduc({
      ...product,
      file,
    }); //valida todos los campos, los del spread y la imagen en el file, si hay errors los guarda en newE
    if (Object.keys(newErrors).length > 0) {
      //si hay errores, los manda a setErrors
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    try {
      const imageUrl = await uploadImage(file); //agrega al producto la imagen
      const productData = {
        ...product,
        price: Number(product.price),
        image: imageUrl,
      };
      const id = await createProduct(productData); //puede retornar id

      setProduct({
        name: "",
        price: "",
        description: "",
      });
      setFile(null);
      navigate(`/success/${id}`, { replace: true }); //borra el historial viejo y si van atras no aparece el formulario anterior
    } catch (error) {
      setErrors({ general: error.messege });
    } finally {
      setLoading(false);
    }
  };
  ///////////////////////////////////
  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};
