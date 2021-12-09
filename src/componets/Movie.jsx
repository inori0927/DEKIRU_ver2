import React from 'react';
import Alticle from './Alticle';

class Movie extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
           isPublished: false,
           order: 1
       }
   }

   //公開状態を反転させる関数
   toggelePublished = () => {
       this.setState( {
           isPublished: !this.state.isPublished
       })
   };
   render() {
       const authorName = "Torahack"
       return (
           <>
               <Alticle title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => this.toggelePublished()}/>
           </>
       )
   }
}
export default Movie;