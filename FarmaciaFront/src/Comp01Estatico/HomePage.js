import React, { Component } from "react";
import CompCabecera from "./CompCabecera";
import CompPiePagina from "./CompPiePagina";
import ComCuerpo from "./ComCuerpo";
import ComCuerpoLaboratorio from "./ComCuerpoLaboratorio"
class HomePage extends Component {

    render() {
        return (            
            <div>
               <CompCabecera/><br/><br/>
                <main role="main" >
                    <div>
                    <ComCuerpo/>
                    <ComCuerpoLaboratorio/>
                    </div>
                </main>
                <CompPiePagina />

            </div>
        );
    }
}

export default HomePage;