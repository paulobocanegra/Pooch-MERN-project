// import React from 'react';
// import CropImage from "./crop_image";


// class Avatar extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             userProfilePic:"",
//             editor: null,
//             scaleValue: 1
//         };
//     }

//     setEditorRef = editor => this.setState({editor});

//     profileImageChange = (fileChangeEvent) =>{
//         const file = fileChangeEvent.target.files[0]
//         const {type} = file
//         this.setState({selectedImage: file})
//     }

//     render(){
//         return(
//             <div>
//                 <input type="file" onChange={this.profileImageChange}  />
//                 <br/>
//                 <CropImage imageSrc={this.state.selectedImage}/>
//             </div>
//         )
//     }


// }

// export default Avatar;