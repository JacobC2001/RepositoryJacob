import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataJsonListarCategoria from "../DataJason/DataJsonListarCategoria.json";

class CompCategoriaMant extends Component {
  render() {
    return (
      <div class="container text-center">
        <br /> <br /> <span class="fs-1">Tabla Categoria</span>
        <div class="card">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody>
                {DataJsonListarCategoria.map((categoria, indice) => {
                  return (
                    <tr>
                      <th scope="row">
                        {categoria.id}
                      </th>
                      <td> {categoria.nombre} </td>
                      <td>
                        <botton class="btn btn-success rounded-circle" key={categoria.id}>
                          <Link to={`/categoriaMant/${categoria.id}`}>
                            <i class="bi bi-pencil-fill text-white fs-5"></i>
                          </Link>
                        </botton>
                        <botton class="btn btn-warning rounded-circle" key={categoria.id}>
                          <Link to={`/categoriaMant/${categoria.id}`}>
                            <i class="bi bi-trash3-fill text-danger fs-5"></i>
                          </Link>
                        </botton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default CompCategoriaMant;
