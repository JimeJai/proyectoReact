// Acá van las funciones q se conectan con la db y piden los productos, producto x id..
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

//-----------------------------------------------------------------------------------

const productsRef = collection(db, "products");
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (err) {
    console.error("Error al traer productos:", error);
    return [];
  }
};
//-----------------------------------------------------------------------------------
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "products", id); //crea referencia de 1 solo documento
    const snapshot = await getDoc(productRef); //trae ese docuento de la linea anterior

    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("doc:", product);

      return product;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error al traer el producto por id:", error);
    return null;
  }
};
//-----------------------------------------------------------------------------------
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;
  } catch (err) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};
