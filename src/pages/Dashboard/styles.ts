import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}
// template literals;


export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height:56px;
  margin-top: 80px;
`;



export const Form = styled.form<FormProps>`
 margin-top: 40px;
 max-width: 700px;
 display: flex;
 margin-bottom: 80px;
 input {
   flex: 1;
   height: 70px;
   padding: 0 24px;
   border: 0;
   color: #3A3A3A;
   border-radius: 5px 0 0 5px;
   border: 2px solid #fff;
   border-right: 0px;

   ${(props) =>
    props.hasError && css`
       border-color: #c53030;
   `}

   &::placeholder {
     color: #a8a8b3;
   }


 }

 button {
   width: 210px;
   height: 70px;
   background: #04d361;
   border-radius: 0px 5px 5px 0;
   border: 0;
   color: #fff;
   font-weight: bold;
   transition: background-color 0.2s;
    &:hover {
    background: ${shade(0.2,'#04d361')};
  }
 }



`;


export const  Error = styled.span`
  display:block;
  color: #c53030;
  margin-top: 8px;
`;


export const Repositories = styled.div`

 max-width: 700px;

 a {
   background: #fff;
   border-radius: 5px;
   width: 100%;
   display: block;
   text-decoration: none;
   display: flex;
   align-items:center;
   transition: transform 0.2s;

   &:hover {
   transform: translateX(10px);


  }


  & + a {
    margin-top:16px;
  }



  img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-left:5px;
  }

  div {

    margin-left: 16px;
    flex: 1;

    strong {
     font-size: 16px;
      color: #3D3D4D;
    }

    p {
      font-size: 14px;
      color: #A8A8B3;
      margin-top:4px;
    }

  }

  svg {
     margin-left: auto;
     color: #CBCBD6;
  }

 }



`;



