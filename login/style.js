import styled from  'styled-components'

export const Container = styled.div `
 width : 500px;
 align-items: center;
 justify-content: center;
 background : #fff;
 border-radius : 4px;
 box-shadow : 0 0 20px rgba(0, 0 ,0.1);
 padding: 30px;
 margin: 80px auto;
`

export const Form = styled.form `
  margin-top: 30px;
  display:flex; 
  flex-direction: column

  input {
    flex:1;
    border: 1px solid #20B2AA;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 15px
   }

  button {
    margin-top: 10px;
    display:flex; 
    flex-direction: row;
    border: 0;
    border-radius: 4px;
    height: 48px;
    width: 200px;
    font-size: 16px;
    background: #7159c1;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
    margin-left: 120px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
`
