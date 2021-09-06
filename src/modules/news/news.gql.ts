import {gql} from "@apollo/client";

export const GET_NEWS_LIST = gql`
    query getNewsList{
        news{
            News{
                id
                name
                dateOfPublication
                Author{
                    name
                }
            }
        }
    }
`;

export const GET_NEWS_BY_ID = gql`
    query newsById($id:Int!){
        newsById(id:$id){
            id
            name
  	        descriptionShort
            descriptionFull 
  	        dateOfPublication
  	        Author{
                  name
              }
  	        files{
                logo{
                    src{
                        size_600
                    }
                }
            }
        }
    }
`;

export const ADD_NEWS = gql`
    mutation addNews($name:String!, $description:String!, $dateOfPublication:Date, $logo:Upload ){
        newsCreate(record:{
                    name:$name,
                    description:$description,
                    dateOfPublication:$dateOfPublication,
                    logo:$logo
                }
            ){
            name
            descriptionShort
            descriptionFull
            dateOfPublication
            Author{
                name
            }
            files{
                logo{
                    src{
                        size_600
                    } 
                }
            }
        }
    }
`;

export const DELETE_NEWS = gql`
mutation deleteNews($id:ID!){    
    deleteNews(id:$id){
            id
        }
}
`;

export const EDIT_NEWS = gql`
mutation editNews($id:ID!, $name:String, $descriptionShort:String, $descriptionFull:String, $dateOfPublication:String, $author:String, $image:String){ 
    editNews(
        id:$id,
        name:$name,
        descriptionShort:$descriptionShort,
        descriptionFull:$descriptionFull,
        dateOfPublication:$dateOfPublication,
        author:$author,
        image:$image
    ){
        id
        name
        descriptionFull
        descriptionShort
        dateOfPublication
        author
        image
    }
}
`;

export const UPLOAD_NEWS_IMAGE =  gql`
mutation imageUpload($file:Upload!){
    imageUpload(file:$file){
        filename,
        mimetype,
        encoding
    }
}    
`;
